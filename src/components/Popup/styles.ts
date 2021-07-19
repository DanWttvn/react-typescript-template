import styled from 'styled-components'
import { Cross as CrossRoot } from 'styled-icons/entypo'
import { BaseProps } from '../../models'

export default styled.div<BaseProps>`
	z-index: ${({ theme }) => theme.zIndex.high};
	position: fixed;
	width: 60%;
	max-width: 600px;
	padding: 20px 30px;
	background: ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.colors.primary};
	border-radius: 5px;
	bottom: 30px;
	right: 30px; 
	box-shadow: ${({ theme }) => theme.colors.elevation3};

  ${({ styles }) => ({ ...styles })}
`

export const Cross = styled(CrossRoot)`
  position: absolute;
  top: 17px;
  right: 20px;
	color: ${({ theme }) => theme.colors.primary};
  width: 25px;
  cursor: pointer;
`
