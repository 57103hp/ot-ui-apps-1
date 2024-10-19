import React from 'react';
import { makeStyles, SvgIcon, SvgIconProps } from '@material-ui/core';
import svgImg from "./genetics black.svg"
const useStyles = makeStyles(() => ({
  root: {
    height: 'unset',
  },
}));

const OTLogo = ({ ...rest }: SvgIconProps) => {
  const classes = useStyles();
  return (
    <SvgIcon
      id="prefix__Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1668.49 346.78"
      {...rest}
      classes={classes}
    >
  <image href={svgImg} width="100%" height="100%" />
    </SvgIcon>
  );
};

export default OTLogo;