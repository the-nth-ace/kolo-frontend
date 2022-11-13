import { HStack, Image, VStack, Spacer, Icon, Tooltip } from "@chakra-ui/react";
import React from "react";
import { AiOutlinePoweroff } from "react-icons/ai";
import { navData } from "./nav-data";
import { SidebarItem as Item } from "../../types/nav-item";
import { Link } from "react-router-dom";

type Props = {
  item: Item;
  color?: string;
  isActive?: boolean;
};

const NavItem: React.FC<Props> = ({ item, isActive, color }: Props) => {
  return (
    <Link
      to=""
      style={{
        width: "100%",
      }}
    >
      <HStack
        align="center"
        height={{ base: 10, "2xl": 14 }}
        transition="ease-out"
        transitionProperty="backgroud"
        transitionDuration="normal"
        w="full"
      >
        {isActive && (
          <Image src="./images/Union.png" position="relative" left="-6" />
        )}
        <Tooltip label={item.label} placement="right">
          <span>
            <Icon
              w={5}
              h={5}
              color={color ? color : isActive ? "header" : "body"}
              left="-5"
              position={isActive ? "relative" : "unset"}
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
      w="110px"
      h="100vh"
      borderRight="1px solid"
      borderColor="dashBorder"
      py={8}
      px={6}
      spacing="100px"
    >
      {/* Logo */}
      <Image src="Bank.svg" alt="bank" w="160px" />
      <VStack spacing={8} w="full">
        {navData.map((el, index) => (
          <NavItem
            item={el}
            isActive={index == 1 ? true : false}
            key={el.label}
          />
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
        color="header"
      />
    </VStack>
  );
};

export default Sidebar;
