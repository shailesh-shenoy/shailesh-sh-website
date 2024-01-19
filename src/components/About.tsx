import { Avatar, Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { allSkills } from "./types"
import Skill from "./Skill";
export default function About() {
    return (
        <Stack as="section" id="about" w={"100%"} maxW="4xl" bgImage="linear-gradient(
            45deg,
            hsl(0deg 0% 77%) 0%,
            hsl(267deg 12% 77%) 19%,
            hsl(267deg 22% 76%) 26%,
            hsl(266deg 32% 75%) 32%,
            hsl(265deg 41% 74%) 39%,
            hsl(265deg 50% 73%) 46%,
            hsl(264deg 58% 72%) 55%,
            hsl(263deg 65% 72%) 68%,
            hsl(263deg 72% 71%) 100%
          )" p={8} spacing={8} border={2} borderStyle="solid" borderColor="white">
            <Heading as="h2" size="lg" textAlign="center" fontFamily="tertiary" fontWeight="500">
                About Me
            </Heading>
            <Text>
                I am a Web3 enthusiast looking to reshape the internet by crafting the next generation of decentralized applications.
                With 5 years of Software Engineering experience and multiple hackathon wins, I am always ready to take on new challenges with cutting-edge technologies, including:
            </Text>
            <SimpleGrid columns={3} spacing={9}>
                {Object.values(allSkills).map((skill) => (
                    <Skill key={skill.name} {...skill} />
                ))}
            </SimpleGrid>
        </Stack>
    );
};

