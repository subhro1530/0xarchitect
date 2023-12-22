// components/HeroSection.js
import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Parallax } from "react-parallax";

const HeroSection = () => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage="/mask_group.png" // Replace with your image path
      strength={100}
    >
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Heading
          fontSize={{ base: "4xl", md: "7xl" }}
          fontWeight="bold"
          color="white"
        >
          Architecting
        </Heading>
        <Heading
          fontSize={{ base: "4xl", md: "7xl" }}
          fontWeight="bold"
          color="white"
        >
          Decentralized Dreams
        </Heading>
        <Text fontSize={{ base: "lg", md: "xl" }} color="white" marginTop="4">
          Crafting Web3 Experiences Beyond Imagination
        </Text>
        <Button
          colorScheme="teal"
          size={{ base: "sm", md: "lg" }}
          marginTop="6"
        >
          Schedule
        </Button>
      </Box>
    </Parallax>
  );
};

export default HeroSection;
