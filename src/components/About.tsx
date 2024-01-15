import { Avatar, Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { allSkills } from "./types"
import Skill from "./Skill";
export default function About() {
    return (
        <Stack as="section" id="about" w={"100%"} maxW="4xl" bg="white" p={8} spacing={8} border={1} borderStyle="solid" borderColor="gray.500">
            <Heading as="h2" size="lg" textAlign="center">
                About Me
            </Heading>
            <Text>
                I am a Web3 enthusiast looking to reshape the internet by crafting the next generation of decentralized applications.
                With 5 years of Software Engineering experience and multiple hackathon wins, I am always ready to take on new challenges and learn cutting-edge, technologies including:
            </Text>
            <SimpleGrid columns={3} spacing={9}>
                {Object.values(allSkills).map((skill) => (
                    <Skill key={skill.name} {...skill} />
                ))}
            </SimpleGrid>
        </Stack>
    );
};

