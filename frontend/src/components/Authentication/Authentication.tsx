import { Box } from "@chakra-ui/react";
import { AuthPageBackground } from "../Icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Login, Register } from ".";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

const Authentication = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [pathname, setPathname] = useState(location.pathname);
  const auth = useSelector((state: RootState) => state.auth);

  if (auth.account) {
    navigate("/");
  }

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  return (
    <Box display="flex" flexDir="row" flex="1 1 auto">
      <Box pos="relative" w="100vw" minH="100vh">
        <Box w="100%" h="100%" bg="#5865f2">
          <AuthPageBackground w="100%" h="100%" />
        </Box>

        <Box
          display="flex"
          pos="absolute"
          top="0"
          left="0"
          minH="580px"
          alignItems="center"
          justifyContent="center"
          w="100%"
          h="100%"
        >
          <Box
            opacity="1"
            transform="scale(1) translateY(0px) translateZ(0px)"
            bg="tertiary"
            boxShadow="0 2px 10px 0 hsla(0,0%),0%,.2)"
            borderRadius="5px"
            boxSizing="border-box"
            color="text.muted"
            w="784px"
            p="32px"
            fontSize="18px"
          >
            {pathname === "/login" && <Login />}
            {pathname === "/register" && <Register />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Authentication;
