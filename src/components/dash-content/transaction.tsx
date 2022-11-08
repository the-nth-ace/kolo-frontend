import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import {
  TbArrowBigRightLine,
  TbArrowBigLeft,
  TbArrowBigRight,
} from "react-icons/tb";

export type TransactionProps = {
  description: string;
  debitOrCredit: "Debit" | "Credit";
  amount: number;
};

const Transaction: React.FC<TransactionProps> = ({
  debitOrCredit,
  description,
  amount,
}: TransactionProps) => {
  return (
    <HStack
      justify="space-between"
      w="full"
      borderRadius="lg"
      p={3}
      _hover={{
        background: "#303143",
        cursor: "pointer",
      }}
    >
      {/* Icon and Description */}
      <HStack>
        <Box
          height="10"
          width="10"
          borderRadius="lg"
          bg="#41435C"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Icon
            w={6}
            h={6}
            style={
              debitOrCredit == "Debit"
                ? {
                    fill: "#96DAC6",
                    stroke: "#96DAC6",
                  }
                : {
                    fill: "#C46B6B",
                    stroke: "#C46B6B",
                  }
            }
            as={debitOrCredit == "Debit" ? TbArrowBigLeft : TbArrowBigRight}
          />
        </Box>
        <Text fontSize="xs" color="white">
          {description}
        </Text>
      </HStack>
      {/* Amounct */}
      <Text color={debitOrCredit == "Debit" ? "#96DAC6" : "#994943"}>
        ${amount}
      </Text>
    </HStack>
  );
};

export default Transaction;
