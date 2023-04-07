/** @format */
import Link from 'next/link';
import React from 'react';

import css from './Toolbar.module.css';
import { IToolbar, ToolbarContext } from '../../../context/toolbarContext';

const Toolbar: React.FunctionComponent = (): JSX.Element => {
  const toolbarContext: IToolbar = React.useContext(ToolbarContext);
  const show = React.useRef(toolbarContext.show);

  const classes = [css.Toolbar, show.current && css.enabled].join(' ');

  return (
    <div className={classes}>
      <div className={css.PageLinks}>
        <Link legacyBehavior href="/Portfolio">
          <a>Portfolio</a>
        </Link>
        <Link legacyBehavior href="/About">
          <a>About</a>
        </Link>
      </div>
    </div>
  );
};

export default Toolbar;
