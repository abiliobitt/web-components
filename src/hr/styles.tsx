import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { GRAY_SCALE_300, GRAY_SCALE_600 } from '../utils/colors'

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
    color: ${GRAY_SCALE_600};
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
        background: ${GRAY_SCALE_300};
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
