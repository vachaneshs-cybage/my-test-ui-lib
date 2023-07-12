import {
  FormControl,
  InputLabel,
  Select as RowSelect,
  SelectProps as RawSelectProps,
  styled,
} from '@mui/material'
import {useNavigate} from 'react-router-dom'

import {useState} from 'react'
import {OptionMenuItem} from '../OptionMenuItem'
import React from 'react'

export type SelectProps = RawSelectProps & {
  label?: string
  options: any
  onSelectChnage?: any
  currentPage?: any
}

const UISelect = styled(RowSelect)({
  fontSize: '1rem',
  color: '#1a81a7',
  backgroundColor: '#efeeee',
  fontWeight: 'bold',
  '& .MuiSvgIcon-root': {
    color: '#1a81a7',
  },
})

export const Select = ({
  label = '',
  options = {},
  onSelectChnage = () => {},
  currentPage = '',
  ...props
}: SelectProps) => {
  let navigate = useNavigate()
  const [selectedPage, setSelectedPage] = useState('rcm/summary')
  const handleChange = (event: any) => {
    const {value} = event.target
    setSelectedPage(value)
    navigate(value)
  }

  return (
    <FormControl
      fullWidth
      sx={{minWidth: '100%', display: 'flex', maxWidth: 0}}
    >
      {label && (
        <InputLabel variant='standard' htmlFor='uncontrolled-native'>
          {label}
        </InputLabel>
      )}
      <UISelect onChange={handleChange} value={selectedPage} {...props}>
        {Object.keys(options).length > 0
          ? Object.keys(options).map((key: any) => (
              <OptionMenuItem key={key} value={key}>
                {options[key]}
              </OptionMenuItem>
            ))
          : ''}
      </UISelect>
    </FormControl>
  )
}
