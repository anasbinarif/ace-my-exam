"use client";

import { extendTheme } from "@mui/material";
import theme from "./theme";

const adminTheme = extendTheme(theme, {
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          border: "none !important",
          boxShadow: "0px 4px 39.5px 0px rgba(0, 0, 0, 0.10)",
          backgroundColor: "rgba(218, 150, 148, 1)",
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          position: "relative",
          color: "white",
          fontWeight: "200 !important",
          fontSize: "1.4rem !important",
          backgroundColor: "rgba(218, 150, 148, 1)",

          "&::after": {
            position: "absolute",
            content: "''",
            display: "block",
            height: "1px",
            width: "20rem",
            right: "1.5rem",
            top: "60%",
            backgroundColor: "rgba(255, 255, 255, 0.4)",
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          color: "white",
          "& *": {
            fontSize: "1.6rem !important",
            fontWeight: "700 !important",
          },
        },
      },
    },
    MuiStack: {
      styleOverrides: {
        root: {
          color: "black",
          "& *": {
            fontSize: "2rem !important",
            fontWeight: "700 !important",
          },
        },
      },
    },
  },
});

export default adminTheme;
