import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { DARK_HIGH, LIGHT_SOLID } from '../utils/colors'

export interface ToasterOutsideProps {
    children: ReactElement | string | null
    variant: 'success' | 'error'
}

const ToasterOutside: FC<ToasterOutsideProps> = ({
    ...props
}): ReactElement => {
    return <div {...props} />
}

export const ToasterContainer = styled(ToasterOutside)`
    display: block;
    position: absolute;
    top: 20%;
    left: 10%;
    width: 80%;
    border: 1px solid ${props => props.variant === 'success' ? 'rgba(5, 107, 18, 0.5)' : 'rgba(145, 8, 8, 0.5)'};
    padding: 15px;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: ${props => props.variant === 'success' ? 'rgba(5, 107, 18, 0.5)' : 'rgba(145, 8, 8, 0.5)'};
    color: ${props => props.variant === 'success' ? DARK_HIGH : LIGHT_SOLID};
`
