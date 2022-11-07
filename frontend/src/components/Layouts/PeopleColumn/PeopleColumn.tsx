import { Box } from "@chakra-ui/react";
import { EmptyOnlineFriends } from "../../App/ui/Empty";

const PeopleColumn = () => {
  return (
    <Box display="flex" flexDir="column" flex="1 1 auto" overflow="hidden">
      <EmptyOnlineFriends />
    </Box>
  );
};

export default PeopleColumn;
