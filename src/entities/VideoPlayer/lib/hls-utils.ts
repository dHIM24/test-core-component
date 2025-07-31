import { HlsLevel } from '../types';
import { ALLOWED_QUALITIES } from '../constants';

export const filterAndSortLevels = (hlsLevels: any[]): HlsLevel[] => {
  return hlsLevels
    .map((level, index) => ({
      url: level.url,
      width: level.width,
      height: level.height,
      bitrate: level.bitrate,
      level: index,
    }))
    .filter((level) => ALLOWED_QUALITIES.includes(level.height))
    .sort((a, b) => b.height - a.height);
};

export const formatQualityLabel = (level: HlsLevel): string => {
  return `${level.height}p`;
};

export const getCurrentQualityLabel = (currentLevel: number, levels: HlsLevel[]): string => {
  if (currentLevel >= 0 && levels[currentLevel]) {
    return `${levels[currentLevel].height}p`;
  }
  return 'Авто';
};
