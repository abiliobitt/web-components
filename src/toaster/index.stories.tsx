import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ComponentsProvider } from '..'
import ToasterComponent from './'

const Story: ComponentMeta<typeof ToasterComponent> = {
    title: 'Toaster',
    argTypes: {
        children: { control: 'text' },
        variant: {
          options: ['success', 'error'],
          control: { type: 'select' }
        }
    }
}

export default Story
const Template: ComponentStory<typeof ToasterComponent> = ({ ...rest }) => {
    return (
        <ComponentsProvider>
            <ToasterComponent {...rest} />
        </ComponentsProvider>
    )
}

export const Toaster = Template.bind({})

Toaster.args = {
    children: 'Text'
}
