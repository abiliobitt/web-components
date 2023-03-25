import styled, { css } from 'styled-components'

interface IconPainelProps {
  painelWidth: number
  painelHeight: number
}
export const IconPanelContainer = styled(styled.div``)<IconPainelProps>`
    background-color: #FEF3F2;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        margin: auto;
    }
    ${props => props.painelWidth !== undefined && css`
    width: ${props.painelWidth * 1}px;
    `}
    ${props => props.painelHeight !== undefined && css`
      height: ${props.painelHeight * 1}px;
    `}

`
