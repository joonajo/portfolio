import React from 'react'
import { IPortfolioItem } from '../../interfaces/interfaces'

const css = require('./Item.module.css')

const SHOW_TRESHOLD = 1100

export default function Item(props: IPortfolioItem) {
  const[showItem, toggleShowItem] = React.useState(false)
  const[showInfo, toggleShowInfo] = React.useState(false)
  const itemRef = React.useRef<HTMLDivElement>(null)
  const infoRef = React.useRef<HTMLDivElement>(null)

  // update the event listeners every time the showItem state is changed
  React.useEffect(() => {
    window.addEventListener('scroll', checkIfInViewport, true)
  
    return () => window.removeEventListener('scroll', checkIfInViewport, true)  
  }, [showItem])

  const checkIfInViewport = () => {
    const bottom = itemRef.current!.getBoundingClientRect().bottom
    if (bottom < SHOW_TRESHOLD) {
      toggleShowItem(true)
    } else {
      toggleShowItem(false)
    }
  }

  const expand = () => {
    toggleShowInfo(!showInfo)
  }

  let itemClasses = [
    css.Item, 
    showInfo ? css.open : null,
    showItem ? css.show : null
  ].join(' ')
  
  return (
    <div className={itemClasses} ref={itemRef} >
      <ItemTitle title={props.title} />
      <ItemImage gif_src={props.gif_src} 
        title={props.title} 
        link={props.link} 
        githubLink={props.githubLink} />
    </div>
  )
}

interface ITitle {
  title: string
}

function ItemTitle(props: ITitle) {
  return (
    <p className={css.Title}><span>{props.title}</span></p>
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
        <h1 className={css.MaskTitle}>{props.title}</h1>
        <div className={css.MaskLinks}>
          <MaskLink address={props.link} text="Open" icon="fas fa-external-link-square-alt" />
          <MaskLink address={props.githubLink} text="Github" icon="fab fa-github" />
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

const MaskLink = (props: IMaskLink): JSX.Element => {
  return (
      <a href={props.address} className={css.MaskLink} target='_blank' rel="noopener noreferrer">
          <div className={css.MaskLinkText}>
              <span>{props.text}</span>
          </div>
          <div className={css.MaskLinkIcon}>
              <i className={props.icon}></i>
          </div>
      </a>
  )
}