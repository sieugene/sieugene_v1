import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { FC } from "react";

export type CustomizeOptions = typeof optionsTheme;

const optionsTheme = {
  spaces: {
    default: "10px",
    medium: "25px",
    big: "50px",
  },
  borderRadius: {
    default: "10px",
    large: "20px",
  },
  fontSize: {
    big: "40px",
    medium: "32px",
    primary: "28px",
    text: "20px",
    small: "18px",
    card: "16px",
    extaSmall: "14px",
  },
  lineHeight: {
    wide: "36px",
  },
  colors: {
    orange: "#ff890f",
    limeGreen: "#69d681",
    grayish: "#808385",
    black: "#000",
    blue: "#1976d2",
    moderateBlue: "#4f4ca0",
    white: "#ffffff",
  },
  borders: {
    grayBorder: "rgba(0, 0, 0, 0.05)",
    moderateBlue: "#4f4ca0",
  },
};

const theme = {
  ...createTheme(optionsTheme),
};

const CustomThemeProvider: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
