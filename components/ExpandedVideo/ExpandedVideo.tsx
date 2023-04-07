import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import css from './ExpandedVideo.module.css';
import { icons } from '../../icons/icons';

type IExpandedVideo = {
  video_src: string;
  close: () => void;
};

const ExpandedVideo: React.FunctionComponent<IExpandedVideo> = ({ video_src, close }): JSX.Element => {
  const [unmount, setUnmount] = React.useState(false);

  React.useEffect(() => {
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

  const keyHandler = React.useCallback((event: KeyboardEvent) => {
    switch (event.key) {
      case 'Escape':
        closeHandler();
        break;

      default:
        break;
    }
  }, []);

  const closeHandler = React.useCallback(() => {
    setUnmount(true);
    setTimeout(() => {
      close();
    }, 300);
  }, [close]);

  const classes = [css.Main, unmount ? css.unmount : css.mount].join(' ');

  return (
    <div className={classes}>
      <div className={css.Backdrop} onClick={closeHandler}></div>
      <div className={css.VideoContainer}>
        <video className={css.Video} src={video_src} controls muted autoPlay playsInline />
      </div>
      <div className={css.CloseButton} onClick={closeHandler}>
        <FontAwesomeIcon icon={icons.faTimes as IconProp} />
      </div>
    </div>
  );
};

export default ExpandedVideo;
