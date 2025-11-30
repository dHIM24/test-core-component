import React from 'react';
import { SteppedProgressBar, SteppedProgressBarView } from '@alfalab/core-components-stepped-progress-bar';

export const App = () => {
  // Теперь тип SteppedProgressBarView доступен напрямую после исправления типов
  // Маппер с правильной типизацией
  const viewMapper: Record<SteppedProgressBarView, string> = {
    positive: 'Положительный',
    negative: 'Отрицательный',
    attention: 'Внимание',
    link: 'Ссылка',
    tertiary: 'Третичный',
    secondary: 'Вторичный',
    primary: 'Основной',
    accent: 'Акцентный',
  };

  return (
    <div>
      <SteppedProgressBar maxStep={5} step={2} view='positive' />
    </div>
  );
};
