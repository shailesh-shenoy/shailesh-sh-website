import { Avatar, Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { allSkills } from "./types"
import Skill from "./Skill";
export default function About() {
    return (
        <Stack as="section" w={"100%"} maxW="4xl" bg="white" p={4}>
            <Heading as="h2">About Me</Heading>
            <Text>
                I am a Web3 enthusiast looking to reshape the internet by crafting the next generation of decentralized applications.
                With 5 years of Software Engineering experience and multiple hackathon wins, I am always ready to take on new challenges and learn cutting-edge technologies.
            </Text>
            <Heading as="h3">Skills</Heading>
            <SimpleGrid columns={3} spacing={9}>
                {Object.values(allSkills).map((skill) => (
                    Skill(skill)
                ))}
            </SimpleGrid>
        </Stack>
    );
};

