import React, { FC } from 'react'
import { TextProps } from '../../models'
import Styled from './styles'

export interface Props extends TextProps {
  href: string
  target?: string
}

const Link: FC<Props> = ({ children, href, target = '_blank', weight = 'bold', color, onClick, styles, size = 'inherit', className = '', isHidden }) => {
  if (isHidden) return null

  return (
    <Styled href={href} target={target} rel="noreferrer" onClick={onClick} color={color} size={size} styles={styles} weight={weight} className={className}>
      {children}
    </Styled>
  )
}

export default Link
