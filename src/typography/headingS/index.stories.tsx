import { ComponentStory } from '@storybook/react'
import React from 'react'
import HeadingS from '.'
import ComponentsProvider from '../../componentsProvider'
const Story = {
  title: 'Typography/HeadingS',
  argTypes: {
    children: { control: 'text' }
  }
}

export default Story

const Template: ComponentStory<typeof HeadingS> = ({ ...rest }) => {
  return (
    <ComponentsProvider>
       <HeadingS
        {...rest}
        />
    </ComponentsProvider>
  )
}

export const HeadingSComponent = Template.bind({})
HeadingSComponent.args = {
  children: 'Heading Small'
}
