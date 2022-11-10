import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import { AuthPageBackground } from "../Icons";
import { useDispatch } from "react-redux";
import authSlice from "../../store/slices/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    username: Yup.string().required("username is a required field"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
  });

  const handleLogin = async (username: string, password: string) => {
    await axios
      .post("http://127.0.0.1:8000/login/", { username, password })
      .then((res) => {
        dispatch(
          authSlice.actions.setAuthTokens({
            token: res.data.access,
            refreshToken: res.data.refresh,
          }),
        );
        dispatch(authSlice.actions.setAccount(res.data.user));
        // setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box display="flex" flexDir="row" flex="1 1 auto">
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
              initialValues={{ username: "", password: "" }}
              onSubmit={(values) => {
                handleLogin(values.username, values.password);
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
                        <FormLabel htmlFor="username">
                          username/Phone Number
                        </FormLabel>
                        <Input
                          type="text"
                          name="username"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.username}
                          placeholder=""
                          id="username"
                        />
                        <Text>
                          {errors.username &&
                            touched.username &&
                            errors.username}
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
                          {errors.password &&
                            touched.password &&
                            errors.password}
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
    </Box>
  );
};

export default Login;
