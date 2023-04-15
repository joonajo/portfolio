import React from 'react';

import Content from '../../components/Content/Content';
import Cover from '../../components/Cover/Cover';
import Layout from '../../components/UI/Layout/Layout';
import Loading from '../../components/UI/Loading/Loading';
import { usePortfolioData } from '../../hooks/usePortfolioData';

const Home = () => {
  const { loadingPortfolioData: loading } = usePortfolioData();

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
