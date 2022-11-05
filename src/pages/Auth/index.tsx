import {
  Image,
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "../../components/RegistrationForm";
import SignInFrom from "../../components/SignInForm";

const Auth = () => {
  return (
    <VStack
      w="full"
      px={[12, 20]}
      bg="#26273B"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      spacing={8}
    >
      <Link to="/">
        <Image src="Bank.svg" alt="logo" />
      </Link>

      {/* <SignInFrom /> */}
      <RegistrationForm />
    </VStack>
  );
};

export default Auth;
