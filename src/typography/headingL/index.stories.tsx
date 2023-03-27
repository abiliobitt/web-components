import { ComponentStory } from '@storybook/react'
import React from 'react'
import HeadingL from '.'
import ComponentsProvider from '../../componentsProvider'
const Story = {
  title: 'Typography/HeadingL',
  argTypes: {
    children: { control: 'text' }
  }
}

export default Story

const Template: ComponentStory<typeof HeadingL> = ({ ...rest }) => {
  return (
    <ComponentsProvider>
       <HeadingL
        {...rest}
        />
    </ComponentsProvider>
  )
}

export const HeadingLComponent = Template.bind({})
HeadingLComponent.args = {
  children: 'Heading Large'
}
