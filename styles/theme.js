// styles/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#1B1330",
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
