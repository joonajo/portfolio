import React from 'react';
import { useQuery } from 'react-query';

import Content from '../../components/Content/Content';
import Cover from '../../components/Cover/Cover';
import Layout from '../../components/UI/Layout/Layout';
import Loading from '../../components/UI/Loading/Loading';
import { PortfolioContext, TPortfolioActionTypes } from '../../context/portfolioContext';
import { IPortfolioItem } from '../../interfaces/interfaces';

const portfolioUrl = 'https://joonajo-portfolio.firebaseio.com/items.json';

const Home = () => {
  const portfolioContext = React.useContext(PortfolioContext);
  const portfolioDispatch = portfolioContext.dispatch;

  const { isFetching: loading } = useQuery(
    portfolioUrl,
    () => fetch(portfolioUrl, { method: 'get' }).then(response => response.json()),
    {
      refetchOnWindowFocus: false,
      onSuccess: data => {
        const newItems: IPortfolioItem[] = [];

        if (data) {
          Object.keys(data).forEach(item => {
            newItems.push(data[item]);
          });
          portfolioDispatch?.({
            type: TPortfolioActionTypes.SET_ITEMS,
            payload: newItems,
          });
        }
      },
    },
  );

  return (
    <>
      <Loading show={loading} text spinner slideout fullscreen color={'dimgray'} />
      <Layout>
        <Cover show={!loading} />
        {!loading && <Content />}
      </Layout>
    </>
  );
};

export default Home;
