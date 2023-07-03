import React from 'react'
import { Box as RawBox, BoxProps as RawBoxProps } from '@mui/material'

export type BoxProps = RawBoxProps

export const Box = ({ children, ...props }: BoxProps) => {
  return <RawBox {...props}>{children}</RawBox>
}