import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Rubik",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  palette: {
    primary: {
      main: "#FFFFFF",
      dark: "#d8d4d4",
      veryDark: "#b1b1b1",
    },
    secondary: {
      main: "#333333", // light gray
      dark: "#1E1E1E",
      light: "#7A7A7A",
      veryDark: "black",
    },
  },
  breakpoints: {
    values: {
      xs: 0, //phone
      sm: 480, // tablet
      md: 1055, // monitor
      lg: 1200,
      xl: 1536,
    },
  },
});

// theme.typography.h1[theme.breakpoints.up("md")] = {
//   fontSize: "56px",
//   fontWeight: 700,
// };

// theme.typography.h4[theme.breakpoints.up("md")] = {
//   fontSize: "30px",
//   fontWeight: 600,
// };

// theme.typography.body1[theme.breakpoints.up("md")] = { fontSize: "16px" };

// theme.typography.button[theme.breakpoints.up("md")] = { fontSize: "25px" };

// theme.typography.h1[theme.breakpoints.only("sm")] = {
//   fontSize: "44px",
//   fontWeight: 700,
// };

// theme.typography.h4[theme.breakpoints.only("sm")] = {
//   fontSize: "31px",
//   fontWeight: 600,
// };

// theme.typography.body1[theme.breakpoints.only("sm")] = { fontSize: "16px" };

// theme.typography.button[theme.breakpoints.only("sm")] = { fontSize: "22px" };

// theme.typography.h1[theme.breakpoints.only("xs")] = {
//   fontSize: "32px",
//   fontWeight: 700,
// };

// theme.typography.h4[theme.breakpoints.only("xs")] = {
//   fontSize: "24px",
//   fontWeight: 600,
// };

// theme.typography.body1[theme.breakpoints.only("xs")] = { fontSize: "16px" };

// theme.typography.button[theme.breakpoints.only("xs")] = { fontSize: "18px" };

export default theme;
