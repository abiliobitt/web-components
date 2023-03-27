import { ComponentStory } from '@storybook/react'
import React from 'react'
import BodyM from '.'
import ComponentsProvider from '../../componentsProvider'
const Story = {
  title: 'Typography/BodyM',
  argTypes: {
    children: { control: 'text' },
    bold: { control: 'boolean' }
  }
}

export default Story

const Template: ComponentStory<typeof BodyM> = ({ ...rest }) => {
  return (
    <ComponentsProvider>
       <BodyM
          {...rest}
        />
    </ComponentsProvider>
  )
}

export const BodyMComponent = Template.bind({})
BodyMComponent.args = {
  children: 'Body M',
  bold: false
}
