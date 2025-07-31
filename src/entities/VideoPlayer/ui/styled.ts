import styled, { keyframes } from 'styled-components';

const VideoPlayerContainer = styled.div<{ width?: string | number; height?: string | number }>`
  position: relative;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
  width: ${(props) => (typeof props.width === 'number' ? `${props.width}px` : props.width)};
  height: ${(props) => (typeof props.height === 'number' ? `${props.height}px` : props.height)};
`;

const VideoElement = styled.video`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  z-index: 10;
`;

const LoaderSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid white;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 10px;
`;

const ErrorOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 0, 0, 0.1);
  color: #ff4444;
  z-index: 10;
  padding: 20px;
  text-align: center;
`;

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

const QualitySelector = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 20;
`;

const QualityToggleButton = styled.button<{ isActive?: boolean }>`
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
  min-width: 80px;
  justify-content: center;
  position: relative;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }

  &:active {
    transform: scale(0.98);
  }

  svg {
    transition: transform 0.2s ease;
    transform: ${(props) => (props.isActive ? 'rotate(180deg)' : 'rotate(0deg)')};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const QualityLoader = styled.div`
  width: 12px;
  height: 12px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const QualityDropdown = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 6px;
  padding: 8px;
  min-width: 140px;
  animation: ${(props) => (props.isVisible ? slideDown : slideUp)} 0.2s ease;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  pointer-events: ${(props) => (props.isVisible ? 'auto' : 'none')};
  transform: ${(props) => (props.isVisible ? 'translateY(0)' : 'translateY(-10px)')};
`;

const QualityButton = styled.button<{ isActive?: boolean; isLoading?: boolean }>`
  background: ${(props) => (props.isActive ? '#007bff' : 'rgba(255, 255, 255, 0.1)')};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  margin: 2px 0;
  cursor: ${(props) => (props.isLoading ? 'not-allowed' : 'pointer')};
  font-size: 12px;
  width: 100%;
  text-align: left;
  transition: all 0.2s ease;
  opacity: ${(props) => (props.isLoading ? 0.7 : 1)};
  position: relative;

  &:hover {
    background: ${(props) => (props.isActive ? '#0056b3' : 'rgba(255, 255, 255, 0.2)')};
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const ButtonLoader = styled.div`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid white;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const QualityLabel = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 10px;
  margin-bottom: 4px;
  text-align: center;
`;

export const Styled = {
  VideoPlayerContainer,
  VideoElement,
  LoaderOverlay,
  LoaderSpinner,
  ErrorOverlay,
  QualitySelector,
  QualityToggleButton,
  QualityLoader,
  QualityDropdown,
  QualityButton,
  ButtonLoader,
  QualityLabel,
};
