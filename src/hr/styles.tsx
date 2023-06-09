import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { DARK_HIGH, DARK_MEDIUM } from '../utils/colors'

export interface HrOutsideProps {
    children: ReactElement | string | null
}

const HrOutside: FC<HrOutsideProps> = ({
    ...props
}): ReactElement => {
    return <div {...props} />
}

export const HrContainer = styled(HrOutside)`
    display: block;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    color: ${DARK_HIGH};
    font-weight: 500;
    font-size: 14px;
    & > span {
        position: relative;
        display: inline-block;
    }

    & > span:before,
    & > span:after {
        content: "";
        position: absolute;
        top: 50%;
        width: 100vw;
        height: 1px;
        background: ${DARK_MEDIUM};
    }

    & > span:before {
        right: 100%;
        margin-right: 15px;
    }

    & > span:after {
        left: 100%;
        margin-left: 15px;
    }
`
