import styled, { css } from 'styled-components'

export const IconBox = styled.div`
    width: 50px;
    height: 50px;
`
interface SvgProps {
  realWidth: number
  realHeight: number
}
export const SvgBox = styled(styled.svg``)<SvgProps>`
  ${props => props.realWidth !== undefined && css`
    width: ${props.realWidth * 1}px;
  `}
  ${props => props.realHeight !== undefined && css`
    height: ${props.realHeight * 1}px;
  `}
`
