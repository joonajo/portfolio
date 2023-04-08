import dynamic from 'next/dynamic';
import React from 'react';
import styled from 'styled-components';

import { usePorftolioContext } from '../../context/portfolioContext';

const Item = dynamic(() => import('../Item/Item'));

const Root = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  background: var(--content-bg-color);
  overflow: hidden;
  padding: 60px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 7rem;
  font-weight: 100;
  text-transform: lowercase;
  width: 100%;
  font-weight: 500;
  text-shadow: 1px 1px 10px gainsboro;
`;

const Content = () => {
  const { state } = usePorftolioContext();

  return (
    <Root>
      <Title>Portfolio</Title>
      {state.items.map(item => {
        return <Item key={item.title} {...item} />;
      })}
    </Root>
  );
};

export default Content;
