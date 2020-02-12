import React from 'react'
import zenscroll from 'zenscroll'

import MediaIcons from '../UI/Icons/MediaIcons/MediaIcons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../../icons/icons'

const css = require('./Cover.module.css')

type TCover = {
    show: boolean
    load: () => void
}

const Cover: React.FunctionComponent<TCover> = React.memo(({ show, load }): JSX.Element => {
    const coverRef = React.useRef<HTMLDivElement>(null)
    const [height, setHeight] = React.useState<number | undefined>(undefined)

    React.useEffect(() => {
        setHeight(window.innerHeight)
    }, [])

    const scrollToPortfolio = React.useCallback(() => {
        if (coverRef && coverRef.current) {
            const posToScrollTo: number = coverRef.current.clientHeight
    
            zenscroll.toY(posToScrollTo)
        }
    }, [coverRef])

    const descStyles = [
        css.Description,
        show && css.loaded
    ].join(' ')

    const animTextStyles = [
        css.AnimText,
        show && css.loaded
    ].join(' ')

    return (
        <div className={css.Main} ref={coverRef} style={{height: `${height}px`}}>
            <div className={css.BackgroundContainer}>
                <img src={`/images/palm.png`} alt="cover-bg-palm" className={css.BackgroundImage} onLoad={load} />
                <div className={css.BackgroundMask} />
            </div>
            <div className={css.CoverContent}>
                <div className={css.MediaIcons}>
                    <MediaIcons vertical />
                </div>
                <div className={css.TitleContainer}>
                    <div className={[animTextStyles, css.First].join(' ')}>
                        <AnimatedText text='Joona' show={show} />
                    </div>
                    <div className={[animTextStyles, css.Second].join(' ')}>
                        <AnimatedText text='Joenpolvi' show={show} delay={.5} />
                    </div>
                    <h3 className={descStyles}> <span>{"<Front End Developer />"}</span> </h3>
                </div>
                <div className={css.ArrowContainer} >
                    <div className={css.ArrowIcon}
                        onClick={scrollToPortfolio}> 
                        <FontAwesomeIcon icon={icons.faChevronDown} size="lg" />
                    </div>
                    <p className={css.ArrowText}>to portfolio</p>
                </div>
            </div>
        </div>
    )
})

interface IAnimatedText {
    text: string
    show?: boolean
    delay?: number
}

const AnimatedText: React.FunctionComponent<IAnimatedText> = ({ text, show, delay }): JSX.Element => {
    const containerStyles = [
        css.AnimatedText,
    ].join(' ')

    const trueDelay: number = delay ? delay : 0
   
    return (
        <div className={containerStyles} style={{transitionDelay: `${(trueDelay / 2) + .3}s`}}>
            {text}
            <span style={{animationDelay: `${trueDelay}s`}}>{text}</span>
            <span style={{animationDelay: `${trueDelay}s`}}>{text}</span>
            <span style={{animationDelay: `${trueDelay}s`}}>{text}</span>
            <span style={{animationDelay: `${trueDelay}s`}}>{text}</span>
        </div>
    )
}


export default Cover