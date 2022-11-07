import { Heading, Flex, VStack, Text, Button, Image } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";

const Hero: React.FC = () => {
  // NOTE Getting value from counterReducer
  // const { value } = useSelector((state: RootState) => state.counter);
  // // NOTE instead of set state
  // const dispatch = useDispatch();

  /*
  * In the component, do
  onClick = {()=> dispatch(increment)}
  where increment is the action in the slice.

  For actions that have payload,
    onClick = {()=> dispatch(incrementByAmount(33))}
    33 is the payload
  */
  return (
    <Flex
      w="full"
      py={4}
      alignItems="flex-start"
      flexDir={{ base: "column", md: "row" }}
    >
      <VStack
        w={{ base: "full", md: "397px" }}
        alignItems="flex-start"
        spacing={8}
        pt={{ base: 20, md: 28 }}
      >
        <VStack w="full">
          <Heading
            color="header"
            fontSize={{ base: "50px", md: "60px" }}
            lineHeight={{ base: "55px", md: "65px" }}
          >
            Smart banking for transactions.
          </Heading>
          <Text color="body" lineHeight={{ base: "25px", md: "30px" }}>
            A unique account to manage your business finances and optimize your
            accounting.
          </Text>
        </VStack>
        <Link to="/auth">
          <Button
            bg="secondary"
            color="header"
            px={8}
            minW="fit-content"
            py={6}
            borderRadius="md"
            _hover={{
              bg: "default",
              opacity: 0.9,
            }}
          >
            Register Now
          </Button>
        </Link>
      </VStack>
      <VStack
        w="full"
        h="full"
        pt={{ base: "12", md: "20" }}
        alignItems="flex-end"
      >
        <Image src="Dashboard.jpg" borderRadius="md" />
      </VStack>
    </Flex>
  );
};

export default Hero;
