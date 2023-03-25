import React, { FC, ReactElement } from 'react'
import { SvgBox } from '../styles'

const XCircleIcon: FC<GeneralIconProps> = (
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
      width='72'
      height='52'
      viewBox={'0 0 72 52'}
    >
      <path d="M63 0.5H9C6.61305 0.5 4.32387 1.44821 2.63604 3.13604C0.948211 4.82387 0 7.11305 0 9.5L0 42.5C0 44.8869 0.948211 47.1761 2.63604 48.864C4.32387 50.5518 6.61305 51.5 9 51.5H63C65.3869 51.5 67.6761 50.5518 69.364 48.864C71.0518 47.1761 72 44.8869 72 42.5V9.5C72 7.11305 71.0518 4.82387 69.364 3.13604C67.6761 1.44821 65.3869 0.5 63 0.5ZM9 6.5H63C63.7956 6.5 64.5587 6.81607 65.1213 7.37868C65.6839 7.94129 66 8.70435 66 9.5V12.5C66 12.8978 65.842 13.2794 65.5607 13.5607C65.2794 13.842 64.8978 14 64.5 14H7.5C7.10218 14 6.72064 13.842 6.43934 13.5607C6.15804 13.2794 6 12.8978 6 12.5V9.5C6 8.70435 6.31607 7.94129 6.87868 7.37868C7.44129 6.81607 8.20435 6.5 9 6.5V6.5ZM63 45.5H9C8.20435 45.5 7.44129 45.1839 6.87868 44.6213C6.31607 44.0587 6 43.2956 6 42.5V24.5C6 24.1022 6.15804 23.7206 6.43934 23.4393C6.72064 23.158 7.10218 23 7.5 23H64.5C64.8978 23 65.2794 23.158 65.5607 23.4393C65.842 23.7206 66 24.1022 66 24.5V42.5C66 43.2956 65.6839 44.0587 65.1213 44.6213C64.5587 45.1839 63.7956 45.5 63 45.5Z" fill={props.fill}/>
      <path d="M24 33.5H15C14.2044 33.5 13.4413 33.8161 12.8787 34.3787C12.3161 34.9413 12 35.7044 12 36.5C12 37.2956 12.3161 38.0587 12.8787 38.6213C13.4413 39.1839 14.2044 39.5 15 39.5H24C24.7956 39.5 25.5587 39.1839 26.1213 38.6213C26.6839 38.0587 27 37.2956 27 36.5C27 35.7044 26.6839 34.9413 26.1213 34.3787C25.5587 33.8161 24.7956 33.5 24 33.5V33.5Z" fill={props.fill}/>
    </SvgBox>
    )
  }

export default XCircleIcon