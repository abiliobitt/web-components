import React, { FC, ReactElement } from 'react'
import { HrContainer, HrOutsideProps } from './styles'

export interface HrProps {
    children: ReactElement | string | null
}

type HrPropsAcc = HrProps & HrOutsideProps

const HR: FC<HrPropsAcc> = ({
    children,
    ...restProps
}): ReactElement => {
    return (
        <HrContainer {...restProps}>
            <span>
                {children}
            </span>
        </HrContainer>
    )
}

export default HR
