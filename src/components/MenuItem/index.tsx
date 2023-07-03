import React from 'react'
import { MenuItem as RawMenuItem, MenuItemProps as RawMenuItemProps } from '@mui/material'

export type MenuItemProps = RawMenuItemProps

export const MenuItem = ({ children, ...props }: MenuItemProps) => {
  return <RawMenuItem {...props}>{children}</RawMenuItem>
}