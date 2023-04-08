import React from 'react';
import { useQuery } from 'react-query';

import Content from '../../components/Content/Content';
import Cover from '../../components/Cover/Cover';
import Layout from '../../components/UI/Layout/Layout';
import Loading from '../../components/UI/Loading/Loading';
import { TPortfolioActionTypes, usePorftolioContext } from '../../context/portfolioContext';

const portfolioUrl = 'https://joonajo-portfolio.firebaseio.com/items.json';

const Home = () => {
  const { dispatch } = usePorftolioContext();

  const { data, isFetching: loading } = useQuery(
    portfolioUrl,
    () => fetch(portfolioUrl, { method: 'get' }).then(response => response.json()),
    {
      refetchOnWindowFocus: false,
      onSuccess: data => {
        if (data) {
          const items = Object.keys(data).map(item => {
            return data[item];
          });
          dispatch({
            type: TPortfolioActionTypes.SET_ITEMS,
            payload: items,
          });
        }
      },
    },
  );

  return (
    <>
      <Loading show={loading || !data} text spinner slideout fullscreen color={'dimgray'} />
      <Layout>
        <Cover show={!loading && data} />
        {!loading && data && <Content />}
      </Layout>
    </>
  );
};

export default Home;
