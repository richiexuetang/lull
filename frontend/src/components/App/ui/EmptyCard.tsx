import { chakra, VStack, Text } from "@chakra-ui/react";

const EmptyCard = () => {
  return (
    <VStack textAlign="center" justifyContent="center" p="16px">
      <chakra.h2
        mb="4px"
        color="white"
        fontWeight="500"
        fontFamily="display"
        fontSize="17px"
        lineHeight="22px"
      >
        It's quiet for now...
      </chakra.h2>
      <Text
        color="interactive.normal"
        fontFamily="primary"
        fontSize="14px"
        lineHeight="18px"
      >
        When a friend starts an activity—like playing a game or hanging out on
        voice—we'll show it here!
      </Text>
    </VStack>
  );
};

export default EmptyCard;
