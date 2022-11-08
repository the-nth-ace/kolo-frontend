import { VStack, Text } from "@chakra-ui/react";
import React from "react";
import Transaction, { TransactionProps } from "./transaction";

type Props = {
  date: string;
  transactions: Array<TransactionProps>;
};

const TransactionsOnDate: React.FC<Props> = ({ date, transactions }) => {
  return (
    <VStack w="full" spacing={5} align="flex-start">
      {/* DATE */}
      <Text color="#A2ABA3" fontSize="15px">
        Mon, Mar 1
      </Text>
      {/* Transactions */}
      <VStack w="full" spacing="1">
        <Transaction
          amount={1000}
          description="Transfer from Femi"
          debitOrCredit="Debit"
        />
        <Transaction
          amount={1000}
          description="Transfer to Femi"
          debitOrCredit="Credit"
        />
      </VStack>
    </VStack>
  );
};

export default TransactionsOnDate;
