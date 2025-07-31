import React from 'react';
import { Styled } from './styled';
import { TTextProps } from './types';

export const Text = ({ children, className, variant, as }: TTextProps) => {
  const Component = as || 'div';

  return (
    <Styled.Text as={Component} variant={variant} className={className}>
      {children}
    </Styled.Text>
  );
};
