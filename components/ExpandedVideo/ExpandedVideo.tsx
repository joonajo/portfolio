import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled, { css as styledComponentsCss } from 'styled-components';

import { icons } from '../../icons/icons';
import { fadein } from '../../keyframes/keyframes';

type Props = {
  video_src: string;
  close: () => void;
};

const Root = styled.div<{ mounted: boolean }>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: opacity 0.3s;
  opacity: 0;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  z-index: 20;

  ${({ mounted }) =>
    mounted
      ? styledComponentsCss`
          opacity: 1;
          animation: ${fadein} 0.3s;
        `
      : styledComponentsCss`
          opacity: 0;
        `}
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 20;
  background: rgba(0, 0, 0, 0.8);
`;

const VideoContainer = styled.div`
  z-index: 21;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;

  & video {
    max-height: 80%;
    max-width: 80%;
  }
`;

const CloseButton = styled.div`
  z-index: 22;
  position: absolute;
  top: 10px;
  right: 20px;

  svg {
    color: gray;
    transition: all 0.2s;
    cursor: pointer;
  }

  :hover {
    svg {
      color: whitesmoke;
    }
  }
`;

const ExpandedVideo = ({ video_src, close }: Props) => {
  const [unmount, setUnmount] = React.useState(false);

  React.useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          closeHandler();
          break;

        default:
          break;
      }
    };

    window.addEventListener('keydown', keyHandler, true);

    return () => window.removeEventListener('keydown', keyHandler, true);
  }, []);

  React.useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle: string = window.getComputedStyle(document.body).overflow!;
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden';
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []); // Empty array ensures effect is only run on mount and unmount

  const closeHandler = React.useCallback(() => {
    setUnmount(true);
    setTimeout(() => {
      close();
    }, 300);
  }, [close]);

  return (
    <Root mounted={!unmount}>
      <Backdrop onClick={closeHandler}></Backdrop>
      <VideoContainer>
        <video src={video_src} controls muted autoPlay playsInline />
      </VideoContainer>
      <CloseButton onClick={closeHandler}>
        <FontAwesomeIcon icon={icons.faTimes as IconProp} size="1x" />
      </CloseButton>
    </Root>
  );
};

export default ExpandedVideo;
