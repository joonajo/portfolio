import dynamic from 'next/dynamic';
import React from 'react';
import styled from 'styled-components';

import { IPortfolioContext, PortfolioContext, TPortfolioState } from '../../context/portfolioContext';
import { IPortfolioItem } from '../../interfaces/interfaces';

const Item = dynamic(() => import('../Item/Item'));

const Root = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  background: var(--content-bg-color);
  overflow: hidden;
`;

const Title = styled.h2`
  padding-top: 20px;
  letter-spacing: 0.1em;
  padding-right: 0.1em;
  font-size: 2rem;
  text-transform: uppercase;
  color: dimgray;
  transform: scale(1, 1.1);
  text-shadow: 1px 1px 10px gainsboro;
  font-family: Ubuntu;
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
