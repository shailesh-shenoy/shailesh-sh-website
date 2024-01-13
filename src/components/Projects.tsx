import { Text, Heading, SimpleGrid, Stack, Flex, Box } from "@chakra-ui/react";
import { projects } from "./types";
import Project from "./Project";
export default function Projects() {
  return (
    <Box as="section" w={"100%"} maxW="8xl" bg="white" p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Projects
      </Heading>
      <Text>Check out some of my recent work!</Text>
      <Flex direction="column" align="stretch" gap={8}>
        {projects.map((project) => Project(project))}
      </Flex>
    </Box>
  );
}
