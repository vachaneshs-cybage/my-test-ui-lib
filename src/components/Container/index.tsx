import React from 'react'
import { Container as RawContainer, ContainerProps as RawContainerProps } from '@mui/material'

export type ContainerProps = RawContainerProps

export const Container = ({ children, ...props }: ContainerProps) => {
  return <RawContainer {...props}>{children}</RawContainer>
}