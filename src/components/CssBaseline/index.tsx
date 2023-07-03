import React from 'react'
import { CssBaseline as RawCssBaseline, CssBaselineProps as RawCssBaselineProps } from '@mui/material'

export type CssBaselineProps = RawCssBaselineProps

export const CssBaseline = ({ children, ...props }: CssBaselineProps) => {
  return <RawCssBaseline {...props}>{children}</RawCssBaseline>
}