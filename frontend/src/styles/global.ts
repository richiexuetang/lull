import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./buttonStyles";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        lineHeight: 1,
        margin: 0,
        padding: 0,
        fontFamily: "primary",
        overflow: "hidden",
        userSelect: "none",
        bg: "transparent",
      },
      input: {},
      ul: {},
      a: {},
    },
  },
  components: { Button },
  colors: {
    primary: "#36393f",
    secondary: "#2f3136",
    tertiary: "#202225",
    cta: {
      red: "#ED4245",
      orange: "#FAA61A",
      green: "#2d7d46",
      link: "#00AFF4",
      invisible: "#747F8D",
      secondary: "#4F545C",
      streaming: "#593695",
    },
    gray: {
      100: "#D4D7DC",
      200: "#E8E4EC",
      300: "#EBEDEF",
      400: "#EBEDEF",
      500: "#F2F3F5",
      icons: "#4F5660",
      charIcons: "#B9BBBE",
      text: "#DCDDDE",
    },
    interactive: {
      normal: "#b7babd",
      hover: "hsl(210,calc(var(--saturation-factor, 1)*2.9%),86.7%)",
    },
    tooltips: "#18191C",
    userprofile: "#18191C",
    dividers: "#262729",
    sidebarProfileInfo: "#292B2F",
  },
  lineHeights: {
    md: 1.375,
  },
  fonts: {
    primary: `'Whitney', sans-serif`,
    display: `'ABC Ginto Normal', sans-serif`,
    headline: `'ABC Ginto Nord', sans-serif`,
  },
});
