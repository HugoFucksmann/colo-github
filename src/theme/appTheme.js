import { createTheme } from "@mui/material/styles";
import museoSansRounded900 from "../fonts/MuseoSansRounded-900.otf";
import museoSansRounded300 from "../fonts/MuseoSansRounded-300.otf";
import museoSlab500i from "../fonts/Museo_Slab_500italic.otf";

//*-------- FONTS -------------------

const museoSlab = {
  "@font-face": {
    fontFamily: "museoSlab",
    src: `url(${museoSlab500i}) format('woff')`,
  },
};

const museoRoundedBold900 = {
  "@font-face": {
    fontFamily: "museoSansRoundedBold",
    src: `url(${museoSansRounded900}) format('woff')`,
  },
};

const museoRoundedBold300 = {
  "@font-face": {
    fontFamily: "museoSansRounded300",
    src: `url(${museoSansRounded300}) format('woff')`,
  },
};
//*-------------------------------------------

const appTheme = createTheme({
  typography: {
    fontFamily: ["museoSlab", "museoSansRoundedBold"].join(),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: [museoSlab, museoRoundedBold900, museoRoundedBold300],
    },
  },
  palette: {
    primary: {
      main: "rgb(36, 76, 131)",
      second: "rgb(110, 196, 176)",
      soft: "rgb(95, 111, 129)",
      dark: "rgb(33, 33, 33)",
      light: "rgb(235, 235, 235)",
    },
    secondary: {
      main: "#000",
      gradiantOne: "linear-gradient(to right bottom, #0100ec, #fb8364)",
      gradiantTwo: "linear-gradient(to right bottom, #00ffed, #9d00c6)",
      gradiantThree: "linear-gradient(to right bottom, #f237ef, #fc5252)",
      gradiantFour: "linear-gradient(to right bottom, #1eadf0, #0afb60)",
      mainTr: "rgb(36, 76, 131,.7)",
      secondTr: "rgb(110, 196, 176,.7)",
      softTr: "rgb(95, 111, 129,.7)",
      darkTr: "rgb(33, 33, 33,.7)",
      lightTr: "rgb(235, 235, 235,.7)",
    },
  },
});

//*-------- typography-------------------

appTheme.typography.h1 = {
  fontSize: "2.8rem",
  fontFamily: "museoSansRoundedBold",
  color: appTheme.palette.primary.main,
};

appTheme.typography.h2 = {
  fontSize: "2rem",
  fontFamily: "museoSansRoundedBold",
  color: "#5f6f81",
};
appTheme.typography.h3 = {
  fontSize: "1.6em",
  fontFamily: "museoSlab",
  color: appTheme.palette.primary.soft,
};
appTheme.typography.h4 = {
  fontSize: "1.4em",
  fontFamily: "museoSlab",
  color: appTheme.palette.primary.soft,
};
appTheme.typography.h5 = {
  fontSize: "1em",
  fontFamily: "museoSlab",
  color: appTheme.palette.primary.soft,
};
appTheme.typography.h6 = {
  fontSize: "0.8em",
  fontFamily: "museoSlab",
  color: "#5f6f81",
};
//*-------------------------------------------

export default appTheme;
