import {
  Box,
  Button,
  chakra,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import authSlice from "../../store/slices/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    username: Yup.string().required("Username is a required field"),
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
          <form noValidate onSubmit={handleSubmit}>
            <Box w="100%" textAlign="center">
              <VStack alignItems="start">
                <Heading>Welcome back!</Heading>
                <FormLabel htmlFor="username">Username/Phone Number</FormLabel>
                <Input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  placeholder=""
                  id="username"
                />
                <Text fontSize="sm">
                  {errors.username && touched.username && errors.username}
                </Text>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder=""
                />
                <Text fontSize="sm">
                  {errors.password && touched.password && errors.password}
                </Text>
                <Button type="submit">Log In</Button>
                <Box mt="4px">
                  <chakra.span>Need an account?</chakra.span>
                  <Button
                    variant="textLink"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </Button>
                </Box>
              </VStack>
            </Box>
          </form>
        </Box>
      )}
    </Formik>
  );
};

export default Login;
