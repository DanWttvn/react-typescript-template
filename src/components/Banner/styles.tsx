import styled from 'styled-components'
import { Props } from './'

export default styled.div<Props & { height: number }>`
  display: flex;
  flex-flow: row wrap;
  z-index: ${({ theme }) => theme.zIndex.high};
  background: ${({ theme }) => theme.colors.secondary};
  position: fixed;
  width: 100%;
  padding: 20px 30px;
  left: 0;
  bottom: ${({ isShown, height }) => !isShown ? `-${height}px` : 0};
  transition: bottom 0.5s ease;

  ${({ styles }) => ({ ...styles })};
`
