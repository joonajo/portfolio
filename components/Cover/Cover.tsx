import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import zenscroll from 'zenscroll';

import styles from './Cover.module.css';
import { icons } from '../../icons/icons';
import bgImage from '../../public/images/palm.png';
import MediaIcons from '../UI/Icons/MediaIcons/MediaIcons';

const Root = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const BackgroundContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 0;
`;

const BackgroundMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(2, 0, 10, 0.8);
`;

const BackgroundImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
`;

const CoverContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const MediaIconsContainer = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
`;

const TitleContainer = styled.div`
  z-index: 10;
  display: flex;
  font-size: 1rem;
  flex-flow: column;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`;

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 100px;
`;

const ArrowText = styled.p`
  position: absolute;
  color: rgba(255, 255, 255, 0.5);
  top: -100%;
  font-weight: bold;
  text-align: center;
  width: 100px;
  font-size: 0.7em;
  text-transform: uppercase;
  opacity: 0;
  transition: all 0.2s;
  left: 50%;
  transform: translateX(-50%);
  cursor: default;
`;

const ArrowIcon = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  transition: all 0.2s;
  background: rgba(255, 255, 255, 0.1);
  color: var(--title-color);

  & svg {
    height: 15px;
  }

  &:hover {
    background: royalblue;
    color: black;

    ${ArrowText} {
      opacity: 1;
    }
  }
`;

type Props = {
  show: boolean;
  load: () => void;
};

const Cover = ({ show, load }: Props) => {
  const coverRef = React.useRef<HTMLDivElement>(null);

  const scrollToPortfolio = React.useCallback(() => {
    if (coverRef && coverRef.current) {
      const posToScrollTo: number = coverRef.current.clientHeight;

      zenscroll.toY(posToScrollTo);
    }
  }, [coverRef]);

  const descStyles = [styles.Description, show && styles.loaded].join(' ');

  const animTextStyles = [styles.AnimText, show && styles.loaded].join(' ');

  return (
    <Root ref={coverRef}>
      <BackgroundContainer>
        <BackgroundImage src={bgImage} alt="cover-bg-palm" onLoad={load} />
        <BackgroundMask />
      </BackgroundContainer>
      <CoverContent>
        <MediaIconsContainer>
          <MediaIcons vertical />
        </MediaIconsContainer>
        <TitleContainer>
          <div className={[animTextStyles, styles.First].join(' ')}>
            <AnimatedText text="Joona" show={show} />
          </div>
          <div className={[animTextStyles, styles.Second].join(' ')}>
            <AnimatedText text="Joenpolvi" show={show} delay={0.5} />
          </div>
          <p className={descStyles}>
            {' '}
            <span>{'<Front End Developer />'}</span>{' '}
          </p>
        </TitleContainer>
        <ArrowContainer>
          <ArrowIcon onClick={scrollToPortfolio}>
            <FontAwesomeIcon icon={icons.faChevronDown as IconProp} size="lg" />
          </ArrowIcon>
          <p className={styles.ArrowText}>to portfolio</p>
        </ArrowContainer>
      </CoverContent>
    </Root>
  );
};

type AnimatedTextProps = {
  text: string;
  show?: boolean;
  delay?: number;
};

const AnimatedText = ({ text, delay }: AnimatedTextProps) => {
  const containerStyles = [styles.AnimatedText].join(' ');

  const trueDelay: number = delay ? delay : 0;

  return (
    <div className={containerStyles} style={{ transitionDelay: `${trueDelay / 2 + 0.3}s` }}>
      {text}
      <span style={{ animationDelay: `${trueDelay}s` }}>{text}</span>
      <span style={{ animationDelay: `${trueDelay}s` }}>{text}</span>
      <span style={{ animationDelay: `${trueDelay}s` }}>{text}</span>
      <span style={{ animationDelay: `${trueDelay}s` }}>{text}</span>
    </div>
  );
};

export default Cover;
