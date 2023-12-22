// components/Navbar.js
import React from "react";
import {
  Box,
  Flex,
  VStack,
  HStack,
  IconButton,
  Button,
  Image,
  Link,
  CloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Flex
      as="nav"
      align="center"
      justify={{ base: "space-between", md: "space-evenly" }}
      wrap="wrap"
      paddingX={{ base: "1.5rem", md: "1.5rem" }}
      paddingY="30px"
      bg={isOpen ? "rgba(0, 0, 0, 0.8)" : "transparent"}
      color="white"
      top="0"
      left="0"
      right="0"
      zIndex="100"
      transition="background-color 0.3s ease-in-out"
    >
      <Box>
        <Link href="/" _hover={{textDecoration:"none"}}>
          <Flex alignItems="center">
            <Image src="/logo.png" alt="Logo" width={30} height={35} mr={2} />
            <Box fontSize="lg" fontWeight="bold">
              0xArchitect
            </Box>
          </Flex>
        </Link>
      </Box>

      <Box>
        <IconButton
          display={{ base: "block", md: "none" }}
          icon={<HamburgerIcon />}
          size="lg"
          fontSize="22px"
          bgColor="transparent"
          color="white"
          _hover={{ color: "black", bgColor: "cyan.400" }}
          onClick={onToggle}
        />
      </Box>

      {/* Centered Links */}
      <Box
        display={{ base: "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        ml={{ base: "0px", md: "-175px" }}
      >
        <HStack spacing={4}>
          <Link href="/services">
            <Button
              variant="ghost"
              color="white"
              fontSize="sm"
              fontWeight="light"
              _hover={{ color: "gray.300", bgColor: "transparent" }}
            >
              Services
            </Button>
          </Link>
          <Link href="/projects">
            <Button
              variant="ghost"
              color="white"
              fontSize="sm"
              fontWeight="light"
              _hover={{ color: "gray.300", bgColor: "transparent" }}
            >
              Projects
            </Button>
          </Link>
          <Link href="/teams">
            <Button
              variant="ghost"
              color="white"
              fontSize="sm"
              fontWeight="light"
              _hover={{ color: "gray.300", bgColor: "transparent" }}
            >
              Teams
            </Button>
          </Link>
        </HStack>
      </Box>

      {/* Responsive Sidebar */}
      <Box
        display={{ base: isOpen ? "block" : "none", md: "none" }}
        position="fixed"
        top="0"
        right="0"
        h="100vh"
        w="85vw"
        bg="rgba(0, 0, 0, 0.9)"
        paddingX="1.5rem"
        paddingY="1rem"
        zIndex="99"
        transform={isOpen ? "translateX(0)" : "translateX(100%)"}
        transition="transform 0.5s ease-in-out"
      >
        <Flex justify="space-between" mb={4}>
          <CloseButton
            color="white"
            fontSize="20px"
            paddingX="20px"
            paddingY="20px"
            onClick={onClose}
          />
        </Flex>
        <VStack spacing={4} align="stretch">
          <Link href="/services">
            <Button
              variant="ghost"
              color="white"
              fontSize="sm"
              fontWeight="light"
              width="100%"
              _hover={{ color: "gray.300", bgColor: "transparent" }}
            >
              Services
            </Button>
          </Link>
          <Link href="/projects">
            <Button
              variant="ghost"
              color="white"
              fontSize="sm"
              fontWeight="light"
              width="100%"
              _hover={{ color: "gray.300", bgColor: "transparent" }}
            >
              Projects
            </Button>
          </Link>
          <Link href="/teams">
            <Button
              variant="ghost"
              color="white"
              fontSize="sm"
              fontWeight="light"
              width="100%"
              _hover={{ color: "gray.300", bgColor: "transparent" }}
            >
              Teams
            </Button>
          </Link>
          <Button
            variant="outline"
            color="white"
            fontSize="sm"
            fontWeight="light"
            width="100%"
            _hover={{ color: "white", bgColor: "gray.600" }}
          >
            Connect
          </Button>
          <Button
            colorScheme="teal"
            fontSize="sm"
            fontWeight="light"
            width="100%"
          >
            Wallet
          </Button>
        </VStack>
      </Box>

      {/* Desktop Mode Connect and Wallet Buttons */}
      <Box display={{ base: "none", md: "flex" }}>
        <Button
          variant="outline"
          fontSize="sm"
          color="white"
          border="none"
          fontWeight="light"
          bgColor="gray.600"
          mr={2}
          _hover={{ color: "black", bgColor: "gray.300" }}
        >
          Connect
        </Button>
        <Button colorScheme="teal" fontSize="sm" fontWeight="light">
          Wallet
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
