import { HStack, Icon, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { SidebarItem as Item } from "../../types/nav-item";

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

export default NavItem;
