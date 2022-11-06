import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

import React from "react";

const RegistrationForm: React.FC = () => {
  return (
    <VStack bg="white" borderRadius="lg" width={["full", "400px"]} h="500px">
      <FormControl
        w="full"
        display="flex"
        flexDir="column"
        alignItems="center"
        gap={4}
        p={8}
        pb={2}
      >
        <FormLabel>Sign Up</FormLabel>
        <Input type="text" placeholder="First Name" />
        <Input type="text" placeholder="Last Name" />
        <Input type="email" placeholder="johndanladi@kolobank.com" />
        <Input type="password" placeholder="**********" />
        <Input type="confirmPassword" placeholder="**********" />

        <Button
          bg="secondary"
          color="header"
          mt={2}
          width="150px"
          height="40px"
          borderRadius="md"
        >
          Sign Up
        </Button>
        <FormHelperText>Already have an account? Sign In</FormHelperText>
      </FormControl>
    </VStack>
  );
};

export default RegistrationForm;
