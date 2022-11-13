import {
  HStack,
  Image,
  VStack,
  Text,
  List,
  ListItem,
  Spacer,
  Icon, 
  Tooltip
} from "@chakra-ui/react";
import React from "react";
import { AiOutlinePoweroff } from "react-icons/ai";
import { navData } from "./nav-data";
import { SidebarItem as Item } from "../../types/nav-item";
import { Link } from "react-router-dom";


type Props = {
  item: Item;
  isActive: boolean;
};
const NavItem: React.FC<Props> = ({ item, isActive }: Props) => {
  return (
    <Link to="">
      <HStack
        align="center"
        justify="flex-start"
        height={{ base: 10, "2xl": 14 }}
        transition="ease-out"
        transitionProperty="backgroud"
        transitionDuration="normal"
      >
        <Tooltip label={item.label} placement="right">
          <span>
            <Icon
              w={5}
              h={5}
              color={isActive ? "header" : "body"}
              _hover={{
                color: "white",
              }}
              as={item.icon}
            />
          </span>
        </Tooltip>
      </HStack>
    </Link>
  );
};

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
