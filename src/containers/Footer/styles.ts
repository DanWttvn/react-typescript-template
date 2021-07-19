import styled from 'styled-components'
import { Props } from '.'

export default styled.footer<Partial<Props>>`
	width: 100%;
	margin-top: 50px;
	background: ${({ theme }) => theme.colors.secondary};
	padding: 50px 20px;
	display: flex;
	flex-flow: row wrap;
  
  ${({ styles }) => ({ ...styles })}
`
