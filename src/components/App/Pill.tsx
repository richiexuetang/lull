import { Box, chakra } from "@chakra-ui/react";

const Pill = () => {
  return (
    <Box
      overflow="hidden"
      w="8px"
      h="48px"
      display="flex"
      alignItems="center"
      justifyContent="flexStart"
      pos="absolute"
      top="0"
      left="0"
    >
      <chakra.span
        pos="absolute"
        display="block"
        w="8px"
        h="48px"
        borderRadius="0 4px 4px 0"
        marginLeft="-4px"
        bg="white"
      ></chakra.span>
    </Box>
  );
};

export default Pill;
