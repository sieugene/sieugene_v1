import { CustomizeOptions } from "./src/@app/index";
import { Theme as ThemeOriginal } from "@mui/material/styles/createTheme";

// Theme global declaration

declare module "@mui/material/styles" {
  interface Theme extends ThemeOriginal, CustomizeOptions {}
  interface ThemeOptions extends CustomizeOptions {}
}
declare module "@emotion/react" {
  interface Theme extends CustomizeOptions, ThemeOriginal {}
}
