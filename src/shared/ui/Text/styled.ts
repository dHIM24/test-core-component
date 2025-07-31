import styled from 'styled-components';

export const Text = styled.div<{ variant?: string }>`
  ${({ variant }) => {
    switch (variant) {
      case 'title':
        return `
          margin: 0 0 0.5rem 0;
          font-size: 2.5rem;
          font-weight: 700;
        `;
      case 'subtitle':
        return `
          margin: 0;
          font-size: 1.1rem;
          opacity: 0.9;
        `;
      case 'sectionTitle':
        return `
          margin: 0 0 1.5rem 0;
          font-size: 1.5rem;
          font-weight: 600;
        `;
      case 'infoItem':
        return `
          padding: 0.5rem 0;
          font-size: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);

          &:last-child {
            border-bottom: none;
          }
        `;
      default:
        return '';
    }
  }}
`;

export const Styled = {
  Text,
};
