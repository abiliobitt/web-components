import { ComponentStory } from '@storybook/react'
import React from 'react'
import SubHeading from '.'
import ComponentsProvider from '../../componentsProvider'
const Story = {
  title: 'Typography/SubHeading',
  argTypes: {
    children: { control: 'text' }
  }
}

export default Story

const Template: ComponentStory<typeof SubHeading> = ({ ...rest }) => {
  return (
    <ComponentsProvider>
       <SubHeading
        {...rest}
        />
    </ComponentsProvider>
  )
}

export const SubHeadingComponent = Template.bind({})
SubHeadingComponent.args = {
  children: 'Sub Heading'
}
