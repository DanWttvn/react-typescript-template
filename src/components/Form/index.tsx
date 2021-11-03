import React, { FC, cloneElement, Children, ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { BaseProps } from '../../models'
import Styled from './styles'

export interface Props extends BaseProps {
  handleSubmit: (data: any) => void
}

const Form: FC<Props> = ({ children, handleSubmit, isFullWidth, isHidden, className = '', styles }) => {
  const { register, handleSubmit: handleFormSubmit } = useForm()

  const inputs = Children.map(children, (x: ReactElement) => {
    const inputTypes = [ 'InputText' ]
    if (!inputTypes.includes((x?.type as any)?.displayName)) return x
    return cloneElement(x, { register })
  })
  
  if (isHidden) return null

  return (
    <Styled onSubmit={handleFormSubmit(handleSubmit)} isFullWidth={isFullWidth} styles={styles} className={className}>
      {inputs}
    </Styled>
  )
}

export default Form