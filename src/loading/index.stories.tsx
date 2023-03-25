import { ComponentStory } from '@storybook/react'
import React from 'react'
import Loading from '.'
import { ComponentsProvider } from '..'
const Story = {
  title: 'Loading'

}

export default Story

const Template: ComponentStory<typeof Loading> = ({ ...rest }) => {
  return (
    <ComponentsProvider>
       <Loading
        {...rest}
        />
    </ComponentsProvider>
  )
}

export const LoadingComponent = Template.bind({})
LoadingComponent.args = {}
