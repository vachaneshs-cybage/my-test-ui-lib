import CloseIcon from '@mui/icons-material/Close'
import FilterAltOutlined from '@mui/icons-material/FilterAltOutlined'
import {
  Box,
  BoxProps as RawBoxProps,
  Button,
  styled,
  Tab,
  TabProps,
  Tabs,
  TabsProps,
  Typography,
  Grid
} from '@mui/material'
import React, {ReactNode, useEffect, useState, useCallback, FormEventHandler} from 'react'
import {Link} from 'react-router-dom'

export type BoxProps = RawBoxProps & {
  filterTitle?: String
  children: ReactNode
  currentPage?: any
  role?: string
  tabsData?: any
  onSubmit?: FormEventHandler<HTMLDivElement>
  onClear?: FormEventHandler<HTMLDivElement>
}

const MUIBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 10px 0px 10px',
  // minHeight: '80px',
  position: 'relative',
  backgroundColor: '#FFFFFF',
}))

const FilterPopover = styled(Box)(() => ({
  border: '1px solid #e5e5e5',
  zIndex: 10,
  position: 'absolute',
  width: 'calc(100% - 20px)',
  padding: '10px 0px',
  margin: '0px 0px 10px 10px',
  backgroundColor: '#fff',
  borderRadius: '4px',
  boxShadow:
    '0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)',
  transform: 'none',
  transition:
    'opacity 228ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 152ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  overflow: 'visible',
  transformOrigin: '1231px 0px',
}))

const MUIFilterBoxWrapper = styled(Box)({
  height: 'auto',
  backgroundColor: '#F9F9F9',
  position: 'relative',
  marginTop: '120px',
})

const MUITabs = styled((props: TabsProps) => <Tabs {...props} />)({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  '& .Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
  '& .MuiTabs-scrollButtons.Mui-disabled': {
    opacity: 0,
  },
  '& .MuiTabs-scrollButtons': {
    width: '10px',
  },
})

const MUITab = styled((props: TabProps & {component: any; to: any}) => (
  <Tab {...props} />
))({
  backgroundColor: '#F6F6F6',
  borderColor: '#D1D6DC',
  borderWidth: '1px 1px 1px 1px',
  borderStyle: 'solid',
  width: '180px',
  '@media only screen and (max-width: 1280px)': {
    width: '140px',
  },
  height: '42px',
  textTransform: 'capitalize',
  fontSize: '0.8rem',
  color: '#000000',
  borderRadius: '4px 4px 0px 0px',
  marginRight: '15px',
  fontWeight: 'bold',
  zIndex: 3,
  '&.Mui-selected': {
    backgroundColor: '#fff',
    borderBottom: '0px',
    color: '#004A98',
    boxShadow: '0px 0px 5px #00000029',
  },
})

export const FilterBox = ({
  filterTitle = 'filters',
  children,
  currentPage = 'kpi',
  role = 'admin',
  tabsData = {},
  onClear= () => {},
  onSubmit = () => {},
  ...props
}: BoxProps) => {
  const activeTabValue = tabsData[currentPage] && tabsData[currentPage].link ? tabsData[currentPage].link : ''
  const [value, setValue] = useState<any>(activeTabValue)
  const [flag, setFlag] = useState<any>(false)

  const handleClick = () => {
    setFlag(!flag)
  }

  const handleClose = useCallback(() => {
    setFlag(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const onFormSubmit = useCallback((e:any) => {
    setFlag(false)
    onSubmit(e)
  }, [onSubmit])
  
  const onFormClear = useCallback((e:any) => {
    setFlag(false)
    onClear(e)
  }, [onClear])

  useEffect(() => {
    Object.keys(tabsData).length > 0 && Object.keys(tabsData).filter((key: any) => {
      if (key === currentPage) {
        setValue(tabsData[key].link)
        return true
      } else {
        return false
      }
    })
  }, [currentPage])

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <MUIFilterBoxWrapper id='global-filiter-wrapper'>
      <MUIBox {...props}>
        <MUITabs
          data-testid="tabs-section"
          variant='scrollable'
          scrollButtons='auto'
          allowScrollButtonsMobile
          value={value}
          onChange={handleChange}
          aria-label='routes tabs'
        >
          {Object.values(tabsData).length > 0 && Object.values(tabsData).map((item: any) => {
            return (
              item.role.includes(role) && (
                <MUITab
                  key={item.name}
                  label={item.name}
                  component={Link}
                  to={item.link}
                  value={item.link}
                  data-testid={`${item.name
                    .toLowerCase()
                    .replace(/\s/g, '-')}-tabs-link`}
                  id={`${item.name.toLowerCase().replace(/\s/g, '-')}-tabs-link`}
                />
              )
            )
          })}
        </MUITabs>

        <Box sx={{display: 'flex', cursor: 'pointer'}}>
          <Button
            sx={{
              textTransform: 'initial',
              backgroundColor: '#F9F9F9',
              borderColor: '#E2E2E2',
              mb: '10px',
              ml: '10px',
            }}
            variant='outlined'
            size='small'
            onClick={handleClick}
            data-testid="filter-button"
            startIcon={<FilterAltOutlined sx={{color: '#00749e'}} />}
          >
            <Typography
              color='#00749e'
              sx={{fontWeight: '600', textTransform: 'capitalize'}}
              variant='button'
            >
              {filterTitle}
            </Typography>
          </Button>
        </Box>
      </MUIBox>
      <FilterPopover
        data-testid="filter-form-inputs-section"
        id='filter-form-popover'
        style={{visibility: !flag ? 'hidden' : 'visible'}}
      >
        <Box
          sx={{
            position: 'relative',
            '&::before': {
              backgroundColor: 'white',
              content: '""',
              display: 'block',
              position: 'absolute',
              width: 12,
              height: 12,
              top: -15,
              boxShadow: '-2px -2px 3px 0px #0000002e',
              transform: 'rotate(45deg)',
              left: 'calc(100% - 3%)',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              position: 'absolute',
              right: 0,
              top: '-4px',
            }}
          >
            <Button
              size='small'
              sx={{p: 0, minWidth: 'auto'}}
              onClick={handleClose}
              startIcon={<CloseIcon sx={{color: '#707070'}} />}
            ></Button>
          </Box>
          <Box sx={{p: 1, flexGrow: 1}}>
            <Grid container spacing={1}>
              {children ? children : ''}
              <Grid item xs>
                <Box
                  sx={{
                    justifyContent: 'flex-end',
                    textAlign: 'end',
                    mt: 1,
                  }}
                >
                  <Button
                    component='span'
                    variant='contained'
                    onClick={onFormSubmit}
                  >
                    Apply
                  </Button>
                  <Button component='span' variant='text' onClick={onFormClear}>
                    Reset All
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </FilterPopover>
      {/* </UIPopover> */}
    </MUIFilterBoxWrapper>
  )
}
