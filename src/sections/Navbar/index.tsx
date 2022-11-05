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

interface INavBar {
  onOpen: () => void;
  setActiveToSignIn: () => void;
}

const Navbar: React.FC<INavBar> = (props) => {
  const openSignInModal = () => {
    props.setActiveToSignIn();
    props.onOpen();
  };
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
              borderRadius="md"
              onClick={openSignInModal}
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
