import React from 'react'
import MediaIcons from '../Icons/MediaIcons/MediaIcons'

const css = require('./Footer.module.css')

const Footer: React.FunctionComponent = ():JSX.Element => {
  return (
    <div className={css.Footer}>
      <div className={css.MediaIcons}>
        <MediaIcons horizontal />
      </div>
      <div className={css.Copyright}>
        <i className="fas fa-cloud"></i>
        <p>© Joona Joenpolvi 2020. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer