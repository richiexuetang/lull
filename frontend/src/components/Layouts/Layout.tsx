import { ChakraProvider } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Fonts, theme } from "../../styles";

const Layout = () => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Outlet />
    </ChakraProvider>
  );
};

export default Layout;
