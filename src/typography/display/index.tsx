import styled from 'styled-components'
import { DARK_HIGH } from '../../utils/colors'
import { MD } from '../../utils/screenSizes'

const DisplayFont = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  line-height: 52px;
  letter-spacing: -1.2px;
  color: ${DARK_HIGH};
  @media (max-width: ${MD}) {
    font-size: 2.5rem;
    line-height: 44px;
  }
`

export default DisplayFont
