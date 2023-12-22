// components/Footer.js
import React from "react";
import { Box, Flex, Image, Link, HStack, Text } from "@chakra-ui/react";
import { FaTwitter, FaDiscord, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bgGradient="linear(to-r, blue.700, #29223d)"
      color="white"
      padding="2rem"
    >
      <Flex direction="column" align="center" justify="center">
        {/* Logo */}
        <HStack>
          <Image src="/logo.png" alt="Footer Logo" height={39} width={35} />
          <Text fontSize="2xl" fontWeight="bold" mt="2">
            0xArchitect
          </Text>
        </HStack>

        {/* All Rights Reserved */}
        <Text fontSize="sm" mt="4">
          All rights reserved
        </Text>

        {/* Social Icons */}
        <Flex mt="4" align="center">
          <Link href="#twitter" isExternal mx="2">
            <FaTwitter size={24} />
          </Link>
          <Link href="#discord" isExternal mx="2">
            <FaDiscord size={24} />
          </Link>
          <Link href="#telegram" isExternal mx="2">
            <FaTelegram size={24} />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
