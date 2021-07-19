import styled from 'styled-components'
import { loaderDash, loaderRotation } from '../../styles/animations'
import { Props } from '.'

export default styled.svg<Props>`
  height: 24px;
  width: 24px;
  animation: ${loaderRotation} 1.4s linear infinite;

  ${({ styles }) => ({ ...styles })}
`

export const Circle = styled.circle`
  stroke: ${({ theme }) => theme.colors.primary};;
  animation: ${loaderDash} 1.4s ease-in-out infinite;
  stroke-dasharray: 80px, 200px;
  stroke-dashoffset: 0px;
  stroke-width: 1.5px;
  fill: transparent;
`
