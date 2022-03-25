import { createTheme, responsiveFontSizes } from "@mui/material/styles";

/* Other colours in palette:
"rgb(246, 109, 55)"
"rgb(136, 230, 251)"
"rgb(234, 246, 255)"
*/

let theme = createTheme({
  palette: {
    text: {
      primary: "rgb(3, 12, 28)",
      secondary: "rgb(0, 138, 184)",
    },
    primary: {
      main: "rgb(0, 138, 184)",
    },
    secondary: {
      main: "rgb(0, 138, 184)",
    },
    info: {
      main: "rgb(3, 12, 28)",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default theme = responsiveFontSizes(theme);

