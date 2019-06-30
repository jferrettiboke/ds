/** @jsx jsx */
import { jsx, css } from "theme-ui";
import { keyframes } from "@emotion/core";

import LoadingDots from "./LoadingDots";

const sizes = {
  sm: {
    py: "3",
    px: "4",
    fontSize: "xs"
  },
  md: {
    py: "4",
    px: "8",
    fontSize: "base"
  },
  lg: {
    py: "5",
    px: "12",
    fontSize: "xl"
  }
};

const variants = {
  primary: {
    bg: "black",
    color: "white",
    "&:hover": {
      bg: "gray.800"
    }
  },
  secondary: {
    bg: "gray.300",
    color: "black",
    "&:hover": {
      bg: "gray.400"
    }
  }
};

export default function Button({
  size,
  variant,
  loading = false,
  sx,
  children,
  ...rest
}) {
  return (
    <button
      sx={{
        // Raw
        border: "none",
        cursor: "pointer",
        m: 0,
        p: 0,

        // Theme
        bg: "transparent",
        borderRadius: "default",
        fontFamily: "sans",
        letterSpacing: "2",
        lineHeight: "none",

        ...(variants[variant] || variants.secondary),
        ...(sizes[size] || sizes.md),
        ...sx
      }}
      {...rest}
    >
      {loading ? <LoadingDots /> : children}
    </button>
  );
}