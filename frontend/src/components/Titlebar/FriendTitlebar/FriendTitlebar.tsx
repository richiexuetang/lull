import { Box, Button, Divider, Heading } from "@chakra-ui/react";
import { FriendIcon } from "../../Icons";

const FriendTitlebar = () => {
  return (
    <Box
      pos="relative"
      flex="1 1 auto"
      display="flex"
      alignItems="center"
      minW="0"
    >
      <Box
        data-component="iconWrapper"
        pos="relative"
        h="24px"
        w="auto"
        flex="0 0 auto"
        m="12px 8px"
      >
        <FriendIcon />
      </Box>
      <Box m="0 8px 0 0" flex="0 0 auto">
        <Heading
          color="white"
          fontSize="17px"
          fontWeight="500"
          fontFamily="display"
        >
          Friends
        </Heading>
      </Box>
      <Divider orientation="vertical" color="#42454A" h="24px" mx="8px" />
      <Box display="flex" flexDir="row">
        <Button variant="interactive">Online</Button>
        <Button variant="interactive">All</Button>
        <Button variant="interactive">Pending</Button>
        <Button variant="interactive">Suggestions</Button>
        <Button variant="interactive">Blocked</Button>
        <Button variant="ctaGreen">Add Friend</Button>
      </Box>
    </Box>
  );
};

export default FriendTitlebar;
