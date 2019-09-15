import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../../../../icons/icons'

const css = require('./MediaIcons.css')

interface IProps {
  horizontal?: boolean
  vertical?: boolean
}

const MediaIcons: React.FunctionComponent<IProps> = ({ horizontal, vertical }): JSX.Element => {
  
  const containerClasses = [
    css.Icons,
    horizontal ? css.horizontal : 
    vertical ? css.vertical : null,
  ].join(' ')

  const iconClasses = [
    css.Icon,
    horizontal ? css.horizontal : 
    vertical ? css.vertical : null,
  ].join(' ')

  return (
    <div className={containerClasses}>
      <a href='https://github.com/joonajo' className={iconClasses} target='_blank' rel="noopener noreferrer">
        <FontAwesomeIcon icon={icons.faGithub} />
      </a>
      <a href='mailto: joona.joenpolvi@gmail.com' className={iconClasses}>
        <FontAwesomeIcon icon={icons.faEnvelope} />
      </a>
      <a href="https://instagram.com/joonajo" className={iconClasses} target='_blank' rel="noopener noreferrer">
        <FontAwesomeIcon icon={icons.faInstagram} />
      </a>
      <a href="https://www.strava.com/athletes/6604883" className={iconClasses} target='_blank' rel="noopener noreferrer">
        <FontAwesomeIcon icon={icons.faStrava} />
      </a>
      <a href="https://www.flickr.com/photos/150620060@N07/" className={iconClasses} target='_blank' rel="noopener noreferrer">
        <FontAwesomeIcon icon={icons.faFlickr} />
      </a>
    </div>
  )
}

export default MediaIcons