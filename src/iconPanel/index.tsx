import React, { FC, ReactElement } from 'react'
import Icon from '../icon'
import { IconPanelContainer } from './styles'

export interface IconPanelProps {
    iconName: string
    fill: string
    classes: string
    width: number
    height: number
    painelWidth: number
    painelHeight: number
}

const IconPanel: FC<IconPanelProps> = (
    props
): ReactElement => {
    return (
      <IconPanelContainer
        painelWidth={props.painelWidth}
        painelHeight={props.painelHeight}
      >
        <Icon
          width={props.width}
          height={props.height}
          iconName={props.iconName}
          fill={props.fill}
          classes={props.classes}
        />
      </ IconPanelContainer>
    )
  }

export default IconPanel
