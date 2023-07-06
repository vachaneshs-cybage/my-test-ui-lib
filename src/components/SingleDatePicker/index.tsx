import React, {useEffect, useState, useRef, useCallback} from 'react'
import {Calendar} from 'react-date-range'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import './styles.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import {
  Box,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material'
import moment from 'moment'

export type DatePickerProps = {
  label?: string | ''
  selectedValue?: string | ''
  setSelectedAttr: Function
  selectedAttr: any
}

export const SingleDatePicker = ({
  label = 'Single Date',
  selectedValue,
  setSelectedAttr,
  selectedAttr}: DatePickerProps) => {
  let dateFormat = 'MM/DD/YYYY'
  let currentDate = moment(new Date())
  const [date, setDate] = useState(currentDate.toDate())
  const [dateStr, setDateStr] = useState('')
  const [open, setOpen] = useState(false)
  const refOne = useRef<any>(null)

  useEffect(() => {
    if (selectedValue) {
      setDate(moment(selectedValue).toDate())
      setDateStr(moment(selectedValue).format(dateFormat))
    } else {
      setDate(currentDate.toDate())
      setDateStr('')
    }

    document.addEventListener('keydown', hideOnEscape, true)
    document.addEventListener('click', hideOnClickOutside, true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue])

  const hideOnEscape = (e: any) => {
    if (e.key === 'Escape') {
      setOpen(false)
    }
  }
  const hideOnClickOutside = (e: any) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false)
    }
  }

  const onChange = useCallback(
    (newDate: any) => {
      let selected = moment(newDate).format(dateFormat)
      setDateStr(selected)
      setDate(newDate)

      setSelectedAttr({
        ...selectedAttr,
        singledate: moment(newDate).endOf('day').toDate(),
      })
    },
    [dateFormat, selectedAttr, setSelectedAttr]
  )

  return (
    <Box sx={{position: 'relative'}}>
      <FormControl sx={{mt: '6px', width: '100%'}} variant='standard'>
        <InputLabel>{label}</InputLabel>
        <Input
          id='datepicker'
          data-testid="single-datepicker"
          type='text'
          inputProps={{ 'data-testid': 'single-datepicker-input' }}
          style={{marginTop: '10px', fontSize: '1rem', fontWeight: 'bold'}}
          value={dateStr}
          onClick={() => setOpen(!open)}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton>
                <CalendarMonthIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Box ref={refOne} sx={{position: 'absolute'}}>
        {open && <Calendar onChange={onChange} date={date} />}
      </Box>
    </Box>
  )
}
