import React from "react";
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import {
  Box,
  Checkbox,
  FormControl,
  InputAdornment,
  InputLabel,
  ListItemText,
  ListSubheader,
  Select as RowSelect,
  SelectProps as RawSelectProps,
  styled,
  TextField,
} from '@mui/material'

import {useEffect, useMemo, useState} from 'react'
import {Link} from '../Link'
import './index.css'
import {OptionMenuItem} from '../OptionMenuItem'

export type SelectProps = RawSelectProps & {
  label: String
  options: Object[]
  selectedValue: Object[]
  setSelectedAttr: Function
  selectedAttr: any
}

const UISelect = styled(RowSelect)({
  fontSize: '1rem',
  width: '100%',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  fontWeight: 'bold',
})

const UIListItemText = styled(ListItemText)({
  margin: 'auto !important',
  '> span': {
    color: '#222222 !important',
    maxWidth: '255px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
})

const containsText = (text: any, searchText: any) =>
  text.toLowerCase().indexOf(searchText.toLowerCase()) > -1

export const SearchableSelectBox = ({
  label = 'select',
  options = [],
  selectedValue = [],
  setSelectedAttr,
  selectedAttr,
  id}: SelectProps) => {
  const [searchText, setSearchText] = useState('')
  const [optionsCount, setOptionsCount] = useState<any>(0)
  const [selectedStr, setSelectedStr] = useState<any>('')
  const [multiSelectedValues, setMultiSelectedValues] = useState(selectedValue || [])
  const [open, setOpen] = useState(false)

  const displayedOptions = useMemo(() => {
    let defaultOptions = [...options]
    let currentSelected = [...selectedValue]
    if (currentSelected.length > 0 && open) {
      currentSelected.reverse().map((item: any) => {
        defaultOptions.splice(defaultOptions.indexOf(item), 1)
        defaultOptions.unshift(item)
      })
    }
    let tempOptions =
      searchText.length === 0
        ? defaultOptions.slice(0, optionsCount + 50)
        : defaultOptions
    tempOptions = selectedStr === 'All' ? defaultOptions : tempOptions
    return tempOptions.filter((option: any) => containsText(option, searchText))
  }, [options, searchText, optionsCount, open])

  useEffect(() => {
    setMultiSelectedValues(selectedValue)
  }, [selectedValue])
  
  useEffect(() => {
    setSelectedStr(
      multiSelectedValues.length === options.length ? 'All' : multiSelectedValues.join(', ')
    )
  }, [options.length, selectedAttr, multiSelectedValues])

  const handleChange = (event: any) => {
    const {
      target: {value, name},
    } = event
    const sortedOptions =
      typeof value !== 'string'
        ? value.sort(function (a: any, b: any) {
            var A = a.toUpperCase() // ignore upper and lowercase
            var B = b.toUpperCase() // ignore upper and lowercase
            if (A < B) {
              return -1 //A comes first
            }
            if (A > B) {
              return 1 // B comes first
            }
            return 0 // names must be equal
          })
        : value.split(', ')

    setSelectedAttr({...selectedAttr, [name]: sortedOptions})
    setMultiSelectedValues(sortedOptions)
  }

  const onClick = (event: any) => {
    const {
      target: {
        name,
        dataset: {flag = ''},
      },
    } = event
    setSearchText('')
    setSelectedAttr({
      ...selectedAttr,
      [name]: flag === 'all' ? options : [],
    })
    setMultiSelectedValues(flag === 'all' ? options : [])
  }

  const clearSearchText = () => {
    setSearchText('')
    setOptionsCount(0)
  }
  
  return (
    <Box>
      <FormControl
        variant='standard'
        sx={{minWidth: '100%', display: 'flex', maxWidth: 0}}
      >
        <InputLabel id='search-select-label'>{label}</InputLabel>
        <UISelect
          key={id}
          multiple
          labelId='search-select-label'
          id='search-select'
          data-testid="searchable-select-box"
          value={multiSelectedValues}
          name={id}
          label={label}
          open={open}
          onOpen={() => {
            setOpen(true)
          }}
          inputProps={{ 'data-testid': 'multiselect-input' }}
          onChange={handleChange}
          renderValue={() => selectedStr}
          onClose={() => {
            setSearchText('')
            setOpen(false)
          }}
          MenuProps={{
            style: {position: 'absolute'},
            disableScrollLock: true,
            PaperProps: {
              sx: {maxHeight: '400px'},
              onScroll: (event: any) => {
                let scrollHeightLimit =
                  event.target.childNodes[0].clientHeight - 600
                if (
                  options.length > 50 &&
                  event.target.scrollTop > scrollHeightLimit
                ) {
                  setOptionsCount(optionsCount + 50)
                }
              },
            },
          }}
        >
          <ListSubheader component='div'>
            <Box display='inline-flex' width='100%'>
              <Box width='50%' display='flex'>
                <Link
                  sx={{cursor: 'pointer'}}
                  variant='body2'
                  data-testid="select-all-option"
                  data-flag='all'
                  underline='none'
                  onClick={onClick}
                >
                  Select All
                </Link>
              </Box>
              <Box width='50%' justifyContent='end' display='flex'>
                <Link
                  sx={{cursor: 'pointer'}}
                  variant='body2'
                  underline='none'
                  data-testid="clear-all-option"
                  data-flag='clear'
                  onClick={onClick}
                >
                  Clear All
                </Link>
              </Box>
            </Box>
            <TextField
              size='small'
              // Autofocus on textfield
              autoFocus
              data-testid="search-input-option"
              placeholder='Type to search...'
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment
                    position='end'
                    onClick={clearSearchText}
                    sx={{
                      cursor: 'pointer',
                      display: searchText.length > 0 ? 'flex' : 'none',
                    }}
                  >
                    <CloseIcon />
                  </InputAdornment>
                ),
              }}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key !== 'Escape') {
                  // Prevents autoselecting item while typing (default Select behaviour)
                  e.stopPropagation()
                }
              }}
            />
          </ListSubheader>
          {displayedOptions.map((item: any, index: any) => (
            <OptionMenuItem key={`${item}_${index}`} value={item}>
              <Checkbox
                checked={multiSelectedValues.indexOf(item) > -1}
                sx={{p: '5px'}}
              />
              <UIListItemText title={item} primary={item} />
            </OptionMenuItem>
          ))}
        </UISelect>
      </FormControl>
    </Box>
  )
}