import { Link as RawLink, LinkProps as RawLinkProps } from "@mui/material";
import React from "react";
export type LinkProps = RawLinkProps & {
    name?: string
};

export const Link = ({ children, ...props }: LinkProps) => {
return <RawLink {...props}>{children}</RawLink>
}