import React, { FC, ReactElement, useState } from 'react'
import { COLORS } from '..'
import Icon from '../icon'
import { IconBox, ToasterContainer, ToasterOutsideProps } from './styles'

export interface ToasterProps {
  children: ReactElement | string | null
}

type ToasterPropsAcc = ToasterProps & ToasterOutsideProps

const Toaster: FC<ToasterPropsAcc> = ({
  children,
  ...restProps
}): ReactElement => {
  const [isOpen, SetIsOpen] = useState(true)
  return (<>
    {
      isOpen && <ToasterContainer {...restProps}>
        <>
          {children}
          <IconBox onClick={() => SetIsOpen(false)}>
            <Icon
              iconName='x'
              classes=''
              height={15}
              width={15}
              fill={COLORS.DARK_HIGH}
            />
          </IconBox>
        </>
      </ToasterContainer>
    }
  </>)
}

export default Toaster
