import styled from 'styled-components'
import { DARK_HIGH } from '../../utils/colors'
import { MD } from '../../utils/screenSizes'

const HeadingM = styled.h3`
  font-size: 2rem;
  line-height: 36px;
  letter-spacing: -0.8px;
  font-weight: 700;
  font-style: normal;
  color: ${DARK_HIGH};
  @media (max-width: ${MD}) {
    font-size: 1.5rem;
    line-height: 28xpx;
  }
`

export default HeadingM
