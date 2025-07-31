import React from 'react';
import { VideoPlayer } from '../../entities';
import { Text, Wrapper } from '../../shared/ui';
import { HLS_URL } from '../../shared/constants';
import { PLACEHOLDER_POSTER } from './constants';

export const Video = () => {
  return (
    <Wrapper>
      <Text variant='sectionTitle'>AlfaTube</Text>

      <VideoPlayer
        src={HLS_URL}
        poster={PLACEHOLDER_POSTER}
        controls={true}
        autoplay={false}
        muted={false}
        loop={false}
        width='100%'
        height='400px'
        showQualitySelector={true}
      />
    </Wrapper>
  );
};
