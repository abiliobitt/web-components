import { ComponentStory } from '@storybook/react'
import React from 'react'
import HeadingXS from '.'
import ComponentsProvider from '../../componentsProvider'
const Story = {
  title: 'Typography/HeadingXS',
  argTypes: {
    children: { control: 'text' }
  }
}

export default Story

const Template: ComponentStory<typeof HeadingXS> = ({ ...rest }) => {
  return (
    <ComponentsProvider>
       <HeadingXS
        {...rest}
        />
    </ComponentsProvider>
  )
}

export const HeadingXSComponent = Template.bind({})
HeadingXSComponent.args = {
  children: 'Heading Extra Small'
}
