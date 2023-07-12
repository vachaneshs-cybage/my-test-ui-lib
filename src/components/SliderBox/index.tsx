import {
  FormControl, Slider, SliderProps as RawSliderProps, styled, Typography
} from "@mui/material";
import React, { useState } from "react";

export type SliderProps = RawSliderProps & {
  label: string,
  selectedAttr: Object,
  setSelectedAttr: Function,
  selectedValue: any
};

const UISlider = styled(Slider)({
})

export const SliderBox = ({ label = "select", selectedAttr, setSelectedAttr, id, selectedValue = [], ...props }: SliderProps) => {
  const [value] = useState(selectedValue)
  const handleChange = (event: any, newValue: number | number[]) => {
    const {
        target: { name }
    } = event
    setSelectedAttr({ ...selectedAttr, [name]: newValue });
  };

  return (
    <FormControl fullWidth>
      <Typography gutterBottom>{label}</Typography>
      <UISlider
          min={value[0]}
          max={value[1]}
          value={selectedValue}
          getAriaLabel={() => label.toString()}
          onChange={handleChange}
          valueLabelDisplay="auto"
          name={id}
          {...props}
      />
    </FormControl>
  );
};
