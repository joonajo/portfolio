import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { 
  faGithub,
  faInstagram,
  faFlickr,
} from '@fortawesome/free-brands-svg-icons'

const css = require('./MediaIcons.css')

const MediaIcons: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className={css.FooterIcons}>
      <a href='https://github.com/joonajo' className={css.Icon} target='_blank' rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href='mailto: joona.joenpolvi@gmail.com' className={css.Icon}>
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href="https://instagram.com/joonajo" className={css.Icon} target='_blank' rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      {/* <a href="https://www.strava.com/athletes/6604883">
        <Icon name="strava" />
      </a> */}
      <a href="https://www.flickr.com/photos/150620060@N07/" className={css.Icon} target='_blank' rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFlickr} />
      </a>
    </div>
  )
}

export default MediaIcons