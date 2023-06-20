import React from 'react'
import { Button as BIButton } from '@mui/material'

const Button = (props:any) => {
  return (
    <BIButton {...props}>{props.children}</BIButton>
  )
}

export default Button