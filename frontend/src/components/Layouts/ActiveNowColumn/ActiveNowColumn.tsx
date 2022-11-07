import { Box } from "@chakra-ui/react";
import { EmptyCard, Heading } from "../../App";

const ActiveNowColumn = () => {
  return (
    <Box
      flex="0 1 30%"
      minW="360px"
      maxW="420px"
      borderLeft="2px solid #3c4147"
    >
      <Box padding="16px" h="100%" ml="2px">
        <Heading text="Active Now" />
        <EmptyCard />
      </Box>
    </Box>
  );
};

export default ActiveNowColumn;
