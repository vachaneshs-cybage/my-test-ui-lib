import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import {
  AppBar as RawAppBar,
  AppBarProps as RawAppBarProps, Box, Button, Toolbar, Typography
} from "@mui/material";
import { styled } from '@mui/material/styles';
import React from 'react';
import { ReactNode, useState } from 'react';

export type AppBarProps = RawAppBarProps & {
  logoText?: String,
  user?: any,
  toggelSidebar?: Function,
  redirectLogin: HTMLAnchorElement | any,
  headerMenus: ReactNode | any,
  profileMenu?: ReactNode | any,
  logoImage?: any
};

const MUIAppBar = styled(RawAppBar)(() => ({
  zIndex: 1301,
}));

export const AppBar = ({ logoText, user, toggelSidebar, redirectLogin, headerMenus, profileMenu, logoImage, ...props }: AppBarProps) => {
  const [show] = useState(true)
  return (
    <MUIAppBar {...props}>
      <Toolbar
        variant="dense"
        sx={{
          backgroundColor: "#F7F7F7",
          height: "50px",
          minHeight: "50px",
          display: show ? 'flex' : 'none'
        }}>
        <Box sx={{
          display: 'flex',
          flex: 1,
          borderWidth: '0px 1px 0px 0px',
          borderColor: "#DDDDDD",
          borderStyle: 'solid',
          maxWidth: '120px'
        }}>
          {logoText && <Typography variant="h5" sx={{ color: '#222222', fontWeight: 'bold' }}>
              {logoText}
            </Typography>}
          {logoImage && <Box
            component="img"
            sx={{
              height: 23,
              width: 97,
            }}
            alt="Raintree Logo Image"
            src={logoImage}
          />}
        </Box>
        <Box sx={{ display: 'flex', flex: 1 }} mx={2}>
          <Box component="span">
            <Typography variant="body2" sx={{ color: '#9B9B9B' }}>
              Profile:
            </Typography>
          </Box>
          <Box component="span" ml={1}>
            <Typography variant="body2" sx={{ color: '#222222', fontWeight: 'bold' }}>
              {user ? user.nickname : "User Name"}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'end' }} >
          {user ?
            (
              <Button sx={{ textTransform: 'none' }} startIcon={<LogoutIcon sx={{ color: "#004A98" }} />} onClick={redirectLogin}>
                <Typography variant="body1" color="#004A98" sx={{ fontSize: "14px" }}>
                  Logout
                </Typography>
              </Button>
            ) : (
              <Button sx={{ textTransform: 'none' }} startIcon={<LoginIcon sx={{ color: "#004A98" }} />} onClick={redirectLogin}>
                <Typography variant="body1" color="#004A98" sx={{ fontSize: "14px" }}>
                  login
                </Typography>
              </Button>
            )
          }
        </Box>
      </Toolbar>
      <Toolbar variant="dense" sx={{ padding: "0px 10px !important" }}>
        {headerMenus}
      </Toolbar>
    </MUIAppBar>
  )
};
