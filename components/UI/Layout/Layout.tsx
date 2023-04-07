import React from 'react';

import css from './Layout.module.css';
import { ToolbarProvider } from '../../../context/toolbarContext';
import Footer from '../Footer/Footer';
import Toolbar from '../Toolbar/Toolbar';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <ToolbarProvider>
      <div className={css.Layout}>
        <Toolbar />
        {children}
        <Footer />
      </div>
    </ToolbarProvider>
  );
};

export default Layout;
