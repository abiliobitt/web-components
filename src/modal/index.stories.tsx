import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Modal from '.'
import { ComponentsProvider } from '..'
import useModal from './useModal'

const Story: ComponentMeta<typeof Modal> = {
  title: 'ModalTemlate',
  argTypes: {
    isShowing: { control: 'boolean' }
  }
}

export default Story

const Template: ComponentStory<typeof Modal> = ({ ...rest }) => {
  const { isShowing, toggle } = useModal()

  return (
    <ComponentsProvider>
      <>
        <Modal isShowing={isShowing} hide={() => toggle()}>
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={() => toggle()}>
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal>
        <button className="button-default" onClick={toggle}>Show Modal</button>
      </>
    </ComponentsProvider>
  )
}

export const ModalTemplate = Template.bind({})
ModalTemplate.args = {
  isShowing: false
}
