/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { LIGHT_SOLID, PRIMARY, SECONDARY } from '../utils/colors'

export interface ContainerOutsideProps {
  type?: 'button' | 'submit'
  href?: string
  variant?: 'primary' | 'secondary'
  className?: string
  disabled?: boolean
  children: ReactElement | string | null
  onClick?: (e: any) => void
}

const ContainerOutside: FC<ContainerOutsideProps> = ({
  disabled,
  type,
  href,
  onClick,
  ...props
}): ReactElement => {
  if (href === null || type === 'button' || type === 'submit') {
    return <button onClick={onClick} disabled={disabled} type={type} {...props} />
  }

  return <a href={href} {...props} />
}

ContainerOutside.defaultProps = {
  type: 'button'
}

export const Container = styled(ContainerOutside)`
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  padding: 15px 5px;
  border-radius: 8px;
  border: none;
  background: ${PRIMARY};
  color: ${LIGHT_SOLID};
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  min-height: 48px;

  &.-isFull {
    width: 100%;
  }

  &:hover {
    color: ${SECONDARY};
    background: ${LIGHT_SOLID};
    border: 2px solid ${SECONDARY};
  }

  ${props => props.variant === 'secondary' && css`
    color: ${SECONDARY};
    background: ${LIGHT_SOLID};
    border: 2px solid ${SECONDARY};

    &:hover {
      color: ${LIGHT_SOLID};
      background: ${PRIMARY};
      border: 2px solid ${SECONDARY};
    }
  `}
`
