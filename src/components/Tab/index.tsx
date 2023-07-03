import React from 'react'
import { Tab as RawTab, TabProps as RawTabProps } from '@mui/material'

export type TabProps = RawTabProps

export const Tab = ({ children, ...props }: TabProps) => {
  return <RawTab {...props}>{children}</RawTab>
}