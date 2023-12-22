// components/Services.js
import React from "react";
import { Box, Heading, Text, SimpleGrid, Image } from "@chakra-ui/react";

const servicesData = [
  { title: "NFT & Raffle Marketplace" },
  { title: "NFT Drops" },
  { title: "Conventional Staking Platforms" },
  { title: "Lending & Borrowing Platforms" },
  { title: "Perpetual Dex" },
  { title: "Crypto Dex" },
  { title: "Multichain Solutions" },
  { title: "Smart Contract Audits" },
  { title: "Prompt Engineering Services" },
  // Add more services as needed
];

const Services = () => {
  return (
    <Box textAlign="center" paddingBottom="80px">
      <Heading fontSize="3xl" paddingTop="80px" fontWeight="bold" mb="6">
        Services
      </Heading>
      <Text
        fontSize="lg"
        color="gray.600"
        paddingLeft={{ base: "4rem", md: "8rem" }}
        paddingRight={{ base: "4rem", md: "8rem" }}
        mb="8"
      >
        Discover our comprehensive suite of services, meticulously crafted to
        elevate your business through innovative solutions.
      </Text>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={0}
        style={{
          borderTop: "1px solid white",
          borderBottom: "1px solid white",
          width: "100",
          paddingLeft: "60px",
          paddingRight: "60px",
        }}
      >
        {servicesData.map((service, index) => (
          <Box
            key={index}
            border="1px solid white"
            padding="2rem"
            textAlign="left"
          >
            <Image
              src="/service.png"
              alt={`Service ${index + 1}`}
              mb="2"
              height={39}
              width={39}
            />
            <Text fontSize="20px" width="64%" fontWeight="bold">
              {service.title}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Services;
