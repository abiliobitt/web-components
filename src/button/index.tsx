import React, { FC, ReactElement } from 'react'
import { Container, ContainerOutsideProps } from './styles'

export interface ButtonProps {
  children: ReactElement | string | null
  variant?: 'primary' | 'secondary'
  block?: boolean
  isFull?: boolean
  onClick?: (e: any) => void
}

type ButtonPropsAcc = ButtonProps & ContainerOutsideProps

const Button: FC<ButtonPropsAcc> = ({
  onClick,
  children,
  variant,
  isFull,
  ...restProps
}): ReactElement => {
  return (
    <Container
      className={`button ${isFull === true ? '-isFull' : ''}`}
      onClick={onClick}
      variant={variant}
      {...restProps}
    >
      {children}
    </Container>
  )
}

Button.defaultProps = {
  variant: 'primary'
}

export default Button
