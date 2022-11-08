import { Box, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { Avatar, Text, Select } from "@chakra-ui/react";
import { brandRing } from "../../utils";
import "./index.css";

const DashboardHeader = () => {
  return (
    <HStack
      w="full"
      minH="70px"
      borderBottom="1px solid"
      borderBottomColor="dashBorder"
      justifyContent="space-between"
      align="center"
      px={8}
    >
      {/* Profile Welcome */}
      <HStack spacing={4}>
        <Avatar size="sm" name="The Ace" src="https://bit.ly/broken-link" />{" "}
        <Heading fontSize="md" color="header">
          Welcome to Kolo Bank
        </Heading>
      </HStack>
      {/* Accounts & Notifications */}
      <HStack>
        <HStack>
          <Select
            placeholder="Choose Account"
            className="kolo-account-selector"
            variant="filled"
            bg="primary"
            borderRadius="lg"
            width="150px"
            size="sm"
            fontSize="11px"
            color="#A2ABA3"
            _hover={{
              bg: "primary",
            }}
            // icon={null}
          >
            <option
              style={{
                background: "#26273B",
                color: "white",
              }}
              value="option1"
            >
              Option 1
            </option>
            <option
              style={{
                background: "#26273B",
                color: "white",
              }}
              value="option1"
            >
              Option 2
            </option>
            <option
              style={{
                background: "#26273B",
                color: "white",
              }}
              value="option1"
            >
              Option 3
            </option>
          </Select>
          <Box bg="#303778" height={8} width={8} borderRadius="md"></Box>
        </HStack>
        <HStack w="150px" background="red.200" h="full"></HStack>
      </HStack>
    </HStack>
  );
};

export default DashboardHeader;
