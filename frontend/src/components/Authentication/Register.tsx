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

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    email: Yup.string().required("Email is a required field"),
    username: Yup.string().required("Username is a required field"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
    dob: Yup.string().required("Please fill out this field"),
  });

  const handleRegister = async (
    email: string,
    username: string,
    password: string,
    dob: string,
  ) => {
    console.log("register", email, password, username, dob);
    await axios
      .post("http://127.0.0.1:8000/register/", {
        username,
        email,
        password,
        date_of_birth: dob,
      })
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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Formik
      validationSchema={schema}
      initialValues={{ email: "", username: "", password: "", dob: "" }}
      onSubmit={(values) => {
        handleRegister(
          values.email,
          values.username,
          values.password,
          values.dob,
        );
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
                <Heading>Create an account</Heading>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder=""
                  id="email"
                />
                <Text fontSize="sm">
                  {errors.email && touched.email && errors.email}
                </Text>

                <FormLabel htmlFor="username">Username</FormLabel>
                <Input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  placeholder=""
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

                <FormLabel htmlFor="dob">Date of Birth</FormLabel>
                <Input
                  type="date"
                  name="dob"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.dob}
                  placeholder=""
                />
                <Text fontSize="sm">
                  {errors.dob && touched.dob && errors.dob}
                </Text>

                <Button type="submit">Continue</Button>
                <Box mt="4px">
                  <Button variant="textLink" onClick={() => navigate("/login")}>
                    Already have an account?
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

export default Register;
