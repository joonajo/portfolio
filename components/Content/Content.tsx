import dynamic from 'next/dynamic';
import React from 'react';
import styled from 'styled-components';

import { IPortfolioContext, PortfolioContext, TPortfolioState } from '../../context/portfolioContext';
import { IPortfolioItem } from '../../interfaces/interfaces';

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
  padding-block-end: 24px;
`;

const Title = styled.h2`
  padding-top: 24px;
  padding-right: 0.1em;
  font-size: 2rem;
  font-weight: 100;
  text-transform: uppercase;
  color: dimgray;
  transform: scale(1, 1);
  text-shadow: 1px 1px 10px gainsboro;
`;

const Content = () => {
  const portfolioContext: IPortfolioContext = React.useContext(PortfolioContext);
  const portfolioState: TPortfolioState = portfolioContext.state;

  return (
    <Root>
      <Title>Portfolio</Title>
      {portfolioState.items.map((item: IPortfolioItem) => {
        return <Item key={item.title} {...item} />;
      })}
    </Root>
  );
};

export default Content;
