import React from 'react'
import zenscroll from 'zenscroll'

import MediaIcons from '../UI/Icons/MediaIcons/MediaIcons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../../icons/icons'

const css = require('./Cover.module.css')

type TCover = {
    load: () => void
}

const Cover: React.FunctionComponent<TCover> = React.memo(({ load }): JSX.Element => {
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

    const containerClasses = [
        css.Main,
        css.loaded
    ].join(' ')

    const arrowTextClasses = [
        css.ArrowText,
    ].join(' ')

    return (
        <div className={containerClasses} ref={coverRef} style={{height: `${height}px`}}>
            <div className={css.BackgroundContainer}>
                <img src={`/images/palm.png`} alt="cover-bg-palm" className={css.BackgroundImage} onLoad={load} />
                <div className={css.BackgroundMask} />
            </div>
            <div className={css.CoverContent}>
                <div className={css.MediaIcons}>
                    <MediaIcons vertical />
                </div>
                <div className={css.TitleContainer}>
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


export default Cover