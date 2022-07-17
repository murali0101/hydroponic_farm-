import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    body: {
      fontFamily: "'Source Sans Pro', sans-serif",
    },
  },
};
const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};
const Button = {
  baseStyle: {
    fontWeight: "bold",
  },
  variants: {
    outline: {
      border: "2px solid",
      borderColor: "#81D742",
      color: "#81D742",
      _hover: {
        bg: "#81D742",
        color: "white",
      },
    },
    solid: {
      bg: "#81D742",
      color: "white",
      _hover: {
        bg: "#2d80d3",
        color: "white",
      },
    },
  },
  defaultProps: {
    variant: "outline",
  },
};

export const theme = extendTheme({
  styles,
  breakpoints,
  components: {
    Button,
    
  },
});
