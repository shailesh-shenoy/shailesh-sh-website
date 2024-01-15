import { Box, Flex, Heading, Stack, Text, Image, chakra, shouldForwardProp, Link, Button } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";

export default function Hero() {
    const ChakraHeader = chakra(motion.h1, {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
    });
    const ChakraText = chakra(motion.p, {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
    });

    return (
        <Flex as="section" w={"100%"} maxW="7xl" bg="white" direction={{ base: "column", md: "row" }} m={16} border={1} borderStyle="solid" borderColor="gray.500">
            <Stack flex={1} p={8}>
                <ChakraText fontSize="3xl" color="gray.900" initial={{ x: -1000 }} animate={{ x: 0 }} transition={{
                    type: "spring",
                    duration: "0.4",
                    delay: "0"
                }}>
                    Hi!
                </ChakraText>
                <ChakraHeader
                    fontSize="6xl"
                    fontWeight="bold"
                    color="gray.900"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    // @ts-ignore no problem in operation, although type error appears.
                    transition={{
                        type: "spring",
                        duration: 2,
                        delay: 0.4
                    }}
                >
                    {"I'm Shailesh."}
                </ChakraHeader>
                <Heading as="h2" size="xl" mb={12}>
                    Software Engineer.
                </Heading>
                <Text fontSize="2xl">
                    Decentralizing the future,
                </Text>
                <Text fontSize="2xl">
                    one block at a time.
                </Text>
                <Flex align="center" mt="auto">
                    <Link href="#projects" border={1} borderStyle="solid" borderColor="gray.600" px={4} py={2}>View my work</Link>
                    <Image src="/icons/chain_horizontal_alt.png" alt="Connecting chain" h="4" w="auto" aria-hidden />
                    <Link href="" border={1} borderStyle="solid" borderColor="gray.600" px={4} py={2}>Contact me</Link>
                </Flex>
            </Stack>
            <Box flex={1}>
                <Image src="/images/hero_toon.jpg" alt="Shailesh, developing" w="auto" />
            </Box>
        </Flex >
    );
};
