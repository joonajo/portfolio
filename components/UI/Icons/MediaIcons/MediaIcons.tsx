import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../../../../icons/icons'

const css = require('./MediaIcons.module.css')

interface IMediaIcons {
  horizontal?: boolean
  vertical?: boolean
}

const MediaIcons: React.FunctionComponent<IMediaIcons> = ({ horizontal = true, vertical }): JSX.Element => {
  
  const containerStyles = [
    css.Icons,
    horizontal && css.horizontal,
    vertical && css.vertical,
  ].join(' ')

  const iconStyles = [
    css.Icon,
    horizontal && css.horizontal,
    vertical && css.vertical,
  ].join(' ')

  return (
    <div className={containerStyles}>
      <a href='https://github.com/joonajo' aria-label="github-link" className={iconStyles} target='_blank' rel="noopener noreferrer">
        <FontAwesomeIcon icon={icons.faGithub} />
      </a>
      <a href='mailto: joona.joenpolvi@gmail.com' aria-label="email-link" className={iconStyles}>
        <FontAwesomeIcon icon={icons.faEnvelope} />
      </a>
      <a href="https://instagram.com/joonajo" aria-label="ig-link" className={iconStyles} target='_blank' rel="noopener noreferrer">
        <FontAwesomeIcon icon={icons.faInstagram} />
      </a>
      <a href="https://www.flickr.com/photos/150620060@N07/" aria-label="flickr-link" className={iconStyles} target='_blank' rel="noopener noreferrer">
        <FontAwesomeIcon icon={icons.faFlickr} />
      </a>
    </div>
  )
}

export default MediaIcons