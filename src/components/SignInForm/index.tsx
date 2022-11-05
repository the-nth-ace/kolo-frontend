import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const SignInFrom = () => {
  return (
    <VStack bg="white" borderRadius="lg" width={["full", "400px"]} h="350px">
      {" "}
      <FormControl
        w="full"
        display="flex"
        flexDir="column"
        alignItems="center"
        gap={4}
        px={8}
        pt={12}
      >
        <FormLabel>Sign In</FormLabel>

        <Input type="email" placeholder="johndanladi@kolobank.com" />
        <Input type="password" placeholder="**********" />

        <Button
          bg="secondary"
          color="header"
          px={4}
          width="150px"
          height="40px"
          borderRadius="md"
        >
          Sign In
        </Button>
        <FormHelperText>Don't have an account? Register now</FormHelperText>
      </FormControl>
    </VStack>
  );
};

export default SignInFrom;
