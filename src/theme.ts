import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  fonts: {
    primary: `'Inter', sans-serif`,
    secondary: `'Lora Variable', sans-serif`,
  },
  colors: {
    primary: {
      dark: "#181818",
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
