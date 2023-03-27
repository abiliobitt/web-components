import { ComponentStory } from '@storybook/react'
import React from 'react'
import HeadingM from '.'
import ComponentsProvider from '../../componentsProvider'
const Story = {
  title: 'Typography/HeadingM',
  argTypes: {
    children: { control: 'text' }
  }
}

export default Story

const Template: ComponentStory<typeof HeadingM> = ({ ...rest }) => {
  return (
    <ComponentsProvider>
       <HeadingM
        {...rest}
        />
    </ComponentsProvider>
  )
}

export const HeadingMComponent = Template.bind({})
HeadingMComponent.args = {
  children: 'Heading Medium'
}
