import React, { FC } from 'react'
import { BaseProps } from '../../models'
import Styled, { Cross } from './styles'

export interface Props extends BaseProps {
  onClose?: () => void
}

const Modal: FC<Props> = ({ children, styles, onClose, isHidden, className = '' }) => {
  if (isHidden) return null

  return (
    <Styled styles={styles} className={className}>
      <Cross onClick={onClose}/>
      {children}
    </Styled>
  )
}

export default Modal
