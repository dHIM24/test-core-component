import { ReactNode } from 'react';

export type TTextProps = {
  children: ReactNode;
  className?: string;
  variant?: 'title' | 'subtitle' | 'sectionTitle' | 'infoItem';
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'li';
}
