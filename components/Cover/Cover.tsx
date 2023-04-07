import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import zenscroll from 'zenscroll';

import styles from './Cover.module.css';
import { icons } from '../../icons/icons';
import MediaIcons from '../UI/Icons/MediaIcons/MediaIcons';

const Root = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: var(--background-color);
`;

const CoverContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
`;

const MediaIconsContainer = styled.div`
  padding: 24px 16px;
`;

const TitleContainer = styled.div`
  display: flex;
  font-size: 1rem;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 32px;
`;

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 100px;
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
  background: rgba(0, 0, 0, 0.1);
  color: var(--text-color);

  & svg {
    height: 15px;
  }

  &:hover {
    background: royalblue;
    color: black;
  }
`;

type Props = {
  show: boolean;
};

const Cover = ({ show }: Props) => {
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
      <CoverContent>
        <MediaIconsContainer>
          <MediaIcons />
        </MediaIconsContainer>
        <TitleContainer>
          <div className={[animTextStyles, styles.First].join(' ')}>
            <AnimatedText text="Joona" show={show} />
          </div>
          <div className={[animTextStyles, styles.Second].join(' ')}>
            <AnimatedText text="Joenpolvi" show={show} delay={0.5} />
          </div>
          <p className={descStyles}>
            <span>{'<software developer />'}</span>
          </p>
        </TitleContainer>
      </CoverContent>
      <ArrowContainer>
        <ArrowIcon onClick={scrollToPortfolio}>
          <FontAwesomeIcon icon={icons.faChevronDown as IconProp} size="lg" />
        </ArrowIcon>
      </ArrowContainer>
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

  const trueDelay = delay ? delay : 0;

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
