import { chakra } from "@chakra-ui/react";
import { FriendTitlebar } from "../../Titlebar";
import { FriendToolbar } from "../../Toolbar";

const Titlebar = () => {
  return (
    <chakra.section
      display="flex"
      bg="primary"
      h="48px"
      borderBottom="1.5px solid #2f3237"
      p="0 8px"
      lineHeight="20px"
      alignItems="center"
      flex="0 0 auto"
      fontSize="16px"
      zIndex="2"
      color="gray.text"
    >
      <FriendTitlebar />
      <FriendToolbar />
    </chakra.section>
  );
};

export default Titlebar;
