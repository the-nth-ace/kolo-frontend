import { HStack, VStack, Heading } from "@chakra-ui/react";
import React from "react";
import LastPayment from "./last-payment";
import TransactionsOnDate from "./transactions-on-date";
const TransactionsSummary: React.FC = () => {
  return (
    <VStack w="full" h="full" spacing={0}>
      {/* Latest Transactions */}
      <VStack
        w="full"
        h="fit-content"
        px={8}
        pt="40px"
        pb="60px"
        spacing={8}
        borderBottom="1px solid"
        borderColor="dashBorder"
      >
        {/* Header row */}
        <HStack
          w="full"
          color="header"
          letterSpacing="wider"
          justify="space-between"
          align="center"
        >
          <Heading fontSize="15px">Latest Transactions</Heading>
          <HStack w="400px" bg="white" h={4}></HStack>
        </HStack>
        {/* Transactions by Date */}
        <VStack spacing={8} w="full">
          <TransactionsOnDate date="Mon, March 1" transactions={[]} />
          <TransactionsOnDate date="Tue, March 2" transactions={[]} />
        </VStack>

        {/* Last Payment */}
      </VStack>
      <VStack w="full" pt="40px">
        <LastPayment />
      </VStack>
    </VStack>
  );
};

export default TransactionsSummary;
