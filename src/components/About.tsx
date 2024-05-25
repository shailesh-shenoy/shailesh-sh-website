import { Avatar, Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { allSkills } from "./types"
import Skill from "./Skill";
export default function About() {
    return (
        <Stack as="section" id="about" w={"100%"} maxW="4xl" bgColor="primary.dark" color="#f5f5f5" p={8} spacing={8} border={2} borderStyle="solid" borderColor="gray.50" fontSize="xl" borderRadius="16px">
            <Heading as="h2" fontSize="3xl" textAlign="center" fontFamily="secondary" fontWeight="500" lineHeight={1.4} color="#8f8f8f">
                About Me
            </Heading>
            <Text>
                I am a Web3 believer looking to reshape the internet by crafting the next generation of decentralized applications.
                With 5 years of Software Engineering experience and multiple hackathon wins, I am always ready to take on new challenges with cutting-edge technologies, including:
            </Text>
            <SimpleGrid columns={3} spacing={9} fontWeight={600}>
                {Object.values(allSkills).map((skill) => (
                    <Skill key={skill.name} {...skill} />
                ))}
            </SimpleGrid>
        </Stack>
    );
};

