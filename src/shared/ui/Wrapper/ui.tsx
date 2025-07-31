import React from 'react';
import { Styled } from './styled';
import { TWrapperProps } from './types';

export const Wrapper = ({ children }: TWrapperProps) => {
  return (
    <Styled.Main>
      <Styled.Section>{children}</Styled.Section>
    </Styled.Main>
  );
};
