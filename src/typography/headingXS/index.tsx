import styled from 'styled-components'
import { DARK_HIGH } from '../../utils/colors'
import { MD } from '../../utils/screenSizes'

const HeadingXS = styled.h5`
  font-size: 1.3rem;
  line-height: 24px;
  letter-spacing: -0.6px;
  font-weight: 700;
  font-style: normal;
  color: ${DARK_HIGH};
  @media (max-width: ${MD}) {
    font-size: 1.125rem;
    line-height: 22px;
  }
`

export default HeadingXS
