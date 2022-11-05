import { HStack, Button, Image, Flex, chakra } from "@chakra-ui/react";
import React from "react";
import NavItem from "../../components/NavItem";
import navData from "../../data/header.data";
import MobileDrawer from "../../MobileDrawer";
import { Link } from "react-router-dom";

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
            <Link to="/auth">
              <Button
                color="primary"
                px={4}
                width="120px"
                height="35px"
                borderRadius="md"
              >
                Sign In
              </Button>
            </Link>
          </HStack>

          <MobileDrawer />
        </HStack>
      </Flex>
    </chakra.header>
  );
};

export default Navbar;
