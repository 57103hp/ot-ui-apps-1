import { SvgIcon } from "@mui/material";
import config from "../config";
import svgImg from "./eligere 2 black.svg";

const styles = {
  root: {
    height: "unset",
  },
};

function OTLogo({ props, sx = [] }) {
  const tagline = config.profile.otLogoTagline ?? "";

  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1659.66 346.78"
      // eslint-disable-next-line
      {...props}
      sx={[
        styles.root,
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <image href={svgImg} width="100%" height="100%" />
    </SvgIcon>
  );
}

export default OTLogo;
