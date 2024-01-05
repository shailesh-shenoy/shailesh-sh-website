import { Text, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { projects } from "./types";
import Project from "./Project";
export default function Projects() {
    return (
        <Stack as="section" w={"100%"} maxW="8xl" bg="white" p={4}>
            <Heading as="h2" size="lg" mb={4}>
                Projects
            </Heading>
            <Text>Check out some of my recent work!</Text>
            <SimpleGrid columns={{ "base": 1, md: 2, lg: 3 }} spacing={8}>
                {projects.map((project) => (
                    Project(project)
                ))}
            </SimpleGrid>
        </Stack>
    );
};
