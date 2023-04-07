import React, { useState } from 'react';

import css from './Footer.module.css';
import MediaIcons from '../Icons/MediaIcons/MediaIcons';

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());

  return (
    <div className={css.Footer}>
      <div className={css.MediaIcons}>
        <MediaIcons horizontal />
      </div>
      <div className={css.Copyright}>
        <i className="fas fa-cloud"></i>
        <p>© Joona Joenpolvi {currentYear}. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
