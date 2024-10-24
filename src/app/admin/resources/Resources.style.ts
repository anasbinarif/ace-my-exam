"use client";

import styled from "@emotion/styled";
import Link from "next/link";

export const AddResourceButton = styled(Link)({
  position: "absolute",
  top: "1.5rem",
  right: "1.5rem",
  backgroundColor: "white",
  borderRadius: "1rem",
  boxShadow: "0px 4px 39.5px 0px rgba(0, 0, 0, 0.10)",
  color: "accent.main",
});
