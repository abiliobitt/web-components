import React, { FC, ReactElement } from 'react'
import { ToasterContainer, ToasterOutsideProps } from './styles'

export interface ToasterProps {
    children: ReactElement | string | null
}

type ToasterPropsAcc = ToasterProps & ToasterOutsideProps

const Toaster: FC<ToasterPropsAcc> = ({
    children,
    ...restProps
}): ReactElement => {
    return (
        <ToasterContainer {...restProps}>
          {children}
        </ToasterContainer>
    )
}

export default Toaster
