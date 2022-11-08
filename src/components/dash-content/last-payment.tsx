import { Button, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";

const LastPayment: React.FC = () => (
  <VStack w="full" align="flex-start" px={8} spacing={12}>
    {/* Header */}
    <HStack w="full" justify="space-between">
      <Heading fontSize="20px" color="header" textAlign="left">
        Payment Details
      </Heading>
      <Icon
        h={5}
        w={5}
        cursor="pointer"
        color="white"
        as={BiDotsVerticalRounded}
      />
    </HStack>
    {/* Source & Amount */}
    <HStack align="center" justify="space-between" w="full">
      <VStack spacing={2} align="flex-start">
        <Text fontSize="15px" color="#A2ABA3">
          From
        </Text>
        <Heading color="header" fontSize="15px">
          Olith Bank Refund
        </Heading>
      </VStack>
      <Heading color="white"> +1,5550 </Heading>
    </HStack>
    {/* Details */}
    <HStack w="full" spacing={20} color="body">
      <VStack align="flex-start" fontSize="15px">
        <Text>Type</Text>
        <Text>Cash Refund</Text>
      </VStack>
      <VStack align="flex-start" fontSize="15px">
        <Text>Category</Text>
        <Text>Annual Cashback</Text>
      </VStack>
      <VStack align="flex-start" fontSize="15px">
        <Text>1:48PM</Text>
        <Text>Mon, Mar 1</Text>
      </VStack>
    </HStack>
    {/* Buttons */}
    <HStack w="full" justify="space-between" h="20px">
      <Button>Helo world</Button>
      <HStack>
        <Button>Helo world</Button>
        <Button>Helo world</Button>
      </HStack>
    </HStack>
  </VStack>
);

export default LastPayment;
