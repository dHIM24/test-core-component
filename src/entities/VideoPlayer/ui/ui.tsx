import React, { FC } from 'react';
import { Styled } from './styled';
import { VideoPlayerProps } from '../types';
import { Text } from '../../../shared/ui';
import { useVideoPlayer } from '../hooks';

export const VideoPlayer: FC<VideoPlayerProps> = ({
  src,
  poster,
  controls = true,
  autoplay = false,
  muted = false,
  loop = false,
  width = '100%',
  height = 'auto',
  className = '',
  onLoadStart,
  onLoadedData,
  onPlay,
  onPause,
  onEnded,
  onError,
  showQualitySelector = true,
}) => {
  const {
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
    getCurrentQualityLabel,
  } = useVideoPlayer({
    src,
    autoplay,
    onLoadStart,
    onLoadedData,
    onPlay,
    onPause,
    onEnded,
    onError,
  });

  return (
    <Styled.VideoPlayerContainer width={width} height={height} className={className}>
      {isLoading && (
        <Styled.LoaderOverlay>
          <Styled.LoaderSpinner />
          <Text variant='subtitle' as='span'>
            Загрузка видео...
          </Text>
        </Styled.LoaderOverlay>
      )}

      {error && (
        <Styled.ErrorOverlay>
          <Text variant='subtitle' as='span'>
            Ошибка: {error}
          </Text>
        </Styled.ErrorOverlay>
      )}

      {showQualitySelector && levels.length > 1 && (
        <Styled.QualitySelector data-quality-selector>
          <Styled.QualityToggleButton
            isActive={isQualityDropdownVisible}
            onClick={toggleQualityDropdown}
            disabled={isQualityLoading}>
            {isQualityLoading ? <Styled.QualityLoader /> : getCurrentQualityLabel()}
            <svg width='12' height='12' viewBox='0 0 24 24' fill='currentColor'>
              <path d='M7 10l5 5 5-5z' />
            </svg>
          </Styled.QualityToggleButton>

          <Styled.QualityDropdown isVisible={isQualityDropdownVisible}>
            <Styled.QualityLabel>Качество</Styled.QualityLabel>
            {levels.map((level) => (
              <Styled.QualityButton
                key={level.level}
                isActive={level.level === currentLevel}
                isLoading={loadingLevel === level.level}
                onClick={() => handleQualityChange(level.level)}
                disabled={isQualityLoading}>
                {formatQualityLabel(level)}
                {loadingLevel === level.level && <Styled.ButtonLoader />}
              </Styled.QualityButton>
            ))}
          </Styled.QualityDropdown>
        </Styled.QualitySelector>
      )}

      <Styled.VideoElement
        ref={videoRef}
        poster={poster}
        controls={controls}
        muted={muted}
        loop={loop}
        onLoadStart={handleLoadStart}
        onLoadedData={handleLoadedData}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
        onError={handleError}
      />
    </Styled.VideoPlayerContainer>
  );
};
