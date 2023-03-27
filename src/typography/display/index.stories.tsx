import { ComponentStory } from '@storybook/react'
import React from 'react'
import DisplayFont from '.'
import ComponentsProvider from '../../componentsProvider'
const Story = {
  title: 'Typography/DisplayFont',
  argTypes: {
    children: { control: 'text' }
  }
}

export default Story

const Template: ComponentStory<typeof DisplayFont> = ({ ...rest }) => {
  return (
    <ComponentsProvider>
       <DisplayFont
        {...rest}
        />
    </ComponentsProvider>
  )
}

export const DisplayFontComponent = Template.bind({})
DisplayFontComponent.args = {
  children: 'Display Font'
}
