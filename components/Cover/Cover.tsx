import React from 'react'
import zenscroll from 'zenscroll'

import MediaIcons from '../UI/Icons/MediaIcons/MediaIcons'
import { IToolbar, ToolbarContext } from '../../context/toolbarContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../../icons/icons'

const css = require('./Cover.css')

const Cover = React.memo((): JSX.Element => {
    const toolbarContext: IToolbar = React.useContext(ToolbarContext)
    const coverRef = React.useRef<HTMLDivElement>(null)
    const[height, setHeight] = React.useState<number | undefined>(undefined)
    
    React.useEffect(() => {
        setHeight(window.innerHeight)

        window.addEventListener('scroll', scrollHandler, true)

        return () => window.removeEventListener('scroll', scrollHandler, true)
    }, [])

    const scrollHandler = () => {

    }

    const scrollToPortfolio = React.useCallback(() => {
        if (coverRef && coverRef.current) {
            const posToScrollTo: number = coverRef.current.clientHeight
    
            zenscroll.toY(posToScrollTo)
        }
    }, [coverRef])

    const[arrowIn, setArrowIn] = React.useState<boolean | undefined>(undefined)

    const arrowTextClasses = [
        css.ArrowText,
        arrowIn ? css.in : arrowIn === false && css.out
    ].join(' ')

    const transitionHandler = () => {
        if (arrowIn === false) {
            setArrowIn(undefined)
        }
    }

    const hoverHandler = () => {
        setArrowIn(true)
        // if (arrowIn === undefined) {
        //     setArrowIn(true)
        // }
    }

    const mouseOutHandler = () => {
        setArrowIn(false)
        // if (arrowIn) {
        //     setArrowIn(false)
        // }
    }

    return (
        <div className={css.Main} ref={coverRef} style={{height: `${height}px`}}>
            <div className={css.BackgroundContainer}>
                <img src="/images/palm5k.png" alt="cover-bg-palm" className={css.BackgroundImage} style={{minHeight: `${height}px`}} />
                <div className={css.BackgroundMask}></div>
            </div>
            <div className={css.MediaIcons}>
                <MediaIcons vertical />
            </div>
            <div className={css.TitleContainer}>
                <h1 className={css.FirstName}>Joona</h1>
                <h1 className={css.Surname}>Joenpolvi</h1>
                <h3 className={css.Description}>Front-End Developer</h3>
            </div>
            <div className={css.ArrowContainer} >
                <div className={css.ArrowIcon}
                    onClick={scrollToPortfolio}
                    onMouseOver={hoverHandler}
                    onMouseOut={mouseOutHandler}> 
                    <FontAwesomeIcon icon={icons.faChevronDown} size="lg" />
                </div>
                <p className={arrowTextClasses} onTransitionEnd={transitionHandler}>to portfolio</p>
            </div>
        </div>
    )
})

export default Cover