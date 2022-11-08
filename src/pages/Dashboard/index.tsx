import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import DashContent from "../../components/dash-content";
import DashboardHeader from "../../components/header";
import Sidebar from "../../components/Sidebar";

const Dashboard: React.FC = () => {
  return (
    <HStack
      height="100vh"
      bg="dashBg"
      width="full"
      spacing={0}
      alignItems="flex-start"
    >
      <Sidebar />
      <VStack
        w="full"
        h="full"
        justify="flex-start"
        spacing={0}
        overflow="hidden"
      >
        <DashboardHeader />
        {/* React Router Switches */}
        <DashContent />
      </VStack>
    </HStack>
  );
};

export default Dashboard;
