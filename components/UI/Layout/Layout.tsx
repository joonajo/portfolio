import React from 'react';
import styled from 'styled-components';

import { ToolbarProvider } from '../../../context/toolbarContext';
import Footer from '../Footer/Footer';

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
        {children}
        <Footer />
      </Root>
    </ToolbarProvider>
  );
};

export default Layout;
