import {
  useDisclosure,
  Flex,
  Box,
  Button,
  VStack,
  Icon,
  HStack,
  Link,
} from "@chakra-ui/react";
import KoloDrawer from "../components/KoloDrawer";
import { IoMdMenu } from "react-icons/io";
import navData from "../data/header.data";
import React from "react";

export default function MobileDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex display={{ base: "flex", md: "none" }}>
      <Button onClick={onOpen}>
        <IoMdMenu size="20px" />
      </Button>

      <KoloDrawer
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        finalFocusRef={btnRef}
        p="5"
        title="Kolo.Bank"
        footer="Powered by Ace"
        btnRef={btnRef}
      >
        <VStack alignItems="left">
          {navData.map((item, i) => (
            <Link key={i}>
              <Button variant="text"> {item.label} </Button>
            </Link>
          ))}
        </VStack>
      </KoloDrawer>
    </Flex>
  );
}
