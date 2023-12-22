// pages/index.js
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import { Box } from "@chakra-ui/react";
import Services from "@/components/Services";
import FutureSection from "@/components/FutureSection";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";
import Teams from "@/components/Teams";

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
      <FutureSection />
      <Teams />
      <ContactUs />
      <Footer />
    </Box>
  );
};

export default HomePage;
