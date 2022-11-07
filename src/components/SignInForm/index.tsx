import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { Field, Formik } from "formik";
import { LoginRequest } from "../../types/LoginRequest";
import { setToRegistrationPage, login } from "../../redux/slices/auth.slice";
import axios from "axios";
import { sleep } from "../../utils";

const SignInForm: React.FC = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  return (
    <VStack
      bg="white"
      borderRadius="lg"
      width={["full", "400px"]}
      pt={4}
      pb={8}
    >
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values: LoginRequest, { resetForm }: any) => {
          await sleep(1000);
          try {
            const resp = await axios.post(
              "http://localhost:5000/auth/login",
              values
            );
            toast({
              title: "Log in Successful",
              description: "You have successfully logged in",
              status: "success",
              duration: 9000,
              isClosable: true,
              position: "top",
            });
            dispatch(login(resp.data.data));
          } catch (err) {
            toast({
              title: "Error",
              description:
                "There was an error logging you in. Check your credentials",
              status: "error",
              duration: 9000,
              isClosable: true,
              position: "top",
            });
          }
        }}
      >
        {({ handleSubmit, errors, touched, values, isSubmitting }) => (
          <form
            onSubmit={handleSubmit}
            style={{
              width: "100%",
            }}
          >
            <VStack w="full" alignItems="center" spacing={4} px={8} py={4}>
              <FormLabel>Sign In</FormLabel>
              <FormControl isInvalid={!!errors.email && touched.email}>
                <Field
                  as={Input}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.password && touched.password}>
                <Field
                  as={Input}
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>
              <FormControl display="flex" flexDir="column" alignItems="center">
                <Button
                  bg="secondary"
                  color="header"
                  mt={2}
                  width="full"
                  height="40px"
                  borderRadius="md"
                  type="submit"
                  isLoading={isSubmitting}
                >
                  Sign In
                </Button>
                <FormHelperText>
                  Don't have an account?{" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      dispatch(setToRegistrationPage());
                    }}
                  >
                    Sign Up
                  </span>
                </FormHelperText>
              </FormControl>
            </VStack>
          </form>
        )}
      </Formik>
    </VStack>
  );
};

export default SignInForm;
