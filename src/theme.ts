import { extendBaseTheme } from "@chakra-ui/react";

export const customTheme = extendBaseTheme({
  fonts: {
    primary: `'Lora Variable', sans-serif`,
    secondary: `'Bebas Neue', sans-serif`,
  },
  colors: {
    primary: {
      dark: "#0B0B0B",
      light: "#F7FAFC"
    },
    secondary: {
      dark: "#035AB6",
      light: "#035AB6"
    },
    tertiary: {
      dark: "#FF8879",
      light: "#FF8879"
    }
  }
});
