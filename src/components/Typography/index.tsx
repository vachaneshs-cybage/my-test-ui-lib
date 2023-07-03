import {
    Typography as RawTypography,
    TypographyProps as RawTypographyProps
} from "@mui/material";
import React from "react";

export type TypographyProps = RawTypographyProps;

export const Typography = ({ ...props }: TypographyProps) => {
    return <RawTypography {...props}>{props.children}</RawTypography>;
};
