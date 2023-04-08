import React from 'react';
import styled, { css } from 'styled-components';

import { deconstructed1, deconstructed2, deconstructed3, deconstructed4 } from './keyframes';

type Props = {
  firstRow: string;
  secondRow: string;
  show: boolean;
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Row = styled.div<{ show: boolean; transitionDelay: number }>`
  opacity: 0;
  visibility: hidden;

  ${({ show, transitionDelay }) =>
    show &&
    css`
      transition: opacity 3s ${transitionDelay}s, visibility 0s 0s;
      visibility: visible;
      opacity: 1;
    `}
`;

const AnimatedTitle = ({ firstRow, secondRow, show }: Props) => {
  return (
    <Root>
      <Row show={show} transitionDelay={0.4}>
        <AnimatedText text={firstRow} />
      </Row>
      <Row show={show} transitionDelay={0.8}>
        <AnimatedText text={secondRow} delay={0.5} />
      </Row>
    </Root>
  );
};

type AnimatedTextProps = {
  text: string;
  show?: boolean;
  delay?: number;
};

const AnimatedTextContainer = styled.div`
  position: relative;
  margin: auto;
  color: transparent;
  overflow: hidden;
  width: 100%;
  text-align: center;
  cursor: default;
  opacity: 1;

  & span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: black;
    pointer-events: none;
  }

  & span:nth-child(1) {
    -webkit-mask-image: linear-gradient(black 25%, transparent 25%);
    mask-image: linear-gradient(black 25%, transparent 25%);
    animation: ${deconstructed1} 40s infinite;
    color: var(--text-color);
  }

  & span:nth-child(2) {
    -webkit-mask-image: linear-gradient(transparent 25%, black 25%, black 50%, transparent 50%);
    mask-image: linear-gradient(transparent 25%, black 25%, black 50%, transparent 50%);
    animation: ${deconstructed2} 20s infinite;
    color: var(--text-color);
  }

  & span:nth-child(3) {
    -webkit-mask-image: linear-gradient(transparent 50%, black 50%, black 75%, transparent 75%);
    mask-image: linear-gradient(transparent 50%, black 50%, black 75%, transparent 75%);
    animation: ${deconstructed3} 15s infinite;
    color: var(--text-color);
  }

  & span:nth-child(4) {
    -webkit-mask-image: linear-gradient(transparent 75%, black 75%, black 100%, transparent 100%);
    mask-image: linear-gradient(transparent 75%, black 75%, black 100%, transparent 100%);
    animation: ${deconstructed4} 10s infinite;
    color: var(--text-color);
  }

  @media (min-width: 350px) {
    font-size: 4.3rem;
  }

  @media (min-width: 370px) {
    font-size: 6.5rem;
  }

  @media (min-width: 600px) {
    font-size: 10rem;
  }

  @media (min-width: 1000px) {
    font-size: 14rem;
  }

  @media (min-width: 2000px) {
    font-size: 16rem;
  }
`;

const AnimatedText = ({ text, delay }: AnimatedTextProps) => {
  const trueDelay = delay ? delay : 0;

  return (
    <AnimatedTextContainer style={{ transitionDelay: `${trueDelay / 2 + 0.3}s` }}>
      {text}
      <span style={{ animationDelay: `${trueDelay}s` }}>{text}</span>
      <span style={{ animationDelay: `${trueDelay}s` }}>{text}</span>
      <span style={{ animationDelay: `${trueDelay}s` }}>{text}</span>
      <span style={{ animationDelay: `${trueDelay}s` }}>{text}</span>
    </AnimatedTextContainer>
  );
};

export default AnimatedTitle;
