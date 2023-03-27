import styled from 'styled-components'
import { DARK_HIGH } from '../../utils/colors'
import { MD } from '../../utils/screenSizes'

const HeadingS = styled.h4`
  font-size: 1.5rem;
  line-height: 28px;
  letter-spacing: -0.6px;
  font-weight: 700;
  font-style: normal;
  color: ${DARK_HIGH};
  @media (max-width: ${MD}) {
    font-size: 1.25rem;
    line-height: 24px;
  }
`

export default HeadingS
