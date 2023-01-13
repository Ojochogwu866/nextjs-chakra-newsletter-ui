import { extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";

const fonts = {
  ...chakraTheme.fonts,
  body: "https://fonts.cdnfonts.com/css/work-sans?styles=18610,18612,18607,18608,18609,18611,18605,18606,18604",
  heading:
    "https://fonts.cdnfonts.com/css/work-sans?styles=18610,18612,18607,18608,18609,18611,18605,18606,18604",
};

const breakPoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "62em",
};

const overrides = {
  ...chakraTheme,
  fonts,
  breakPoints,
  fontWeights: {
    normal: 300,
    medium: 500,
    bold: 700,
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "40px",
    "6xl": "48",
    "7xl": "64px",
  },
};

const pagetheme = extendTheme(overrides);

export default pagetheme;
