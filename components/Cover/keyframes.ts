import { keyframes } from 'styled-components';

export const deconstructed1 = keyframes`{
    0% {
      transform: translateX(0px) translate3d(0, 0, 0);
      -moz-transform: translateX(0px);
      -webkit-transform: translateX(0px);
    }
    26% {
      transform: translateX(5px) translate3d(0, 0, 0);
      -moz-transform: translateX(5px);
      -webkit-transform: translateX(5px);
    }
    83% {
      transform: translateX(-2px) translate3d(0, 0, 0);
      -moz-transform: translateX(-2px);
      -webkit-transform: translateX(-2px);
    }
    100% {
      transform: translateX(-0px) translate3d(0, 0, 0);
      -moz-transform: translateX(-0px);
      -webkit-transform: translateX(-0px);
    }
  }`;

export const deconstructed2 = keyframes`{
    0% {
      transform: translateX(0px) translate3d(0, 0, 0);
      -moz-transform: translateX(0px);
      -webkit-transform: translateX(0px);
    }
    24% {
      transform: translateX(4px) translate3d(0, 0, 0);
      -moz-transform: translateX(4px);
      -webkit-transform: translateX(4px);
    }
    82% {
      transform: translateX(-2px) translate3d(0, 0, 0);
      -moz-transform: translateX(-2px);
      -webkit-transform: translateX(-2px);
    }
    100% {
      transform: translateX(-0px) translate3d(0, 0, 0);
      -moz-transform: translateX(-0px);
      -webkit-transform: translateX(-0px);
    }
  }`;

export const deconstructed3 = keyframes`{
    0% {
      transform: translateX(0px) translate3d(0, 0, 0);
      -moz-transform: translateX(0px);
      -webkit-transform: translateX(0px);
    }
    22% {
      transform: translateX(-4px) translate3d(0, 0, 0);
      -moz-transform: translateX(-4px);
      -webkit-transform: translateX(-4px);
    }
    81% {
      transform: translateX(0px) translate3d(0, 0, 0);
      -moz-transform: translateX(0px);
      -webkit-transform: translateX(0px);
    }
    100% {
      transform: translateX(0px) translate3d(0, 0, 0);
      -moz-transform: translateX(0px);
      -webkit-transform: translateX(0px);
    }
  }`;

export const deconstructed4 = keyframes`{
    0% {
      transform: translateX(0px) translate3d(0, 0, 0);
      -moz-transform: translateX(0px);
      -webkit-transform: translateX(0px);
    }
    20% {
      transform: translateX(2px) translate3d(0, 0, 0);
      -moz-transform: translateX(2px);
      -webkit-transform: translateX(2px);
    }
    80% {
      transform: translateX(-1px) translate3d(0, 0, 0);
      -moz-transform: translateX(-1px);
      -webkit-transform: translateX(-1px);
    }
    100% {
      transform: translateX(0px) translate3d(0, 0, 0);
      -moz-transform: translateX(0px);
      -webkit-transform: translateX(0px);
    }
  }`;

export const aLtrAfter = keyframes`
  {
    0% {
      transform: translateX(-100%);
    }
    5% {
      transform: translateX(101%);
    }
    100% {
      transform: translateX(101%);
    }
  }
  `;

export const aLtrBefore = keyframes`
  {
    0% {
      transform: translateX(0);
    }
    5% {
      transform: translateX(200%);
    }
    100% {
      transform: translateX(200%);
    }
  }
  `;
