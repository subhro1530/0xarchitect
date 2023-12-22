// components/Teams.js
import React from "react";
import {
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  Image,
  VStack,
} from "@chakra-ui/react";

const Teams = () => {
  return (
    <Box padding="4rem" color="white" textAlign="center">
      <Heading fontSize="3xl" fontWeight="bold" mb="4">
        Teams
      </Heading>
      <Text fontSize="lg" mb="75px">
        Meet our dynamic team
      </Text>
      <Grid templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }} gap={6}>
        {/* Team Member 1 */}
        <GridItem>
          <Box>
            <VStack spacing="2">
              <Image
                src="/circle.png"
                alt="Team Member 1"
                boxSize="100px"
                mb="2"
              />
              <Text fontSize="sm" fontWeight="bold">
                Lorem Ipsum
              </Text>
              <Text fontSize="xs">Lorem Ipsum</Text>
            </VStack>
          </Box>
        </GridItem>

        {/* Team Member 2 */}
        <GridItem>
          <Box>
            <VStack spacing="2">
              <Image
                src="/circle.png"
                alt="Team Member 2"
                boxSize="100px"
                mb="2"
              />
              <Text fontSize="sm" fontWeight="bold">
                Lorem Ipsum
              </Text>
              <Text fontSize="xs">Lorem Ipsum</Text>
            </VStack>
          </Box>
        </GridItem>

        {/* Team Member 3 */}
        <GridItem>
          <Box>
            <VStack spacing="2">
              <Image
                src="/circle.png"
                alt="Team Member 3"
                boxSize="100px"
                mb="2"
              />
              <Text fontSize="sm" fontWeight="bold">
                Lorem Ipsum
              </Text>
              <Text fontSize="xs">Lorem Ipsum</Text>
            </VStack>
          </Box>
        </GridItem>

        {/* Team Member 4 */}
        <GridItem>
          <Box>
            <VStack spacing="2">
              <Image
                src="/circle.png"
                alt="Team Member 4"
                boxSize="100px"
                mb="2"
              />
              <Text fontSize="sm" fontWeight="bold">
                Lorem Ipsum
              </Text>
              <Text fontSize="xs">Lorem Ipsum</Text>
            </VStack>
          </Box>
        </GridItem>

        {/* Team Member 5 */}
        <GridItem>
          <Box>
            <VStack spacing="0">
              <Image
                src="/circle.png"
                alt="Team Member 5"
                boxSize="100px"
                mb="2"
              />
              <Text fontSize="sm" fontWeight="bold">
                Lorem Ipsum
              </Text>
              <Text fontSize="xs">Lorem Ipsum</Text>
            </VStack>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Teams;
