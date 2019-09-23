import React from 'react'
import MediaIcons from '../UI/Icons/MediaIcons/MediaIcons'
import { IToolbar, ToolbarContext } from '../../context/toolbarContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../../icons/icons'

const css = require('./Cover.css')

const Cover = React.memo((): JSX.Element => {
    const toolbarContext: IToolbar = React.useContext(ToolbarContext)
    const coverRef = React.useRef<HTMLDivElement>(null)
    const[height, setHeight] = React.useState<number | undefined>(undefined)

    console.log(height)

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
    
            window.scrollTo({
                top: posToScrollTo,
                left: 0,
                behavior: "smooth",
            })
        }
    }, [coverRef])

    const[arrowIn, setArrowIn] = React.useState<boolean | undefined>(undefined)

    const arrowTextClasses = [
        css.ArrowText,
        arrowIn ? css.in : arrowIn === false ? css.out : null
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
                <img src="/static/images/palm.jpg" className={css.BackgroundImage} style={{height: `${height}px`}} />
                <div className={css.BackgroundMask}></div>
            </div>
            <div className={css.MediaIcons}>
                <MediaIcons vertical />
            </div>
            <div className={css.TitleContainer}>
                <span className={css.FirstName}>Joona</span>
                <span className={css.Surname}>Joenpolvi</span>
                <span className={css.Description}>Front-End Developer</span>
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