import { Link as RawLink, LinkProps as RawLinkProps } from "@mui/material";
import React from "react";
export type LinkProps = RawLinkProps;

export const Link = ({ children, ...props }: LinkProps) => {
return <RawLink {...props}>{children}</RawLink>
}