import { AccountCircle } from '@mui/icons-material';
import {
  IconButton,
  Menu as RowMenu, MenuProps as RowMenuProps
} from '@mui/material';
import React from 'react';
import { useState } from 'react';

export type MenuProps = RowMenuProps

export const DropMenu = ({ ...props }: MenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        onClick={handleMenu}
        aria-haspopup="true"
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <RowMenu
        id="menu-appbar"
        anchorEl={anchorEl}
        keepMounted
        onClose={handleClose}
        {...{ ...props, ...{ open: Boolean(anchorEl) } }}
      >
        {props.children}
      </RowMenu>
    </>
  )
}