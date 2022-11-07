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
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import SignInForm from "../../components/SignInForm";
import RegistrationForm from "../../components//RegistrationForm";

const Auth = () => {
  const { loginPage } = useSelector((state: RootState) => state.auth);
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
      {loginPage ? <SignInForm /> : <RegistrationForm />}
    </VStack>
  );
};

export default Auth;
