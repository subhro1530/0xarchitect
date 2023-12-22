// components/Projects.js
import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  IconButton,
  Button,
  HStack,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "Lorem Ipsum 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin ullamcorper leo in eleifend. In at hendrerit tellus. Nunc vel ullamcorper eros.",
    imageSrc: "/box.png",
  },
  {
    id: 2,
    title: "Lorem Ipsum 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin ullamcorper leo in eleifend. In at hendrerit tellus. Nunc vel ullamcorper eros.",
    imageSrc: "/box.png",
  },
  {
    id: 3,
    title: "Lorem Ipsum 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin ullamcorper leo in eleifend. In at hendrerit tellus. Nunc vel ullamcorper eros.",
    imageSrc: "/box.png",
  },
  // Add more projects as needed
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const handlePrev = () => {
    setActiveProject((prev) => (prev > 0 ? prev - 1 : projectsData.length - 1));
  };

  const handleNext = () => {
    setActiveProject((prev) => (prev < projectsData.length - 1 ? prev + 1 : 0));
  };

  return (
    <Box paddingY="8" color="white" textAlign="center">
      <Heading
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
        fontWeight="bold"
        mb="4"
      >
        Projects
      </Heading>
      <Box position="relative" overflow="hidden">
        <IconButton
          icon={<FaChevronLeft />}
          onClick={handlePrev}
          position="absolute"
          left="2"
          top="4"
          color="teal.500"
          _hover={{ color: "teal.300" }}
        />
        <IconButton
          icon={<FaChevronRight />}
          onClick={handleNext}
          position="absolute"
          right="2"
          top="4"
          color="teal.500"
          _hover={{ color: "teal.300" }}
        />
        <HStack
          spacing={{ base: "2", md: "4", lg: "8" }}
          align="center"
          overflowX="auto"
          maxW="100%"
          mx="auto"
          px={{ base: "2", md: "4", lg: "8" }}
          py="2"
          justify="center"
        >
          {projectsData.map((project, index) => (
            <Box
              key={project.id}
              borderWidth="2px"
              borderColor="white"
              borderRadius="md"
              overflow="hidden"
              height={{ base: "60vh", md: "70vh", lg: "80vh" }}
              width={{ base: "70vw", md: "60vw", lg: "50vw" }}
              flexShrink="0"
              boxShadow="lg"
              _hover={{ boxShadow: "xl" }}
              position="relative"
            >
              <Image
                src={project.imageSrc}
                alt={`Project ${project.id}`}
                boxSize="100%"
                objectFit="cover"
                borderTopRadius="md"
              />
              <VStack
                bg="rgba(0, 0, 0, 0.8)"
                p={{ base: "2", md: "3", lg: "4" }}
                borderRadius="md"
                align="center"
                spacing={{ base: "1", md: "2", lg: "3" }}
                position="absolute"
                bottom="0"
                w="100%"
                zIndex="1"
              >
                <Text
                  fontSize={{ base: "sm", md: "md", lg: "lg" }}
                  fontWeight="bold"
                >
                  {project.title}
                </Text>
                <Text fontSize={{ base: "xs", md: "sm", lg: "md" }}>
                  {project.description}
                </Text>
                <Button size="sm" colorScheme="teal" mt="2">
                  See this project
                </Button>
              </VStack>
            </Box>
          ))}
        </HStack>
      </Box>
    </Box>
  );
};

export default Projects;
