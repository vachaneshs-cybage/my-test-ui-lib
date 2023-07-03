import React from 'react'
import { Alert as RowAlert, AlertProps as RowAlertProps } from '@mui/material'

export type AlertProps = RowAlertProps

export const Alert = ({ children, ...props }: AlertProps) => {
  return <RowAlert {...props}>{children}</RowAlert>
}