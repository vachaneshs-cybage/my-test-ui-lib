import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  styled,
} from '@mui/material'
import moment from 'moment'
import {ReactNode, useCallback, useEffect, useState} from 'react'
import DateTimeRangeContainer from 'react-advanced-datetimerange-picker'
import './DateRangePicker.css'
import React from 'react'

interface Props {
  children?: ReactNode
  label?: String | ''
  selectedValue?:
    | any
    | {
        start: ''
        end: ''
      }
  setSelectedAttr: Function
  selectedAttr: any
}

const MUIDateTimeRangeContainer = styled(DateTimeRangeContainer)({
  '.timeContainer': {
    display: 'none',
  },
})

export const DateRangePicker = ({
  label,
  selectedValue,
  setSelectedAttr,
  selectedAttr}: Props) => {
  let now = new Date()
  let start = moment(
    new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
  )
  let end = moment(start).add(1, 'days').subtract(1, 'seconds')
  let currentQuarter = moment().quarter()
  let subYear = currentQuarter !== 1 ? 0 : 1
  let dateFormat = 'MM/DD/YYYY'
  let ranges = {
    'This Business Week': [
      moment(start).clone().startOf('week'),
      moment(start).clone().endOf('week'),
    ],
    'Last Business Week': [
      moment(start).subtract(1, 'weeks').startOf('week'),
      moment(start).subtract(1, 'weeks').endOf('week'),
    ],
    'This Month': [
      moment(start).startOf('month'),
      moment(start).endOf('month'),
    ],
    'Last Month': [
      moment(start).subtract(1, 'months').startOf('month'),
      moment(start).subtract(1, 'months').endOf('month'),
    ],
    'This Quarter': [
      moment().quarter(currentQuarter).startOf('quarter'),
      moment().quarter(currentQuarter).endOf('quarter'),
    ],
    'Last Quarter': [
      moment()
        .subtract(subYear, 'years')
        .quarter(currentQuarter !== 1 ? currentQuarter - 1 : 4)
        .startOf('quarter'),
      moment()
        .subtract(subYear, 'years')
        .quarter(currentQuarter !== 1 ? currentQuarter - 1 : 4)
        .endOf('quarter'),
    ],
    'This Year': [
      moment(start).clone().startOf('year'),
      moment(start).clone().endOf('year'),
    ],
    'Last Year': [
      moment(start).subtract(1, 'years').startOf('year'),
      moment(start).subtract(1, 'years').endOf('year'),
    ],
    'This Financial  Year': [
      moment(start).add(1, 'hours').clone().startOf('year'),
      moment(start).clone().endOf('year'),
    ],
    'Last Financial  Year': [
      moment(start).add(1, 'hours').subtract(1, 'years').startOf('year'),
      moment(start).subtract(1, 'years').endOf('year'),
    ],
  }

  const [dateObj, setDateObj] = useState({
    start: start,
    end: end,
  })

  const [value, setValue] = useState('')
  let local = {
    format: dateFormat,
    sundayFirst: false,
  }

  useEffect(() => {
    if (selectedValue && Object.values(selectedValue).length > 0) {
      setValue(
        `${moment(selectedValue.start).format(dateFormat)} - ${moment(
          selectedValue.end
        ).format(dateFormat)}`
      )
      setDateObj({
        start: moment(selectedValue.start).startOf('day'),
        end: moment(selectedValue.end),
      })
    } else {
      setValue('')
      setDateObj({
        start: moment(start).startOf('day'),
        end: moment(end),
      })
    }
  }, [dateFormat, selectedValue])

  const applyCallback = useCallback(
    (startDate: any, endDate: any) => {
      let start = startDate
      let end = endDate
      setDateObj({
        start: moment(startDate),
        end: moment(endDate),
      })
      setValue(`${start.format(dateFormat)}-${end.format(dateFormat)}`)
      setSelectedAttr({
        ...selectedAttr,
        date: {
          start: moment(start).endOf('day').toDate(),
          end: moment(end).endOf('day').toDate(),
        },
      })
    },
    [dateFormat, selectedAttr, setSelectedAttr]
  )

  return (
    dateObj.start &&
    dateObj.end && (
      <MUIDateTimeRangeContainer
        style={{
          fromDot: {display: 'none'},
          toDot: {display: 'none'},
          fromDate: {
            color: '#ffffff',
            backgroundColor: '#00749e',
            borderRadius: '25px 0px 0px 25px',
          },
          toDate: {
            color: '#ffffff',
            backgroundColor: '#00749e',
            borderRadius: '0px 25px 25px 0px',
          },
          betweenDates: {
            color: 'black',
            backgroundColor: '#e6f6ff',
          },
          hoverCell: {color: 'black'},
          customRangeButtons: {
            backgroundColor: '#FFFFFF',
            marginTop: '4px',
            marginBottom: '8px',
            marginRight: '4px',
            marginLeft: '0px',
            width: '100%',
            border: 'none',
            padding: '0px',
          },
          customRangeSelected: {
            backgroundColor: '#ebebeb',
            color: 'black',
            marginLeft: '0px',
          },
        }}
        ranges={ranges}
        start={dateObj.start}
        end={dateObj.end}
        local={local}
        applyCallback={applyCallback}
      >
        <FormControl sx={{mt: '6px', width: '100%'}} variant='standard'>
          <InputLabel>{label}</InputLabel>
          <Input
            id='datepicker'
            data-testid="daterangepicker-input"
            type='text'
            style={{marginTop: '10px', fontSize: '1rem', fontWeight: 'bold'}}
            value={value}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton>
                  <CalendarMonthIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </MUIDateTimeRangeContainer>
    )
  )
}
