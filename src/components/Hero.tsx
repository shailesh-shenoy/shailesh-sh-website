import { Heading, Stack, Text } from "@chakra-ui/react";

export default function Hero() {
    return (
        <Stack as="section" w={"100%"} maxW="4xl" bg="white" p={4} minH={"50vh"} m={16}>
            <Heading as="h1" size="2xl">
                Hey! I&apos;m Shailesh Shenoy
            </Heading>
            <Heading as="h2" size="xl">
                Software Engineer.
            </Heading>
            <Text mt={4} fontSize="xl">
                Decentralizing the future, one block at a time.
            </Text>
        </Stack>
    );
};
