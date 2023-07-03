import {
  AppBar as RawAppBar,
  AppBarProps as RawAppBarProps,
} from '@mui/material'
import { LogoText } from '../LogoText'
import React from 'react'

export type AppBarProps = RawAppBarProps

export const AppBar = ({...props}: AppBarProps) => {
  return (
    <RawAppBar {...props}>
      <LogoText
        sx={{}}
        variant="h4"
        variantMapping={{}}
      >
        App Logo
      </LogoText>
      {props.children}
    </RawAppBar>
  )
}