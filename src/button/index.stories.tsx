import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ComponentsProvider } from '..'
import ButtonComponent from './'

const Story: ComponentMeta<typeof ButtonComponent> = {
  title: 'Button',
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'select' }
    },
    isFull: { control: 'boolean' },
    children: { control: 'text' },
    onClick: { action: 'clicked' }
  }
}

export default Story

const Template: ComponentStory<typeof ButtonComponent> = ({ ...rest }) => {
  return (
    <ComponentsProvider>
       <ButtonComponent {...rest} />
    </ComponentsProvider>
  )
}

export const Button = Template.bind({})

Button.args = {
  variant: 'secondary',
  children: 'Click to Submit',
  isFull: false
}
