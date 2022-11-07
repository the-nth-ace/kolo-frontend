import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
import React from "react";
import axios from "axios";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { setToLoginPage } from "../../redux/slices/auth.slice";
import { sleep } from "../../utils";

const RegistrationForm: React.FC = () => {
  // Form registration logic
  const toast = useToast();
  const dispatch = useDispatch();

  return (
    <VStack bg="white" borderRadius="lg" width={["full", "400px"]}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "********",
          confirmPassword: "********",
        }}
        onSubmit={async (values: any, { resetForm }: any) => {
          await sleep(3000);
          try {
            const resp = await axios.post(
              "http://localhost:5000/auth/signup",
              values
            );

            toast({
              title: "Account created.",
              description: "We've created your account for you.",
              status: "success",
              duration: 9000,
              isClosable: true,
              position: "top",
            });

            resetForm();
          } catch (err: any) {
            toast({
              title: "Something went wrong.",
              description: err.message,
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
            <VStack w="full" alignItems="center" spacing={4} p={8}>
              <FormLabel>Sign Up</FormLabel>
              <FormControl isInvalid={!!errors.firstName && touched.firstName}>
                <Field
                  as={Input}
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  validate={(value: string) => {
                    if (value.length < 3) {
                      return "First Name cannot be less than three characters";
                    }
                  }}
                />
                <FormErrorMessage>{errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.lastName && touched.lastName}>
                <Field
                  as={Input}
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  validate={(value: string) => {
                    if (value.length < 3) {
                      return "Last Name cannot be less than three characters";
                    }
                  }}
                />
                <FormErrorMessage>{errors.lastName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.email && touched.email}>
                <Field
                  as={Input}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  validate={async (value: string) => {
                    if (value.length < 3) {
                      return "Email cannot be less than three characters";
                    }

                    try {
                      await axios.get(
                        `http://localhost:5000/auth/user/email/${value}`
                      );
                      return "User with this email already exists";
                    } catch (err) {
                      null;
                    }
                  }}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.password && touched.password}>
                <Field
                  as={Input}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  validate={(value: string) => {
                    if (value.length < 8) {
                      return "Password cannot be less than eight characters";
                    }
                  }}
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={!!errors.confirmPassword && touched.confirmPassword}
              >
                <Field
                  as={Input}
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  validate={(value: string) => {
                    if (value.length < 8) {
                      return "Confrim Password cannot be less than eight characters";
                    }

                    if (value != values.password) {
                      errors.password = "Confirm password must match Password";
                      return "Confirm Password must match Password";
                    }
                  }}
                />
                <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
              </FormControl>
              <FormControl
                display="flex"
                flexDir="column"
                alignItems="center"
                pb={4}
              >
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
                  Sign Up
                </Button>
                <FormHelperText>
                  Already have an account?{" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      dispatch(setToLoginPage());
                    }}
                  >
                    Sign In
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

export default RegistrationForm;
