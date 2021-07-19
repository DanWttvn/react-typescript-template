import React, { FC } from 'react'
import Styled from './styles'
import { BaseProps } from '../../models'

const Skip: FC<BaseProps> = ({ isHidden }) => {
  if (isHidden) return null
  return <Styled />
}

export default Skip
