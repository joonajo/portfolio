import React from 'react'
import { IPortfolioItem } from '../../interfaces/interfaces'
import { icons } from '../../icons/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ExpandedVideo from '../ExpandedVideo/ExpandedVideo'

const css = require('./Item.module.css')

const SHOW_TRESHOLD = 300 // pixels

const Item: React.FunctionComponent<IPortfolioItem> = (props): JSX.Element => {
  const[showItem, toggleShowItem] = React.useState<boolean>(false)
  const[showVideo, toggleShowVideo] = React.useState<boolean>(false)
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

  const itemClasses = [
    css.Item, 
    showItem ? css.show : null
  ].join(' ')
  
  return (
    <div className={itemClasses} ref={itemRef} >
      <p className={css.Title}><span>{props.title}</span></p>
      <div className={css.ItemContent}>
        <ItemImage video_src={props.video_src}
          gif_src={props.gif_src} 
          link={props.link} 
          githubLink={props.githubLink}
          toggle={toggleShowVideo} />
        <ItemInfo languages={props.language}
          title={props.title}
          desc={props.description}
          desktop={props.desktop}
          mobile={props.mobile}
          link={props.link}
          githubLink={props.githubLink} />
      </div>
      {showVideo && <ExpandedVideo video_src={props.video_src} close={() => toggleShowVideo(false)} />}
    </div>
  )
}

interface IItemInfo {
  languages: string[]
  title: string
  desc: string
  desktop: boolean
  mobile: boolean
  link: string
  githubLink: string
}

const ItemInfo: React.FunctionComponent<IItemInfo> = (props): JSX.Element => {
  return (
    <div className={css.InfoContainer}>
      <div className={css.MadeWith}>
        made with
        {props.languages.map((lang: string, index: number) => (
          <p key={lang} className={css.Language}>
            {lang}
            {index !== props.languages.length - 1 ? <span style={{color: 'dimgray'}}> + </span> : ''}
          </p>
        ))}
      </div>
      <p className={css.Description}>
        {props.desc}
      </p>
      <div className={css.IconsAndLinks}>
        <div className={css.ItemLinks}>
          <a className={css.ItemLinkContainer} href={props.githubLink} target="_blank" rel="noopener noreferrer">
            <p className={css.ItemLink}>Github</p>
            <div className={css.ItemLinkIcon}>
              <FontAwesomeIcon icon={icons.faGithub} />
            </div>
          </a>
          <a className={css.ItemLinkContainer} href={props.link} target="_blank" rel="noopener noreferrer">
            <p className={css.ItemLink}>Open</p>
            <div className={css.ItemLinkIcon}>
              <FontAwesomeIcon icon={icons.faExternalLinkSquareAlt} />
            </div>
          </a>
        </div>
        <HardwareIcons desktop={props.desktop} mobile={props.mobile} />
      </div>
    </div>
  )
}

interface IHardwareICons {
  desktop: boolean
  mobile: boolean
}

const HardwareIcons: React.FunctionComponent<IHardwareICons> = ({ desktop, mobile }): JSX.Element => (
  <div className={css.HardwareIcons}>
    <div className={css.HardwareIconContainer}>
      <div className={[css.HardwareIcon, css.DesktopIcon].join(' ')}>
        <FontAwesomeIcon icon={icons.faDesktop} />
      </div>
      {desktop ?
        <CheckMarkIcon /> : <TimesIcon />
      }
    </div>
    <div className={css.HardwareIconContainer}>
      <div className={[css.HardwareIcon, css.MobileIcon].join(' ')}>
        <FontAwesomeIcon icon={icons.faMobileAlt} />
      </div>
      {mobile ? 
        <CheckMarkIcon /> : <TimesIcon />
      }
    </div>
  </div>
)

const CheckMarkIcon: React.FunctionComponent = (): JSX.Element => (
  <div className={[css.HardwareIcon, css.CheckMarkIcon].join(' ')}>
    <FontAwesomeIcon icon={icons.faCheck} color="green" />
  </div>
)

const TimesIcon: React.FunctionComponent = (): JSX.Element => (
  <div className={[css.HardwareIcon, css.TimesIcon].join(' ')}>
    <FontAwesomeIcon icon={icons.faTimes} color="crimson" />
  </div>
)

interface IImage {
  video_src: string
  gif_src: string
  link: string
  githubLink: string
  toggle: (newValue: boolean) => void
}

const ItemImage: React.FunctionComponent<IImage> = (props): JSX.Element => {
  return (
    <div className={css.ImageContainer}>
      <img className={css.Image} src={props.gif_src} alt='portfolio-img'/>
      <div className={css.ImageMask}>
        <div className={css.MaskLinks}>
          {/* <MaskLink address={props.link} text="Open" icon={"link"} />
          <MaskLink address={props.githubLink} text="Github" icon={"github"} /> */}
          <ExpandVideo toggle={props.toggle}  />
        </div>
      </div>
    </div>
  )
}

interface IExpandVideo {
  toggle: (newValue: boolean) => void
}

const ExpandVideo: React.FunctionComponent<IExpandVideo> = ({ toggle }): JSX.Element => {
 
  const classes = [
    css.ExpandVideo
  ].join(' ')

  return (
    <>
      <div className={classes} onClick={() => toggle(true)}>
        <p>Expand Video</p>
        <FontAwesomeIcon icon={icons.faExpand} color='white' />
      </div>
    </>
  )
}

interface IMaskLink {
  address: string
  text: string
  icon: string
}

const MaskLink: React.FunctionComponent<IMaskLink> = ({ address, text }): JSX.Element => {
  return (
      <a href={address} className={css.MaskLink} target='_blank' rel="noopener noreferrer">
          <div className={css.MaskLinkText}>
              <span>{text}</span>
          </div>
      </a>
  )
}

export default Item