import { HStack, Image, VStack, Text, List, ListItem } from "@chakra-ui/react";
import React from "react";
import { navData } from "./nav-data";
import NavItem from "./nav-item";

const Sidebar: React.FC = () => {
  return (
    <VStack
      w="100px"
      h="100vh"
      borderRight="1px solid #3D3E62"
      py={8}
      px={6}
      spacing="100px"
    >
      {/* Logo */}
      <Image src="Bank.svg" alt="bank" />
      <VStack spacing={8}>
        {navData.map((el) => (
          <NavItem item={el} isActive={false} key={el.label} />
        ))}
      </VStack>
    </VStack>
  );
};

export default Sidebar;
