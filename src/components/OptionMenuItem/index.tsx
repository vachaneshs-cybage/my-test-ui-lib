import {
  Box,
  MenuItem as RowMenuItem,
  MenuItemProps as RowMenuItemProps,
  styled,
} from '@mui/material'
import React from 'react'
export type MenuItemProps = RowMenuItemProps

const MUIMenuItem = styled(RowMenuItem)({
  fontSize: '14px',
  padding: '0px',
})
export const OptionMenuItem = ({...props}: MenuItemProps) => {
  return (
    <MUIMenuItem {...props}>
      <Box
        sx={{
          mx: 1,
          display: 'flex',
          width: '100%',
          borderBottom: '1px solid #D1D6DC',
        }}
      >
        {props.children}
      </Box>
    </MUIMenuItem>
  )
}
