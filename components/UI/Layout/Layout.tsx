import React from 'react';
import styled from 'styled-components';

import { ToolbarProvider } from '../../../context/toolbarContext';
import Footer from '../Footer/Footer';
import Toolbar from '../Toolbar/Toolbar';

type Props = {
  children: React.ReactNode;
};

const Root = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
`;

const Layout = ({ children }: Props) => {
  return (
    <ToolbarProvider>
      <Root>
        <Toolbar />
        {children}
        <Footer />
      </Root>
    </ToolbarProvider>
  );
};

export default Layout;
