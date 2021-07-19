import styled from 'styled-components'
import { TextProps } from '../../models'
import { TextStyles } from '../Text/styles'

export default styled.p<TextProps>`
  ${TextStyles}
  margin-bottom: 16px;
  color: ${({ theme, color }) => !color || color === 'inherit' ? 'inherit' : theme.colors[color]};
  word-wrap: break-word;
  white-space: pre-wrap;

  ${({ isFullWidth }) => isFullWidth ? 'width: 100%;' : ''};
  ${({ styles }) => ({ ...styles })}
`
