import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { ComponentsProvider } from '..'
import IconPanelComponent from './'

const Story: ComponentMeta<typeof IconPanelComponent> = {
    title: 'IconPanel',
    argTypes: {
        iconName: { control: 'text' },
        fill: { control: 'text' },
        width: { control: 'number' },
        height: { control: 'number' },
        painelWidth: { control: 'number' },
        painelHeight: { control: 'number' }
    }
}

export default Story

const Template: ComponentStory<typeof IconPanelComponent> = ({ ...rest }) => {
    return (
        <ComponentsProvider>
            <IconPanelComponent {...rest} />
        </ComponentsProvider>
    )
}

export const IconPanel = Template.bind({})

IconPanel.args = {
    iconName: 'pin',
    fill: 'red',
    classes: 'teste',
    width: 72,
    height: 72,
    painelWidth: 168,
    painelHeight: 168
}
