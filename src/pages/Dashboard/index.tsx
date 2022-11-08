import { HStack } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../../components/Sidebar";

const Dashboard: React.FC = () => {
  return (
    <HStack
      height="100vh"
      bg="primary"
      width="full"
      overflow="hidden"
      spacing={0}
    >
      <Sidebar />

      {/* Content */}
    </HStack>
  );
};

export default Dashboard;
