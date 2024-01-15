import { Box, Flex, Heading, Stack, Text, Image } from "@chakra-ui/react";

export default function Hero() {
    return (
        <Flex as="section" w={"100%"} maxW="7xl" bg="white" direction={{ base: "column", md: "row" }} m={16} border={1} borderStyle="solid" borderColor="gray.500">
            <Stack flex={1}>
                <Heading as="h1" size="2xl">
                    Hi, I&apos;m Shailesh Shenoy
                </Heading>
                <Heading as="h2" size="xl">
                    Software Engineer.
                </Heading>
                <Text mt={4} fontSize="xl">
                    Decentralizing the future, one block at a time.
                </Text>
            </Stack>
            <Box flex={1}>
                <Image src="/images/hero_toon.jpg" alt="Shailesh, developing" w="auto" />
            </Box>
        </Flex>
    );
};
