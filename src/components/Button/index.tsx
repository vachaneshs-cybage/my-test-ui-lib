import React from 'react'
import { Button as RawButton, ButtonProps as RawButtonProps } from '@mui/material'

export type ButtonProps = RawButtonProps & {
  label?: string
}

export const Button = ({ label = '', ...props }: ButtonProps) => {
  return <RawButton {...props}>{label}</RawButton>
}