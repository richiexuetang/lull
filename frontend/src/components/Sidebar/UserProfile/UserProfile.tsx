import { Box, Button, chakra, Flex } from "@chakra-ui/react";
import { DeafenIcon, MuteIcon, SettingsIcon } from "../..";

const UserProfile = () => {
  return (
    <chakra.section flex="0 0 auto" bg="secondaryAlt" zIndex="1">
      <Flex h="52px" fontWeight="500" py="8px" mb="1px" flexShrink="0">
        <Flex ml="-2px" minW="120px" pl="2px">
          <Box
            data-component="avatar wrapper"
            w="32px"
            h="32px"
            cursor="pointer"
            borderRadius="50%"
          ></Box>
          <Box data-component="name tag"></Box>
        </Flex>

        <Flex>
          <Button variant="userProfile">
            <Box backgroundImage="linear-gradient(0deg,transparent,transparent 1px,transparent 0,transparent 2px,transparent 0)">
              <MuteIcon />
            </Box>
          </Button>

          <Button variant="userProfile">
            <Box backgroundImage="linear-gradient(0deg,transparent,transparent 1px,transparent 0,transparent 2px,transparent 0)">
              <DeafenIcon />
            </Box>
          </Button>

          <Button variant="userProfile">
            <Box backgroundImage="linear-gradient(0deg,transparent,transparent 1px,transparent 0,transparent 2px,transparent 0)">
              <SettingsIcon />
            </Box>
          </Button>
        </Flex>
      </Flex>
    </chakra.section>
  );
};

export default UserProfile;
