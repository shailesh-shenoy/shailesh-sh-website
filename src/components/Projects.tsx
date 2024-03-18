import { Text, Heading, Image, Flex, Box } from "@chakra-ui/react";
import { projects } from "./types";
import Project from "./Project";
export default function Projects() {
    return (
        <Box as="section" id="projects" w={"100%"} maxW="4xl" bgColor="primary.dark" p={8} border={2} borderStyle="solid" borderColor="primary.light">
            <Heading as="h2" fontSize="3xl" mb={8} textAlign="center" fontFamily="secondary" fontWeight="500" lineHeight={1.4}>
                Projects
            </Heading>
            <Text mb={8}>The best way to learn new tech is to build something with it, so I try to keep myself busy with some projects. Check out some of my recent work!</Text>
            <Flex direction="column" align="stretch">
                {projects.map((project, i, all) => (
                    <Flex direction="column" align="center" key={project.name}>
                        <Project  {...project} />
                        {(i < all.length - 1) && <Image src="icons/chain_vertical_alt_white.png" h={20} w="auto" alt="Connector Chain" />}
                    </Flex>
                ))}
            </Flex>
        </Box>
    );
}
