// components/ContactUs.js
import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

const ContactUs = () => {
  return (
    <Box
      color="white"
      padding="4rem"
      borderRadius="md"
      maxWidth={{ base: "100%", md: "60vw" }}
      margin="auto"
    >
      <Heading fontSize="3xl" fontWeight="bold" mb="4" textAlign="center">
        Contact Us
      </Heading>
      <Text fontSize="lg" mb="6" color="gray.500" textAlign="center">
        Get in touch with us for tailored solutions.
      </Text>
      <Flex mb="4">
        <Input
          type="text"
          placeholder="Name"
          mr="2"
          bgGradient="linear(to-tr, #182447, rgba(255, 255, 255, 0.3))"
          color="white"
          border="none"
          borderBottom="1px solid white"
        />
        <Input
          type="email"
          placeholder="Your Email Here"
          ml="2"
          bgGradient="linear(to-tr, #182447, rgba(255, 255, 255, 0.3))"
          color="white"
          border="none"
          borderBottom="1px solid white"
        />
      </Flex>
      <Input
        type="text"
        placeholder="Subject"
        color="white"
        border="none"
        borderBottom="1px solid white"
        bgGradient="linear(to-tr, #182447, rgba(255, 255, 255, 0.3))"
        mb="4"
      />
      <Textarea
        placeholder="How can we Help?"
        bgGradient="linear(to-tr, #182447, rgba(255, 255, 255, 0.3))"
        color="white"
        border="none"
        borderRadius="md"
        minHeight="100px"
        resize="none"
        borderBottom="1px solid white"
        mb="4"
      />
      <Button colorScheme="teal">Submit</Button>
    </Box>
  );
};

export default ContactUs;
