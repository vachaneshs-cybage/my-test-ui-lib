import React from 'react'
import { Grid as RawGrid, GridProps as RawGridProps } from '@mui/material'

export type GridProps = RawGridProps

export const Grid = ({ children, ...props }: GridProps) => {
  return <RawGrid {...props}>{children}</RawGrid>
}