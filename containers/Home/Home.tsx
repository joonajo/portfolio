import { NextPage } from 'next';
import React from 'react';

import Content from '../../components/Content/Content';
import Cover from '../../components/Cover/Cover';
import Layout from '../../components/UI/Layout/Layout';
import Loading from '../../components/UI/Loading/Loading';
import { PortfolioContext, TPortfolioActionTypes } from '../../context/portfolioContext';
import { IPortfolioItem } from '../../interfaces/interfaces';

const Home: NextPage = () => {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    document.title = 'Portfolio';
  }, []);

  const portfolioContext = React.useContext(PortfolioContext);
  const portfolioState = portfolioContext.state;
  const portfolioDispatch = portfolioContext.dispatch;

  React.useEffect(() => {
    if (portfolioState && portfolioDispatch) {
      if (portfolioState.items.length === 0) {
        const baseURL: string = 'https://joonajo-portfolio.firebaseio.com/items.json';

        const newItems: IPortfolioItem[] = [];

        setLoading(true);
        fetch(baseURL, { method: 'get' })
          .then(response => response.json())
          .then(data => {
            if (data) {
              Object.keys(data).forEach(item => {
                newItems.push(data[item]);
              });
              portfolioDispatch({
                type: TPortfolioActionTypes.SET_ITEMS,
                payload: newItems,
              });
            }
            setLoading(false);
          });
      }
    }
  }, [portfolioState, portfolioDispatch]);

  return (
    <>
      <Loading show={loading} text spinner slideout fullscreen color={'dimgray'} />
      <Layout>
        <Cover show={!loading} />
        <Content />
      </Layout>
    </>
  );
};

export default Home;
