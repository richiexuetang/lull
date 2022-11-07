import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import { AuthPageBackground } from "../Icons";

const Login = () => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
  });

  return (
    <Box pos="relative" w="100vw" minH="100vh">
      <Box w="100%" h="100%" bg="#5865f2">
        <AuthPageBackground w="100%" h="100%" />
      </Box>

      <Box
        display="flex"
        pos="absolute"
        top="0"
        left="0"
        minH="580px"
        alignItems="center"
        justifyContent="center"
        w="100%"
        h="100%"
      >
        <Box
          opacity="1"
          transform="scale(1) translateY(0px) translateZ(0px)"
          bg="tertiary"
          boxShadow="0 2px 10px 0 hsla(0,0%),0%,.2)"
          borderRadius="5px"
          boxSizing="border-box"
          color="text.muted"
          w="784px"
          p="32px"
          fontSize="18px"
        >
          {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
          <Formik
            validationSchema={schema}
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              // Alert the input values of the form that we filled
              alert(JSON.stringify(values));
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <Box>
                {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                <form noValidate onSubmit={handleSubmit}>
                  <Box w="100%" textAlign="center">
                    <VStack alignItems="start">
                      <Heading>Welcome back!</Heading>
                      <FormLabel htmlFor="email">Email/Phone Number</FormLabel>
                      <Input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="email"
                        id="email"
                      />
                      <Text>
                        {errors.email && touched.email && errors.email}
                      </Text>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder="Enter password"
                      />
                      <Text>
                        {errors.password && touched.password && errors.password}
                      </Text>
                      <Button type="submit">Login</Button>
                    </VStack>
                  </Box>
                </form>
              </Box>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
