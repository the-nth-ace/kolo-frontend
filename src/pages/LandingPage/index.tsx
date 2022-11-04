import React from "react";
import Navbar from "../../sections/Navbar";
import { VStack, Text } from "@chakra-ui/react";
import Hero from "../../sections/Hero";
export const LandingPage = () => (
  <VStack w="full" px={[12, 20]} pt={4} bg="#26273B">
    <Navbar />
    <Hero />
  </VStack>
);
