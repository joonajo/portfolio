import React from 'react'
import zenscroll from 'zenscroll'

import MediaIcons from '../UI/Icons/MediaIcons/MediaIcons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../../icons/icons'
import { CubeSpinner } from '../UI/Spinner/Spinner'

const css = require('./Cover.module.css')

const Cover = React.memo((): JSX.Element => {
    const coverRef = React.useRef<HTMLDivElement>(null)
    const [height, setHeight] = React.useState<number | undefined>(undefined)
    const [bgLoaded, setBgLoaded] = React.useState<boolean>(false)

    React.useEffect(() => {
        setHeight(window.innerHeight)

        // check if bg image is already cached
        // if yes, set as loaded
        const image = new Image()
        image.src = '/images/palm.png'
        if (image.complete) setBgLoaded(true)
    }, [])

    const scrollToPortfolio = React.useCallback(() => {
        if (coverRef && coverRef.current) {
            const posToScrollTo: number = coverRef.current.clientHeight
    
            zenscroll.toY(posToScrollTo)
        }
    }, [coverRef])

    const containerClasses = [
        css.Main,
        bgLoaded && css.loaded
    ].join(' ')

    const arrowTextClasses = [
        css.ArrowText,
    ].join(' ')

    const imageLoadHandler = () => {
        if (!bgLoaded) setBgLoaded(true)
    }

    return (
        <div className={containerClasses} ref={coverRef} style={{height: `${height}px`}}>
            { !bgLoaded ? <Loading /> : null }
            <div className={css.BackgroundContainer}>
                <img src={`/images/palm.png`} alt="cover-bg-palm" className={css.BackgroundImage} onLoad={imageLoadHandler} onError={imageLoadHandler} />
                <div className={css.BackgroundMask} />
            </div>
            <div className={css.MediaIcons}>
                <MediaIcons vertical />
            </div>
            <div className={css.TitleContainer}>
                {/* <h1 className={css.FirstName}>Joona</h1>
                <h1 className={css.Surname}>Joenpolvi</h1> */}
                <AnimatedText text='Joona' />
                <AnimatedText text='Joenpolvi' delay={.5} />
                <h3 className={css.Description}> <span>{"<Front End Developer />"}</span> </h3>
            </div>
            <div className={css.ArrowContainer} >
                <div className={css.ArrowIcon}
                    onClick={scrollToPortfolio}> 
                    <FontAwesomeIcon icon={icons.faChevronDown} size="lg" />
                </div>
                <p className={arrowTextClasses}>to portfolio</p>
            </div>
        </div>
    )
})

interface IAnimatedText {
    text: string
    delay?: number
}

const AnimatedText: React.FunctionComponent<IAnimatedText> = ({ text, delay }): JSX.Element => {
    return (
        <div className={css.AnimatedText}>
            {text}
            <span style={{animationDelay: `${delay}s`}}>{text}</span>
            <span style={{animationDelay: `${delay}s`}}>{text}</span>
            <span style={{animationDelay: `${delay}s`}}>{text}</span>
            <span style={{animationDelay: `${delay}s`}}>{text}</span>
        </div>
    )
}

const Loading: React.FunctionComponent = (): JSX.Element => {
    return (
        <div className={css.Loading}>
            <CubeSpinner />
        </div>
    )
}

export default Cover