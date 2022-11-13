import {
  Divider,
  Heading,
  HStack,
  VStack,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
import React from "react";
import DashboardHeader from "../header";
import AccountSummary from "./account-summary";
import MonthlyBalanceChart from "./monthly-balance";
import TransactionsSummary from "./transactions-summary";

const DashContent: React.FC = () => {
  return (
    <HStack flex="1" w="full" spacing={0}>
      {/* Main Content */}
      <VStack
        w="730px"
        borderRight="px solid"
        borderColor="dashBorder"
        pt={6}
        px={8}
        spacing={8}
        overflowY="scroll"
        h="100vh"
        bg="#1B1C31"
      >
        {/* Account Summaries */}
        <HStack
          bg="rgba(255,255,255, 0.05)"
          borderRadius="md"
          w="full"
          flex="0 0 115px"
          p={4}
          spacing={4}
        >
          <AccountSummary
            amount={1000}
            description="Credits"
            color="#6236FF"
            graphData={[
              50, 100, 25, 60, 80, 100, 30, 49, 78, 50, 100, 25, 60, 80, 100,
              30, 49, 78,
            ]}
          />
          <Divider orientation="vertical" borderColor="dashBorder" />
          <AccountSummary
            amount={1000}
            description="Debits"
            color="#FDBC64"
            graphData={[
              50, 100, 25, 60, 80, 100, 30, 49, 78, 50, 100, 25, 60, 80, 100,
              30, 49, 78,
            ]}
          />
        </HStack>

        {/* Transactions Summary */}
        <HStack
          bg="rgba(255,255,255, 0.05)"
          borderRadius="md"
          flex="0 0 1050px"
          pb={12}
          w="full"
        >
          <TransactionsSummary />
        </HStack>
      </VStack>

      {/* Right Side Content */}
      <VStack
        h="full"
        w="full"
        flex="1"
        bg="#14152A"
        px="40px"
        pt={8}
        pb={30}
        borderLeft="1px solid"
        borderColor="dashBorder"
        spacing={4}
      >
        {/* Master Card & Balance */}
        <HStack w="full" spacing={8}>
          <Image src="/images/Master Card.png" height="170px" />
          <VStack
            // flex="1"
            bg="#FDBC64"
            h="170px"
            w="110px"
            borderRadius="md"
          ></VStack>
        </HStack>
        Monthly Balance Chart
        <VStack w="full" height="150px" bg="#14152B">
          <MonthlyBalanceChart
            labels={[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "June",
              "July",
              "August",
            ]}
            data={[15, 18, 27, 27, 19, 21, 20, 24]}
          />
        </VStack>
        {/* Account Summary */}
        <VStack w="full" height="220px" bg="white"></VStack>
      </VStack>
    </HStack>
  );
};

export default DashContent;
