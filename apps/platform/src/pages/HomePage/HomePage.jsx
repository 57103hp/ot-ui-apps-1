import { Grid, Typography, Hidden, Box, useMediaQuery, IconButton } from "@mui/material";

import { makeStyles, useTheme } from "@mui/styles";
import { Helmet } from "react-helmet";

import {  Link, PrivateWrapper, NavBar, GlobalSearch } from "ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faChevronDown,
  faDownload,
  faLaptopCode,
  faQuestionCircle,
  faFileAlt,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import {
  appTitle,
  appDescription,
  appCanonicalUrl,
  externalLinks,
  mainMenuItems,
} from "../../constants";
import HomeBox from "./HomeBox";
import Splash from "./Splash";
import Version from "./Version";
import { getSuggestedSearch } from "../../utils/global";

import config from "../../config";

const useStyles = makeStyles(() => ({
  links: {
    marginTop: "12px",
  },
  api: {
    marginTop: "38px",
  },
  hpSection: {
    marginBottom: "40px",
  },
  dataPolicy: {
    padding: "10px",
    marginTop: "30px",
    border: "2px solid",
    borderColor: config.profile.primaryColor,
  },
}));

const usePanelStyles = makeStyles(theme => ({
  helpBoxes: {
    maxWidth: "120px",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      textAlign: "left",
    },
  },
}));

function HelpBoxPanel({ fai, url, label, external }) {
  const theme = useTheme();
  const xsMQ = useMediaQuery(theme.breakpoints.down("xs"));

  const classes = usePanelStyles();

  if (xsMQ) {
    // on xsmall screens
    return (
      <Link to={url} external={external}>
        <Grid container wrap="nowrap" alignItems="center" spacing={1}>
          <Grid item>
            <div className="fa-layers fa-fw fa-3x">
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={fai} transform="shrink-8" inverse />
            </div>
          </Grid>
          <Grid item>
            <Typography display="inline">{label}</Typography>
          </Grid>
        </Grid>
      </Link>
    );
  }
  return (
    <Box className={classes.helpBoxes}>
      <Link to={url} external={external}>
        <div className="fa-layers fa-fw fa-6x">
          <FontAwesomeIcon icon={faCircle} />
          <FontAwesomeIcon icon={fai} transform="shrink-8" inverse />
        </div>
        <Typography>{label}</Typography>
      </Link>
    </Box>
  );
}

function HomePage({ suggestions }) {
  const classes = useStyles();

  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <Helmet title={appTitle}>
        <meta name="description" content={appDescription} />
        <link rel="canonical" href={appCanonicalUrl} />
      </Helmet>
      <Grid container justifyContent="center" alignItems="center" className={classes.hpSection}>
        <Splash />
        <NavBar name="eligere" homepage items={mainMenuItems} placement="bottom-end" />
        <HomeBox>
          <GlobalSearch isHomePage />
          {/* Search examples */}
          <Grid className={classes.links} container justifyContent="space-around">
            <Link to={`/target/${suggestions[0].id}/associations`}>
              <Typography variant="body2">{suggestions[0].name}</Typography>
            </Link>
            <Hidden smDown>
              <Link to={`/target/${suggestions[1].id}/associations`}>
                <Typography variant="body2">{suggestions[1].name}</Typography>
              </Link>
            </Hidden>

            <Link to={`/disease/${suggestions[2].id}/associations`}>
              <Typography variant="body2">{suggestions[2].name}</Typography>
            </Link>
            <Hidden smDown>
              <Link to={`/disease/${suggestions[3].id}/associations`}>
                <Typography variant="body2">{suggestions[3].name}</Typography>
              </Link>
            </Hidden>

            <Link to={`/drug/${suggestions[4].id}`}>
              <Typography variant="body2">{suggestions[4].name}</Typography>
            </Link>
            <Hidden smDown>
              <Link to={`/drug/${suggestions[5].id}`}>
                <Typography variant="body2">{suggestions[5].name}</Typography>
              </Link>
            </Hidden>
          </Grid>
          <Version />
          <PrivateWrapper>
            <div className={classes.dataPolicy}>
              <Typography variant="body2" display="block" align="center" gutterBottom>
                The Open Targets Partner Preview Platform is provided exclusively to Open Targets
                consortium members. All data and results of queries must remain confidential and
                must not be shared publicly.
              </Typography>
              <Typography variant="body2" display="block" align="center" gutterBottom>
                <strong>
                  <Link
                    external
                    newTab
                    to="http://home.opentargets.org/partner-preview-platform-data-policy"
                  >
                    View our data policy
                  </Link>
                </strong>
              </Typography>
            </div>
          </PrivateWrapper>
        </HomeBox>

      </Grid>

    </>
  );
}

export default HomePage;
