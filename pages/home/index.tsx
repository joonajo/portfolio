import { NextPage } from 'next';
import React from 'react';

import Home from '../../containers/Home/Home';

const Index: NextPage = () => {
  React.useEffect(() => {
    document.title = 'Portfolio // Home';
  }, []);

  return <Home />;
};

export default Index;
