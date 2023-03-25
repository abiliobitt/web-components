import React from 'react'
import { LoadingContainer } from './styles'

const Loading = ({ ...restProps }): React.ReactElement => (
    <LoadingContainer {...restProps}> <div className='lds-ring'><div /><div /><div /><div /></div></LoadingContainer>
  )

export default Loading
