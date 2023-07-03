import {
  InputLabel as RawInputLabel,
  InputLabelProps as RawInputLabelProps,
  styled,
} from '@mui/material'
import React from 'react'

const MUIInputLabel = styled(RawInputLabel)({}) as typeof RawInputLabel
export type InputLabelProps = RawInputLabelProps

export const InputLabel = ({ children, ...props }: InputLabelProps) => {
  return <MUIInputLabel {...props}>{children}</MUIInputLabel>
}