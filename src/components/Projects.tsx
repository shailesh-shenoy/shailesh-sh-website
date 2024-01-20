import { Text, Heading, Image, Flex, Box } from "@chakra-ui/react";
import { projects } from "./types";
import Project from "./Project";
export default function Projects() {
    return (
        <Box as="section" id="projects" w={"100%"} maxW="4xl" bgImage="linear-gradient(
            45deg,
            hsl(16deg 100% 63%) 0%,
            hsl(14deg 100% 69%) 1%,
            hsl(12deg 100% 75%) 3%,
            hsl(10deg 100% 81%) 5%,
            hsl(8deg 100% 86%) 8%,
            hsl(5deg 100% 91%) 14%,
            hsl(3deg 100% 95%) 30%,
            hsl(0deg 14% 99%) 100%
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
