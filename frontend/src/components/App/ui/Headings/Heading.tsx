import { chakra } from "@chakra-ui/react";

interface HeadingProps {
  text: string;
}

const Heading = ({ text }: HeadingProps) => {
  return (
    <chakra.h2
      fontFamily="display"
      m="8px 0 16px"
      fontWeight="700"
      fontSize="20px"
      lineHeight="24px"
      color="white"
    >
      {text}
    </chakra.h2>
  );
};

export default Heading;
