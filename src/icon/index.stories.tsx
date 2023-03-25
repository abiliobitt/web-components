import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Icon from '.'
import { ComponentsProvider } from '..'
import { IconBox } from './styles'

const Story: ComponentMeta<typeof Icon> = {
  title: 'Icons',
  argTypes: {
    fill: { control: 'text' },
    classes: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' },
    iconName: {
      options: [
        'filledStart',
        'star',
        'x',
        'xCircle'
      ],
      control: { type: 'select' }
    }
  }
}

export default Story

const Template: ComponentStory<typeof Icon> = ({ ...rest }) => {
  return (
    <ComponentsProvider>
      <IconBox>
        <Icon {...rest} />
      </IconBox>
    </ComponentsProvider>
  )
}

export const LogoutIcon = Template.bind({})
LogoutIcon.args = {
  fill: 'magenta',
  classes: 'class',
  iconName: 'x',
  width: 100,
  height: 100
}
