import React from 'react'
import zenscroll from 'zenscroll'

import MediaIcons from '../UI/Icons/MediaIcons/MediaIcons'
import { IToolbar, ToolbarContext } from '../../context/toolbarContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../../icons/icons'

const css = require('./Cover.module.css')

const Cover = React.memo((): JSX.Element => {
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

    const mouseInRef = React.useRef<boolean>(false)
    const mouseOutRef = React.useRef<boolean>(false)
    const animInProgressRef = React.useRef<boolean>(false)

    const arrowTextClasses = [
        css.ArrowText,
    ].join(' ')

    console.log(mouseInRef.current)

    const transitionHandler = () => {
        if (mouseOutRef.current && animInProgressRef.current) {

        }
    }

    const hoverHandler = (mouseIn: boolean) => {
        if (!mouseInRef.current && mouseIn) {
            mouseInRef.current = true
            animInProgressRef.current = true
        }
        // if (arrowIn === undefined) {
        //     setArrowIn(true)
        // }
    }

    return (
        <div className={css.Main} ref={coverRef} style={{height: `${height}px`}}>
            <div className={css.BackgroundContainer}>
                {/* <img src="/images/palm.png" alt="cover-bg-palm" className={css.BackgroundImage} style={{minHeight: `${height}px`}} /> */}
                <div className={css.BackgroundMask} />
            </div>
            <div className={css.MediaIcons}>
                <MediaIcons vertical />
            </div>
            <div className={css.TitleContainer}>
                <h1 className={css.FirstName}>Joona</h1>
                <h1 className={css.Surname}>Joenpolvi</h1>
                <h3 className={css.Description}> {"<Front End Developer />"} </h3>
            </div>
            <div className={css.ArrowContainer} >
                <div className={css.ArrowIcon}
                    onClick={scrollToPortfolio}
                    onMouseOver={() => hoverHandler(true)}
                    onMouseOut={() => hoverHandler(false)}> 
                    <FontAwesomeIcon icon={icons.faChevronDown} size="lg" />
                </div>
                <p className={arrowTextClasses} onTransitionEnd={transitionHandler}>to portfolio</p>
            </div>
        </div>
    )
})

export default Cover