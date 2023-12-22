// styles/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgGradient:
          "linear(135deg,#1a1635, #182549,#1a1635, #182549,#1a1635, #182549)",
        color: "white",
        fontFamily: "Michroma, sans-serif", // Use Michroma font
      },
    },
  },
  fonts: {
    heading: "Michroma, sans-serif",
    body: "Michroma, sans-serif",
  },
});

export default theme;
