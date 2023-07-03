import React from 'react'
import { TextField as RawTextField, TextFieldProps as RawTextFieldProps } from '@mui/material'

export type TextFieldProps = RawTextFieldProps

export const TextField = ({ children, ...props }: TextFieldProps) => {
  return <RawTextField {...props}>{children}</RawTextField>
}