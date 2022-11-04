export const ButtonStyles = {
  baseStyle: {
    fontFamily: "primary",
  },
  sizes: {},
  variants: {
    interactive: {
      bg: "transparent",
      color: "interactive.normal",
      _hover: { bgColor: "#3f434b", color: "interactive.hover" },
      _active: { bgColor: "#3f434b", color: "interactive.hover" },
      fontSize: "16px",
      lineHeight: "20px",
      mx: "8px",
      p: "2px 8px",
      borderRadius: "4px",
      fontWeight: "500",
      h: "24px",
    },
    ctaGreen: {
      color: "white",
      fontSize: "16px",
      lineHeight: "20px",
      mx: "8px",
      p: "2px 8px",
      borderRadius: "4px",
      fontWeight: "500",
      h: "24px",
      bg: "cta.green",
    },
  },
  defaultProps: {},
};
