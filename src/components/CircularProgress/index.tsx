import {
  Box,
  CircularProgress as RawCircularProgress,
  CircularProgressProps as RawCircularProgressProps,
  styled
} from '@mui/material';
import React from 'react';
export type CircularProgressProps = RawCircularProgressProps & {
  hide: Boolean
}

const WrapperBox = styled(Box)({
  display: "flex",
  alignContent: "center",
  justifyContent: "center"
})

export const CircularProgress = ({ hide = false, ...props }: CircularProgressProps) => {
  return (
    <WrapperBox sx={{ display: hide ? 'flex' : 'none' }}>
        <RawCircularProgress {...props} />
    </WrapperBox>
  )
};