import {
  HStack,
  Text,
  Heading,
  Button,
  Image,
  Flex,
  chakra,
} from "@chakra-ui/react";
import React from "react";
import NavItem from "../../components/NavItem";
import navData from "../../data/header.data";
import MobileDrawer from "../../MobileDrawer";

const Navbar: React.FC = () => {
  return (
    <chakra.header id="header" w="full">
      <Flex w="100%" py={2} align="center" justifyContent="space-between">
        <Image src="Bank.svg" />

        <HStack as="nav" spacing={8}>
          <HStack spacing="4" display={{ base: "none", md: "flex" }}>
            {navData.map((item, i) => (
              <NavItem text={item.text} link={item.link} key={i} />
            ))}
            <Button
              color="primary"
              px={4}
              width="120px"
              height="35px"
              borderRadius="206px"
            >
              Sign In
            </Button>
          </HStack>

          <MobileDrawer />
        </HStack>
      </Flex>
    </chakra.header>
  );
};

export default Navbar;
