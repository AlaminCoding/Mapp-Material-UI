import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    green: "green",
    blue: "blue",
  },
  typography: {
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontSize: "17px",
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 500,
    },
  },
});

export default theme;
