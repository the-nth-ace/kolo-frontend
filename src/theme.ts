import {
  extendTheme,
  ThemeConfig,
  theme as base,
  withDefaultVariant,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `Gilroy Bold, ${base.fonts?.heading}`,
    body: `Open Sans, ${base.fonts?.body}`,
  },
  semanticTokens: {
    colors: {
      primary: "#26273B",
      secondary: "#EA624A",
      header: "#fff",
      body: "#A2ABA3",
      dashBorder: "#3D3E62",
      dashBg: "#1B1C31",
    },
  },
});

export default theme;
