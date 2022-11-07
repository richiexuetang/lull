import { Box, Text } from "@chakra-ui/react";
import { EmptyOnlineFriendIcon } from "../../../Icons";

const EmptyOnlineFriends = () => {
  return (
    <Box pos="relative" w="100%" h="100%">
      <Box
        pos="absolute"
        display="flex"
        justifyContent="center"
        alignItems="center"
        top="0"
        left="0"
        bottom="0"
        right="0"
      >
        <Box
          display="flex"
          flex="1 1 auto"
          w="100%"
          h="100%"
          maxW="440px"
          flexDir="column"
          mx="auto"
          textAlign="center"
          justifyContent="center"
        >
          <Box
            flex="0 1 auto"
            w="421px"
            h="218px"
            backgroundSize="100% 100%"
            mb="40px"
          >
            <EmptyOnlineFriendIcon />
          </Box>
          <Box flex="0 1 auto">
            <Text color="text.muted">No one's around to play with Wumpus.</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EmptyOnlineFriends;
