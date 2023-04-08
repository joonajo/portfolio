import React from 'react';
import styled, { css } from 'styled-components';

import { aLtrAfter, aLtrBefore } from './keyframes';

type Props = {
  subtitle: string;
  show: boolean;
};

const Root = styled.div<{ show: boolean }>`
  color: var(--background-color);
  margin-top: 1em;
  padding: 10px 20px;
  width: auto;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0;
  visibility: hidden;

  ${({ show }) =>
    show &&
    css`
      transition: opacity 1s 1.2s, visibility 0s 0s;
      visibility: visible;
      opacity: 1;
    `}

  & span {
    position: relative;
    overflow: hidden;
    display: block;
    line-height: 1;

    ::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: transparent;
      animation: ${aLtrBefore} 20s cubic-bezier(0.77, 0, 0.18, 1) forwards infinite;
      transform: translateX(0);
    }

    ::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: black;
      animation: ${aLtrAfter} 30s cubic-bezier(0.77, 0, 0.18, 1) forwards infinite;
      transform: translateX(-101%);
    }
  }

  & span:nth-of-type(1)::before,
  & span:nth-of-type(1)::after {
    animation-delay: 1s;
  }

  & span:nth-of-type(2)::before,
  & span:nth-of-type(2)::after {
    animation-delay: 1.5s;
  }
`;

const Subtitle = styled.span``;

const AnimatedSubtitle = ({ subtitle, show }: Props) => {
  return (
    <Root show={show}>
      <Subtitle>{subtitle}</Subtitle>
    </Root>
  );
};

export default AnimatedSubtitle;
