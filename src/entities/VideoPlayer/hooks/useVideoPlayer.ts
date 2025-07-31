import { useEffect, useRef, useState, useCallback } from 'react';
import Hls from 'hls.js';
import { VideoPlayerProps, HlsLevel } from '../types';
import { filterAndSortLevels, formatQualityLabel, getCurrentQualityLabel } from '../lib';

export const useVideoPlayer = ({
  src,
  autoplay = false,
  onLoadStart,
  onLoadedData,
  onPlay,
  onPause,
  onEnded,
  onError,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [levels, setLevels] = useState<HlsLevel[]>([]);
  const [currentLevel, setCurrentLevel] = useState<number>(-1);
  const [isQualityDropdownVisible, setIsQualityDropdownVisible] = useState(false);
  const [isQualityLoading, setIsQualityLoading] = useState(false);
  const [loadingLevel, setLoadingLevel] = useState<number | null>(null);

  const handleLoadStart = useCallback(() => {
    setIsLoading(true);
    onLoadStart?.();
  }, [onLoadStart]);

  const handleLoadedData = useCallback(() => {
    setIsLoading(false);
    onLoadedData?.();
  }, [onLoadedData]);

  const handlePlay = useCallback(() => {
    onPlay?.();
  }, [onPlay]);

  const handlePause = useCallback(() => {
    onPause?.();
  }, [onPause]);

  const handleEnded = useCallback(() => {
    onEnded?.();
  }, [onEnded]);

  const handleError = useCallback(
    (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
      const video = e.currentTarget;
      const error = video.error;
      if (error) {
        const errorMessage = `Video Error: ${error.message}`;
        setError(errorMessage);
        onError?.(error);
      }
    },
    [onError],
  );

  const handleQualityChange = useCallback(
    (levelIndex: number) => {
      if (hlsRef.current && !isQualityLoading) {
        try {
          setIsQualityLoading(true);
          setLoadingLevel(levelIndex);

          const currentTime = videoRef.current?.currentTime || 0;
          const wasPlaying = !videoRef.current?.paused;

          hlsRef.current.currentLevel = levelIndex;
          setCurrentLevel(levelIndex);

          if (videoRef.current) {
            videoRef.current.currentTime = currentTime;
            if (wasPlaying) {
              videoRef.current.play().catch(console.error);
            }
          }
        } catch (error) {
          console.error('Error switching quality:', error);
          setIsQualityLoading(false);
          setLoadingLevel(null);
        }
      }
    },
    [isQualityLoading],
  );

  const toggleQualityDropdown = useCallback(() => {
    setIsQualityDropdownVisible((prev) => !prev);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const loadVideo = async () => {
      try {
        setIsLoading(true);
        setError(null);
        setLevels([]);
        setCurrentLevel(-1);

        if (Hls.isSupported()) {
          const hls = new Hls({
            debug: false,
            enableWorker: true,
            lowLatencyMode: true,
            backBufferLength: 90,
          });

          hlsRef.current = hls;

          hls.on(Hls.Events.MEDIA_ATTACHED, () => {
            hls.loadSource(src);
          });

          hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
            setIsLoading(false);

            console.log(
              'Available HLS levels:',
              hls.levels.map((level) => ({
                height: level.height,
                width: level.width,
                bitrate: level.bitrate,
              })),
            );

            const filteredLevels = filterAndSortLevels(hls.levels);
            console.log('Filtered levels:', filteredLevels);

            setLevels(filteredLevels);

            const initialLevel = filteredLevels.length > 0 ? filteredLevels[0].level : -1;
            setCurrentLevel(initialLevel);

            if (autoplay) {
              video.play().catch(console.error);
            }
          });

          hls.on(Hls.Events.LEVEL_SWITCHED, (event, data) => {
            setCurrentLevel(data.level);
            setIsQualityLoading(false);
            setLoadingLevel(null);
          });

          hls.on(Hls.Events.LEVEL_LOADING, (event, data) => {
            console.log('Loading quality level:', data.level);
            setLoadingLevel(data.level);
          });

          hls.on(Hls.Events.LEVEL_LOADED, (event, data) => {
            console.log('Quality level loaded:', data.level);
            setIsQualityLoading(false);
            setLoadingLevel(null);
          });

          hls.on(Hls.Events.ERROR, (event, data) => {
            if (data.details === 'bufferStalledError') {
              console.warn('Buffer stalled, attempting to recover...');
              return;
            }

            if (data.details === 'levelLoadError') {
              console.warn('Level load error, trying next level...');
              return;
            }

            setError(`HLS Error: ${data.details}`);
            onError?.(data);
          });

          hls.attachMedia(video);
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = src;
          setIsLoading(false);
        } else {
          throw new Error('HLS is not supported in this browser');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        onError?.(err);
        setIsLoading(false);
      }
    };

    loadVideo();

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [src, autoplay, onError]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('[data-quality-selector]')) {
        setIsQualityDropdownVisible(false);
      }
    };

    if (isQualityDropdownVisible) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isQualityDropdownVisible]);

  return {
    videoRef,
    isLoading,
    error,
    levels,
    currentLevel,
    isQualityDropdownVisible,
    isQualityLoading,
    loadingLevel,
    handleLoadStart,
    handleLoadedData,
    handlePlay,
    handlePause,
    handleEnded,
    handleError,
    handleQualityChange,
    toggleQualityDropdown,
    formatQualityLabel,
    getCurrentQualityLabel: () => getCurrentQualityLabel(currentLevel, levels),
  };
};
