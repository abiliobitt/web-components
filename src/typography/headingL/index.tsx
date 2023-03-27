import styled from 'styled-components'
import { DARK_HIGH } from '../../utils/colors'
import { MD } from '../../utils/screenSizes'

const HeadingL = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 44px;
  letter-spacing: -1px;
  color: ${DARK_HIGH};
  @media (max-width: ${MD}) {
    font-size: 2rem;
    line-height: 36px;
  }
`

export default HeadingL
