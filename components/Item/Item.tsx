import React from 'react'
import { IPortfolioItem } from '../../interfaces/interfaces'
import { icons } from '../../icons/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const css = require('./Item.module.css')

const SHOW_TRESHOLD = 300 // pixels

const Item: React.FunctionComponent<IPortfolioItem> = (props): JSX.Element => {
  const[showItem, toggleShowItem] = React.useState(false)
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
    } else {
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
      <ItemImage gif_src={props.gif_src} 
        title={props.title} 
        link={props.link} 
        githubLink={props.githubLink} />
    </div>
  )
}

interface IImage {
  gif_src: string
  title: string
  link: string
  githubLink: string
}

function ItemImage(props: IImage) {
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
                <FontAwesomeIcon icon={icons.faGithub} /> 
                : <FontAwesomeIcon icon={icons.faExternalLinkSquareAlt} />
              }
          </div>
      </a>
  )
}

export default Item