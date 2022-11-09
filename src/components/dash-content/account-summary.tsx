import { Box, Heading, HStack, VStack, Text } from "@chakra-ui/react";
import React from "react";
import AccountSummaryBarChart from "./account-summary-bar-chart";

export type Props = {
  amount: number;
  description: string;
  graphData: Array<number>;
};

const AccountSummary: React.FC<Props> = ({
  amount,
  description,
  graphData,
}: Props) => {
  return (
    <HStack w="full" h="full" spacing={6}>
      <VStack alignItems="flex-start">
        <Heading fontSize="xl" color="header">
          ${amount}
        </Heading>
        <Text fontSize="xs" color="body">
          {description}
        </Text>
      </VStack>
      <Box bg="none" flex="1" h="full">
        <AccountSummaryBarChart
          label={description}
          color="#6236FF"
          data={graphData}
        />
      </Box>
    </HStack>
  );
};

export default AccountSummary;
