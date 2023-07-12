import { LinkProps as RawLinkProps, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import React from "react";

export type LinkProps = RawLinkProps & {
  link: any,
  pathname: string
};

const MUILink = styled(Link)({
  textDecoration: 'none',
  textTransform: 'capitalize',
  color: 'inherit',
  fontSize: "15px",
  fontWeight: "bold"
});

export const LinkButton = ({ link = "#", pathname, ...props }: LinkProps) => {
  let isActiveLink = Boolean(pathname.replace('/', '')) === Boolean(link.replace('/', ''))
  return (
    <Button sx={{ color: isActiveLink ? '#004A98' : '#222222', py: "18px", height: '100%', display: 'block', textTransform: 'none', borderBottom: isActiveLink ? "4px #004A98 solid" : "none", borderRadius: '0px' }}>
      <MUILink to={link} >
        {props.children}
      </MUILink>
    </Button>
  );
};

