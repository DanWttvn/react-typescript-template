import React, { FC } from 'react'
import { BaseProps } from '../../models'
import Styled from './styles'

export interface Props extends BaseProps {
  isFullWidth?: boolean
  direction?: 'horizontal' | 'vertical'
}

const Container: FC<Props> = ({ styles, children, isFullWidth, direction =  'horizontal', className = '', isHidden }) => {
  if (isHidden) return null

  return <Styled styles={styles} direction={direction} isFullWidth={isFullWidth} className={className}>{children}</Styled>
}

export default Container
