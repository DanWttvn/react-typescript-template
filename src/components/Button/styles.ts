import styled from 'styled-components'
import { Props } from '.'

const Button = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  padding: 10px 15px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'auto')};
`

export const ButtonA = styled(Button)`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme, isLoading }) => isLoading ? 'transparent' : theme.colors.primary};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }

  ${({ styles }) => ({ ...styles })}
`

export const ButtonB = styled(Button)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme, isLoading }) => isLoading ? 'transparent' : theme.colors.secondary};

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }

  ${({ styles }) => ({ ...styles })}
`
