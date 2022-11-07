import { Box, chakra, Flex } from "@chakra-ui/react";
import { UserProfile } from "../..";

const UserSidebar = () => {
  return (
    <Flex direction="column" w="240px" bg="secondary">
      <chakra.nav display="flex" flexDir="column" flex="1" w="240px">
        <Flex>Searchbar</Flex>
        <Box>Friends Sidebar Main Section</Box>
      </chakra.nav>
      <UserProfile />
    </Flex>
  );
};

export default UserSidebar;
