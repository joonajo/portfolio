import { Keyframes, keyframes } from "styled-components"

export const fadein: Keyframes = keyframes`
    from { opacity: 0 }
    to { opacity: 1 }
`

export const stretch: Keyframes = keyframes`
    0%, 40%, 100% { 
        transform: scaleY(0.4);
        -webkit-transform: scaleY(0.4);
    }  20% { 
        transform: scaleY(1.0);
        -webkit-transform: scaleY(1.0);
    }
`

export const loadingDots: Keyframes = keyframes`
    0% { content: '.' }
    33% { content: '..' }
    66% { content: '...' }
`

export const titleAnimAfter: Keyframes = keyframes`
    0% {transform: translateX(-100%)}
    10% {transform: translateX(101%)}
    100% {transform: translateX(101%)}
`

export const titleAnimBefore: Keyframes = keyframes`
    0% {transform: translateX(0)}
    10% {transform: translateX(200%)}
    100% {transform: translateX(200%)}
`

export const pulsate: Keyframes = keyframes`
    0% {
        -webkit-transform: scale(0.2);
                transform: scale(0.2);
        opacity: 0.8;
    }
    80% {
        -webkit-transform: scale(1.2);
                transform: scale(1.2);
        opacity: 0;
    }
    100% {
        -webkit-transform: scale(2.2);
                transform: scale(2.2);
        opacity: 0;
    }
`