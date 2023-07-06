import {
  FormControl,
  InputLabel,
  NativeSelect,
  NativeSelectProps as RawNativeSelectProps,
  styled,
} from '@mui/material'
import React from 'react'
export type NativeSelectProps = RawNativeSelectProps & {
  label: String
  options: Object[]
  selectedAttr: String
  setSelectedAttr: Function
  selectedValue: String
}

const UINativeSelect = styled(NativeSelect)({
  fontSize: '1rem',
  fontWeight: 'bold',
})

export const SelectBox = ({
  label = 'select',
  selectedAttr,
  setSelectedAttr,
  options = [],
  selectedValue,
  ...props
}: NativeSelectProps) => {
  const handleChange = (event: any) => {
    const {
      target: {value, id},
    } = event
    setSelectedAttr({...selectedAttr, [id]: value})
  }

  return (
    <FormControl
      fullWidth
      sx={{minWidth: '100%', display: 'flex', maxWidth: 0}}
    >
      <InputLabel variant='standard' htmlFor='uncontrolled-native'>
        {label}
      </InputLabel>
      <UINativeSelect onChange={handleChange} value={selectedValue} {...props}>
        {options.length > 0
          ? options.map((item: any) => <option key={item}>{item}</option>)
          : ''}
      </UINativeSelect>
    </FormControl>
  )
}
