import {
  HStack,
  Image,
  VStack,
  Text,
  List,
  ListItem,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlinePoweroff } from "react-icons/ai";
import { navData } from "./nav-data";
import NavItem from "./nav-item";

const Sidebar: React.FC = () => {
  return (
    <VStack
      w="100px"
      h="100vh"
      borderRight="1px solid"
      borderColor="dashBorder"
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
      <Spacer />
      <NavItem
        item={{
          type: "Link",
          href: "/",
          icon: AiOutlinePoweroff,
          label: "Logout",
        }}
        isActive={true}
      />
    </VStack>
  );
};

export default Sidebar;
