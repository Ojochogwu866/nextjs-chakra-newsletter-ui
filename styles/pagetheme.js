import { extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
const fonts = {
  ...chakraTheme.fonts,
  body: `Inter,-apple-system,BlindMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji`,
  heading: `Inter,-apple-system,BlindMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji`,
};

const breakPoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "62em",
};
const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode()(props),
    },
  }),
};

const overrides = {
  ...chakraTheme,
  fonts,
  styles,
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
    "6xl": "48px",
    "7xl": "64px",
  },
};

const pagetheme = extendTheme(overrides);

export default pagetheme;
