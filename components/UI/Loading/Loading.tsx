import * as React from 'react'
import styled from 'styled-components'

import { BarLoader } from '../Spinner/Spinner'
import { loadingDots } from '../../../keyframes/keyframes'

const Wrapper = styled.div<{ show: boolean, fullscreen?: boolean, transparent?: boolean, fadeout?: boolean, slideout?: boolean }>`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    z-index: 20;
    visibility: ${props => props.show ? 'visible' : 'visible' };
    opacity: ${props => (!props.show && !!props.fadeout) ? '0' : '1' };
    top: ${props => (!props.show && !!props.slideout) ? '-100vh' : '0' };
    width: ${props => !!props.fullscreen ? '100vw' : 'auto' };
    height: ${props => !!props.fullscreen ? '100vh' : 'auto' };
    background: ${props => !!props.transparent ? 'transparent' : 'snow' };
    transition:  visibility 0s .5s, top .5s, opacity .5s;
`

const Loader = styled.p`
    font-size: 1.2rem;
    text-transform: uppercase;
    color: gray;
    cursor: default;

    &::after {
        content: '.';
        animation: ${loadingDots} 1.5s linear infinite;
        position: absolute;
    }
`

type TLoadingProps = {
    show: boolean
    color?: string
    text?: boolean
    spinner?: boolean
    transparent?: boolean
    fadeout?: boolean
    slideout?: boolean
    fullscreen?: boolean
}

const Loading: React.FunctionComponent<TLoadingProps> = (props): JSX.Element => {
    const { text, spinner, color = 'dimgray' }: TLoadingProps = props

    return (
        <Wrapper {...props} >
            { spinner && <BarLoader color={color} /> }
            { text && 
                <Loader>
                    Loading
                </Loader>
            }
        </Wrapper>
    )
}

export default Loading