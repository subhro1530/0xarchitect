// pages/index.js
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import { Box } from "@chakra-ui/react";
import Services from "@/components/Services";

const HomePage = () => {
  return (
    <Box
      bgGradient="linear(to-r, cyan.500, violet.500)"
      minHeight="100vh"
      overflow="hidden"
    >
      <Navbar />
      <HeroSection />
      <Services />
    </Box>
  );
};

export default HomePage;
