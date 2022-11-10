import { Button, Link } from "@chakra-ui/react";
import { Astronaut, Planet } from "../components";
import TParticles from "./TParticles";

const Error404 = () => {
  return (
    <>
      <body className="permission_denied">
        <div id="tsparticles"></div>
        <div className="denied__wrapper">
          <h1>404</h1>
          <h3>
            LOST IN <span>SPACE</span> Lull? Hmm, looks like that page doesn't
            exist.
          </h3>
          <Astronaut
            width="43px"
            h="43px"
            position="absolute"
            right="20px"
            top="210px"
            animation="spin 4.5s infinite linear"
          />
          <Planet />
          <Link as="a" href="/">
            <Button
              background="none"
              color="#fff"
              padding="12px 0px 10px 0px"
              border=" 1px solid #fff"
              borderRadius="md"
              outline=" none"
              width=" 150px"
              fontSize="15px"
              m="0 auto"
              display="block"
              mb="40px"
              mt="25px"
              fontWeight="400"
              _hover={{
                color: "#ffbb39",
                borderColor: "#ffbb39",
                cursor: "pointer",
                opacity: "1",
              }}
            >
              Go Home
            </Button>
          </Link>
        </div>
      </body>
      <TParticles />
    </>
  );
};

export default Error404;
