import React from 'react'
import { IPortfolioItem } from '../../interfaces/interfaces'
import { icons } from '../../icons/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const css = require('./Item.module.css')

const SHOW_TRESHOLD = 300 // pixels

const Item: React.FunctionComponent<IPortfolioItem> = (props): JSX.Element => {
  const[showItem, toggleShowItem] = React.useState(true)
  const itemRef = React.useRef<HTMLDivElement>(null)
  
  // update the event listeners every time the showItem state is changed
  React.useEffect(() => {
    window.addEventListener('scroll', checkIfInViewport, true)
  
    return () => window.removeEventListener('scroll', checkIfInViewport, true)  
  }, [showItem])
  
  const checkIfInViewport = () => {
    const itemPos: number = itemRef.current!.getBoundingClientRect().top
    const windowHeight: number = window.innerHeight

    if (itemPos + SHOW_TRESHOLD < windowHeight) {
      toggleShowItem(true)
    } else if (showItem) {
      toggleShowItem(false)
    }
  }

  let itemClasses = [
    css.Item, 
    showItem ? css.show : null
  ].join(' ')
  
  return (
    <div className={itemClasses} ref={itemRef} >
      <p className={css.Title}><span>{props.title}</span></p>
      <div className={css.ItemContent}>
        <ItemImage gif_src={props.gif_src} 
          link={props.link} 
          githubLink={props.githubLink} />
        <ItemInfo languages={props.language}
          title={props.title}
          desc={props.description}
          desktop={props.desktop}
          mobile={props.mobile} />
      </div>
    </div>
  )
}

interface IInfo {
  languages: string[]
  title: string
  desc: string
  desktop: boolean
  mobile: boolean
}

const itemColors = [
  'royalblue', 'royalblue', 'yellow', 'gainsboro',
]

const ItemInfo: React.FunctionComponent<IInfo> = (props): JSX.Element => {
  return (
    <div className={css.InfoContainer}>
      <div className={css.MadeWith}>
        made with:
        {props.languages.map((lang: string, index: number) => (
          <p key={lang} className={css.Language} style={{color: `${itemColors[index]}`}}>
            {lang}
            {index !== props.languages.length - 1 ? <span style={{color: 'dimgray'}}> + </span> : ''}
          </p>
        ))}
      </div>
      <p className={css.Description}>
        {props.desc}
      </p>
      <div className={css.DesktopIcon}>
          <FontAwesomeIcon icon={icons.faDesktop} size="lg" />
      </div>
      <div className={css.MobileIcon}>
          <FontAwesomeIcon icon={icons.faMobile} size="lg" />
      </div>
    </div>
  )
}


interface IImage {
  gif_src: string
  link: string
  githubLink: string
}

const ItemImage: React.FunctionComponent<IImage> = (props): JSX.Element => {
  return (
    <div className={css.ImageContainer}>
      <img className={css.Image} src={props.gif_src} alt='portfolio-img'/>
      <div className={css.ImageMask}>
        <div className={css.MaskLinks}>
          <MaskLink address={props.link} text="Open" icon={"link"} />
          <MaskLink address={props.githubLink} text="Github" icon={"github"} />
        </div>
      </div>
    </div>
  )
}

interface IMaskLink {
  address: string
  text: string
  icon: string
}

const MaskLink: React.FunctionComponent<IMaskLink> = ({ address, text, icon }): JSX.Element => {
  return (
      <a href={address} className={css.MaskLink} target='_blank' rel="noopener noreferrer">
          <div className={css.MaskLinkText}>
              <span>{text}</span>
          </div>
          <div className={css.MaskLinkIcon}>
              {icon === 'github' ? 
                <FontAwesomeIcon icon={icons.faGithub} size="lg" /> 
                : <FontAwesomeIcon icon={icons.faExternalLinkSquareAlt} size="lg" />
              }
          </div>
      </a>
  )
}

export default Item