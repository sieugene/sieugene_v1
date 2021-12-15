import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { FC } from "react";

export type CustomizeOptions = typeof optionsTheme;

const optionsTheme = {
  borderRadius: {
    default: "10px",
    large: "20px",
  },
  fontSize: {
    big: "40px",
  },
  colors: {
    orange: "#ff890f",
    limeGreen: "#69d681",
    grayish: "#808385",
  },
};

const theme = {
  ...createTheme(optionsTheme),
};

const CustomThemeProvider: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
