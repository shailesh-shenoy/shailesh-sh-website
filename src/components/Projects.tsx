import { Text, Heading, Image, Flex, Box, Stack } from "@chakra-ui/react";
import { projects } from "./types";
import Project from "./Project";
export default function Projects() {
    return (
        <Box as="section" id="projects" w={"100%"} maxW="4xl" bgColor="primary.dark" color="#f5f5f5" p={8} border={2} borderStyle="solid" borderColor="primary.light" borderRadius="16px">
            <Heading as="h2" fontSize="3xl" mb={8} textAlign="center" fontFamily="secondary" fontWeight="500" lineHeight={1.4} color="#8f8f8f">
                Projects
            </Heading>
            <Text mb={12}>The best way to learn new tech is to build something with it, so I try to keep myself busy with some projects. Check out some of my recent work!</Text>
            <Stack direction="column" align="stretch" spacing={10} mb={4}>
                {projects.map((project) => (
                    <Project {...project} key={project.name} />
                ))}
            </Stack>
        </Box>
    );
}
