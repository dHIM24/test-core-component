export type HlsLevel = {
  url: string[];
  width: number;
  height: number;
  bitrate: number;
  level: number;
};

export type VideoPlayerProps = {
  src: string;
  poster?: string;
  controls?: boolean;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  width?: string | number;
  height?: string | number;
  className?: string;
  onLoadStart?: () => void;
  onLoadedData?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
  onError?: (error: any) => void;
  showQualitySelector?: boolean;
};
