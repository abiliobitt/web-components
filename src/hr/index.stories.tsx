import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ComponentsProvider } from '..'
import HRComponent from './'

const Story: ComponentMeta<typeof HRComponent> = {
    title: 'HR',
    argTypes: {
        children: { control: 'text' }
    }
}

export default Story
const Template: ComponentStory<typeof HRComponent> = ({ ...rest }) => {
    return (
        <ComponentsProvider>
            <HRComponent {...rest} />
        </ComponentsProvider>
    )
}

export const HR = Template.bind({})

HR.args = {
    children: 'Text'
}
