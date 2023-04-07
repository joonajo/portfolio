import * as React from 'react';
import styled from 'styled-components';

import { stretch } from '../../../keyframes/keyframes';

const Wrapper = styled.div<{ color: string }>`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;

  & > div {
    height: 100%;
    width: 6px;
    display: inline-block;
    margin: 0 2px;
    background: ${props => props.color};

    -webkit-animation: ${stretch} 1.2s infinite ease-in-out;
    animation: ${stretch} 1.2s infinite ease-in-out;
  }

  & > div:nth-child(2) {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  & > div:nth-child(3) {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }

  & > div:nth-child(4) {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  & > div:nth-child(5) {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }
`;

const Rectangle = styled.div`
  border: 1px solid white;
`;

type Props = {
  color: string;
};

export const BarLoader = (props: Props) => {
  const { color } = props;
  return (
    <Wrapper color={color}>
      <Rectangle />
      <Rectangle />
      <Rectangle />
      <Rectangle />
      <Rectangle />
    </Wrapper>
  );
};
