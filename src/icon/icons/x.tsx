import React, { FC, ReactElement } from 'react'
import { SvgBox } from '../styles'

const XIcon: FC<GeneralIconProps> = (
  props
): ReactElement => {
  return (
    <SvgBox
      xmlns="http://www.w3.org/2000/svg"
      fill='none'
      className={props.classes}
      realWidth={props.width}
      realHeight={props.height}
      preserveAspectRatio="xMinYMin meet"
      width='16'
      height='16'
      viewBox={'0 0 16 16'}
    >
      <path d="M4 4L12 12" stroke={props.fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 4L4 12" stroke={props.fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </SvgBox>
  )
}

export default XIcon
