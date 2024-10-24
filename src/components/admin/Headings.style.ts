"use client";

import { Box, styled, Typography } from "@mui/material";

export const AdminPageHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "49px",
  lineHeight: "53px",
  marginBottom: "1rem",
  fontFamily: "Jost, sans-serif",
  maxWidth: "600px",
  textTransform: "capitalize",
  color: "#2e2e2e",
  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  [theme.breakpoints.down(1400)]: {
    fontSize: "44px",
  },
  [theme.breakpoints.down("xl")]: {
    fontSize: "40px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
    lineHeight: "normal",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
    maxWidth: "450px",
    lineHeight: "normal",
  },
  [theme.breakpoints.down(400)]: {
    fontSize: "16px",
  },
}));

export const AdminContentHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "2rem",
  marginBottom: "1rem",
  fontFamily: "Jost, sans-serif",
  maxWidth: "600px",
  textTransform: "capitalize",
  color: "#2e2e2e",
  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  [theme.breakpoints.down(1400)]: {
    fontSize: "1.8rem",
  },
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.6rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.4rem",
    lineHeight: "normal",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.4rem",
    maxWidth: "450px",
    lineHeight: "normal",
  },
  [theme.breakpoints.down(400)]: {
    fontSize: "1.4rem",
  },
}));
