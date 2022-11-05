import React, { useState } from "react";
import Navbar from "../../sections/Navbar";
import { VStack, Text, Image } from "@chakra-ui/react";
import Hero from "../../sections/Hero";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
export const LandingPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isSignin, setIsSigin] = useState(true);

  const setActiveToSignIn = () => {
    setIsSigin(true);
  };
  const setActiveToRegister = () => {
    setIsSigin(false);
  };
  return (
    <VStack w="full" px={[12, 20]} pt={4} bg="#26273B">
      <Navbar onOpen={onOpen} setActiveToSignIn={setActiveToSignIn} />
      <Hero onOpen={onOpen} setActiveToRegister={setActiveToRegister} />
    </VStack>
  );
};
{
  // IMPLEMENTED SIGNIN AND REGISTER AS MODAL FORMS.
  // DID NOT LOOK GOOD ON MOBILE 🤧
  /*
<Modal isOpen={isOpen} onClose={onClose}>
<ModalOverlay />
<ModalContent py={4}>
   <ModalHeader>
    <ModalCloseButton />
  </ModalHeader> 
  <ModalBody>
    {isSignin ? (
      <form
        style={{
          width: "100%",
        }}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <FormControl
          w="full"
          display="flex"
          flexDir="column"
          alignItems="center"
          gap={4}
        >
          <FormLabel>
          <Image src="Bank.svg" /> 
            Sign In
          </FormLabel>
          <Input type="email" placeholder="johndoe@email.com" />
          <Input type="password" placeholder="**********" />
          <FormHelperText>
            Don't have an account? Register now
          </FormHelperText>
        </FormControl>
      </form>
    ) : (
      <form
        style={{
          width: "100%",
        }}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <FormControl
          w="full"
          display="flex"
          flexDir="column"
          alignItems="center"
          gap={4}
        >
          <FormLabel>
            <Image src="Bank.svg" />
            Register
          </FormLabel>
          <Input type="email" placeholder="johndoe@email.com" />
          <Input type="password" placeholder="**********" />
          <FormHelperText>
            Don't have an account? Register now
          </FormHelperText>
        </FormControl>
      </form>
    )}
  </ModalBody>
  <ModalFooter display="flex" justifyContent="center">
    <Button type="submit">Submit</Button>
  </ModalFooter>
</ModalContent>
</Modal> */
}
