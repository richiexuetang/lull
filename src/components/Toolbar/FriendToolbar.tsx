import { Box, Divider, Flex } from "@chakra-ui/react";
import { NewGroupDMIcon } from "../Icons";

const FriendToolbar = () => {
  return (
    <Flex flex="0 0 auto">
      <Flex>
        <Box mx="8px">
          <NewGroupDMIcon />
        </Box>
        <Divider orientation="vertical" color="#42454A" h="24px" mx="8px" />
      </Flex>
    </Flex>
  );
};

export default FriendToolbar;
