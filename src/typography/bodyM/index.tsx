import styled from 'styled-components'
import { DARK_HIGH } from '../../utils/colors'

export interface Props {
  bold: boolean
}

const BodyM = styled.h6<Props>`
  font-size: 1rem;
  line-height: 24px;
  font-weight: ${props => props.bold ? 700 : 400};
  font-style: normal;
  color: ${DARK_HIGH};
`

export default BodyM
