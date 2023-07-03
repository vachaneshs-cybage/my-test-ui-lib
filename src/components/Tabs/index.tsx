import React from 'react'
import { Tabs as RawTabs, TabsProps as RawTabsProps } from '@mui/material'

export type TabsProps = RawTabsProps

export const Tabs = ({ children, ...props }: TabsProps) => {
  return <RawTabs {...props}>{children}</RawTabs>
}