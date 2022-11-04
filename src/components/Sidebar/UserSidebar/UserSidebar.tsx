import { Box, chakra, Flex } from "@chakra-ui/react";

const UserSidebar = () => {
  return (
    <Flex direction="column" w="240px" bg="secondary">
      <chakra.nav display="flex" flexDir="column" flex="1">
        <Flex>Searchbar</Flex>
        <Box>Friends Sidebar Main Section</Box>
      </chakra.nav>
      <chakra.section flex="0 0 auto">UserProfile</chakra.section>
    </Flex>
  );
};

export default UserSidebar;
