import { Text, Heading, Image, Flex, Box } from "@chakra-ui/react";
import { projects } from "./types";
import Project from "./Project";
export default function Projects() {
    return (
        <Box as="section" id="projects" w={"100%"} maxW="4xl" bgImage="linear-gradient(
            225deg,
            hsl(43deg 76% 81%) 0%,
            hsl(42deg 78% 83%) 11%,
            hsl(41deg 80% 84%) 22%,
            hsl(40deg 82% 86%) 33%,
            hsl(38deg 84% 88%) 44%,
            hsl(37deg 86% 90%) 56%,
            hsl(36deg 87% 91%) 67%,
            hsl(35deg 88% 93%) 78%,
            hsl(34deg 86% 94%) 89%,
            hsl(33deg 82% 96%) 100%
          )" p={8} border={2} borderStyle="solid" borderColor="#FF8066">
            <Heading as="h2" fontSize="3xl" mb={8} textAlign="center" fontFamily="secondary" fontWeight="500" lineHeight={1.4}>
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
