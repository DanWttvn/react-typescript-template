import { keyframes } from 'styled-components'

export const loaderDash = keyframes`
  0% {
    stroke-dasharray: 1px, 250px;
    stroke-dashoffset: 0px;
  }
  50% {
    stroke-dasharray: 100px, 250px;
    stroke-dashoffset: -20px;
  }
  100% {
    stroke-dasharray: 100px, 250px;
    stroke-dashoffset: -150px;
  }
`

export const loaderRotation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`
