import { Box, chakra, Container } from "@chakra-ui/react";
import { Pill } from "../../App";
import { AvatarButton } from "../../Buttons";

const ServerSidebar = () => {
  return (
    <chakra.nav pos="relative" w="72px" flexShrink="0" bg="tertiary" h="100vh">
      <Container p="12px 0 0" boxSizing="border-box" minH="0" flex="1 1 auto">
        <Box
          pos="relative"
          m="0 0 8px"
          display="flex"
          justifyContent="center"
          w="72px"
        >
          <Pill />
          <AvatarButton />
        </Box>
      </Container>
    </chakra.nav>
  );
};

export default ServerSidebar;
