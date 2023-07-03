
import React from 'react';
import { ReactNode } from 'react';

export type Props = {
  div?: any,
  children?: ReactNode,
  value: Number,
  index: Number
}

export const TabPanel = ({ children, value, index, ...props }: Props) => {
  // console.log(value, index)
  return (
    <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...props}
    >
        {value === index && children}
    </div>
  );
}