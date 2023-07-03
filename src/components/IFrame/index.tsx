import {
    Box as RawBox,
    CardMedia,
    CardMediaProps as RawCardMediaProps
} from "@mui/material";
import { styled } from '@mui/material/styles';
import React from "react";

const MUICardMedia = styled(CardMedia)({
  height: '100%',
  width: '100%',
  minHeight: '500px',
}) as typeof CardMedia;

export type CardMediaProps = RawCardMediaProps

export const IFrame = ({ src = '', title = '', ...props }: CardMediaProps) => {
  return (
    <RawBox>
      <MUICardMedia component='iframe' title={title} src={src} {...{ props }}>{props.children}</MUICardMedia>
    </RawBox>
  );
};