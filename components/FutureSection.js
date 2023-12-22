// components/FutureSection.js
import React from "react";
import { Box, Heading, Image, Link } from "@chakra-ui/react";

const FutureSection = () => {
  return (
    <Box
      textAlign="center"
      padding="4rem"
      bgGradient="linear(45deg, rgba(20, 20, 37,0.8), rgba(37, 37, 37, 0.2))"
    >
      <Heading fontSize="3xl" fontWeight="bold" mb="6" color="white">
        Join us in Shaping the Future
      </Heading>
      <Link
        href="#join"
        display="inline-block"
        position="relative"
        _hover={{ transform: "scale(1.1)" }}
        borderRadius="md"
        overflow="hidden"
        margin="0 auto"
        maxWidth="300px" // Adjust as needed
      >
        <Image
          src="/join_us.png" // Replace with your image path
          alt="Join Us Image"
          width="100%"
          height="auto"
        />
      </Link>
    </Box>
  );
};

export default FutureSection;
