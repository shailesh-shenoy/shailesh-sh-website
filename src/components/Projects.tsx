import { Text, Heading, Image, Flex, Box } from "@chakra-ui/react";
import { projects } from "./types";
import Project from "./Project";
export default function Projects() {
    return (
        <Box as="section" w={"100%"} maxW="4xl" bg="white" p={8} border={1} borderStyle="solid" borderColor="gray.500">
            <Heading as="h2" size="lg" mb={8} textAlign="center">
                Projects
            </Heading>
            <Text mb={8}>The best way to learn new tech is to build something with it, so I try to keep myself busy with some projects. Check out some of my recent work!</Text>
            <Flex direction="column" align="stretch">
                {projects.map((project, i, all) => (
                    <Flex direction="column" align="center" key={project.name}>
                        <Project  {...project} />
                        {(i < all.length - 1) && <Image src="icons/chain_vertical_alt.png" h={24} w="auto" alt="Connector Chain" />}
                    </Flex>
                ))}
            </Flex>
        </Box>
    );
}
