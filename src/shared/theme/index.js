import defaultStyled, {
  createGlobalStyle,
  ThemeProvider as SThemeProvider,
} from "styled-components";

const colors = {
  default: "blue",
  primary: "red",
  secondary: "yellow",
  bgDefault: "black",
  bgPrimary: "#2A2A2A",
  bgSecondary: "#3C3C3C",
};

const screens = {
  bpSmall: "576px",
  bpMedium: "768px",
  bpLarge: "992px",
  bpXlarge: "1200px",
};

export const theme = () => {
  return {
    colors,
    screens,
  };
};

export const ThemeProvider = SThemeProvider;
export const styled = defaultStyled;
export const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
  }
`;
