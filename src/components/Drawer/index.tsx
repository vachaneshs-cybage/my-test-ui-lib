import {
  Box,
  Drawer as RawDrawer,
  DrawerProps as RawDrawerProps,
  MenuItem,
  Toolbar,
} from '@mui/material'
import {useEffect} from 'react'
import FirstPageIcon from '@mui/icons-material/FirstPage'
import LastPageIcon from '@mui/icons-material/LastPage'
import {CSSObject, styled, Theme} from '@mui/material/styles'
import React, {useCallback} from 'react'
import {Link, useLocation} from 'react-router-dom'
import useResponsive from '../../hooks/useResponsive'
import DisplaySize from '../../hooks/DisplaySize'

const DRAWER_WIDTH = 240
const CLOSED_DRAWER_WIDTH = 55

const changeWidth = (open: any) => {
  return open ? DRAWER_WIDTH + 'px' : CLOSED_DRAWER_WIDTH + 'px'
}

const openedMixin = (theme: Theme): CSSObject => ({
  // eslint-disable-next-line no-restricted-globals
  width: changeWidth(open),
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: 'transparent',
  position: 'relative',
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(0px)`,
  position: 'relative',
  [theme.breakpoints.up('sm')]: {
    width: `calc(0px)`,
  },
})

const MUIDrawer = styled(RawDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
  width: changeWidth(open),
  minHeight: '100%',
  backgroundColor: 'transparent',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': {
      ...openedMixin(theme),
      border: 'none',
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
  '& .MuiDrawer-paper > .MuiToolbar-gutters': {
    minHeight: '0px',
  },
}))

const Menu = styled('div')(({open}: any) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  width: changeWidth(open),
}))

const MUIMenuItem = styled(MenuItem)({
  borderBottom: '1px #D1D6DC solid',
  borderRight: '1px #D1D6DC solid',
  padding: '16.5px 20px',
  '&.active-menu': {
    borderLeft: '4px #004A98 solid',
    backgroundColor: '#F6F6F6',
  },
  '&:hover': {
    backgroundColor: '#F6F6F6',
  },
  '&:hover > a': {
    color: '#000',
    fontWeight: 600,
  },
  '& > a': {
    textDecoration: 'none',
    color: '#222222',
    width: '100%',
    fontSize: '14px',
  },
  '&.active-menu > a': {
    color: '#004A98',
    fontWeight: 'bold',
  },
})

export type DrawerProps = RawDrawerProps & {
  resources: Object[]
  toggelSidebar: Function
  setshowSidebar: Function
}
export const Drawer = ({
  resources,
  toggelSidebar = () => {},
  setshowSidebar = () => {},
  ...props
}: DrawerProps) => {
  const {open} = props
  const displaySize = useResponsive()
  const {pathname} = useLocation()
  const onClick = useCallback(() => toggelSidebar(), [toggelSidebar])

  useEffect(() => {
    if (displaySize <= DisplaySize.Tablet) {
      setshowSidebar(false)
    } else {
      setshowSidebar(true)
    }
  }, [displaySize])

  return (
    <Box sx={{position: 'relative'}}>
      <MUIDrawer id='app-drawer-container' open={open} {...props}>
        <Toolbar />
        <Box sx={{overflow: 'hidden', position: 'relative'}}>
          <Menu {...{open}}>
            {resources &&
              resources.map(({name, to, page}: any, index: number) => {
                let activeClass = pathname === to ? 'active-menu' : ''
                
                return (
                  <MUIMenuItem
                    key={`${name}-${page}`}
                    sx={{borderTop: index === 0 ? '1px #D1D6DC solid' : 'none'}}
                    className={`side-menu-item ${activeClass}`}
                  >
                    <Link
                      to={to}
                      id={`${name.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s/g, '-')}-link`}
                      data-testid={`${name
                        .toLowerCase()
                        .replace(/[^a-zA-Z0-9 ]/g, "")
                        .replace(/\s/g, '-')}-link`}
                    >
                      {name}
                    </Link>
                  </MUIMenuItem>
                )
              })}
          </Menu>
        </Box>
      </MUIDrawer>

      <Box
        id='drawer-button'
        className={open ? 'drawer-open' : 'drawer-close'}
        sx={{
          backgroundColor: '#e2e2e2',
          position: 'absolute',
          right: '-18px',
          lineHeight: '0',
          padding: '0px 0px',
          borderRadius: '0px 4px 4px 0px',
          cursor: 'pointer',
          top: '45%',
        }}
        {...{onClick}}
      >
        {open ? (
          <FirstPageIcon
            sx={{color: '#004A98', width: '18px', height: '30px'}}
          />
        ) : (
          <LastPageIcon
            sx={{color: '#004A98', width: '18px', height: '30px'}}
          />
        )}
      </Box>
    </Box>
  )
}
