import React, { FC, ReactElement } from 'react'
import iconsMapping from './iconMappings'

export interface BaseIconProps {
  iconName: string
  classes: string
  fill: string
  width: number
  height: number
}

const Icon: FC<BaseIconProps> = (
  props
): ReactElement => {
  return React.createElement(iconsMapping[props.iconName], { ...props })
}

export default Icon
