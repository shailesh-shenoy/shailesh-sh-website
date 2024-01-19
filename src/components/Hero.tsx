import { Box, Flex, Heading, Stack, Text, Image, chakra, shouldForwardProp, Link, Button } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import NextLink from "next/link";
import { useState } from "react";

const ChakraHeader = chakra(motion.h1, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});
const ChakraText = chakra(motion.p, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Hero() {

    const [textColor, setTextColor] = useState('#F2B872');

    return (
        <Stack as="section" p={8} w={"100%"} maxW="7xl" bgImage="/images/hero_blocks_dark.jpg" bgSize="cover" bgPosition="center" direction="column" align={{ md: "center" }} color="gray.50" border={2} borderStyle="solid" borderColor="#FF8066" minH="60vh" mt={16}>
            <ChakraText fontSize={{ base: "3xl", md: "5xl" }} initial={{ x: -1000 }} animate={{ x: 0 }} transition={{
                type: "spring",
                duration: "0.4",
                delay: "0"
            }}>
                {"Hi, I am "}
            </ChakraText>
            <ChakraHeader
                fontSize={{ base: "5xl", md: "7xl" }}
                fontWeight="bold"
                mb={4}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                bgImage="linear-gradient(
                    45deg,
                    hsl(10deg 100% 70%) 0%,
                    hsl(1deg 97% 72%) 24%,
                    hsl(351deg 91% 69%) 36%,
                    hsl(341deg 82% 66%) 46%,
                    hsl(332deg 70% 62%) 55%,
                    hsl(321deg 57% 58%) 65%,
                    hsl(307deg 43% 54%) 74%,
                    hsl(285deg 41% 55%) 84%,
                    hsl(263deg 45% 56%) 100%
                  )" bgClip="text"
                // @ts-ignore no problem in operation, although type error appears.
                transition={{
                    type: "spring",
                    duration: 2,
                    delay: 0.4
                }}
            >
                Shailesh Shenoy.
            </ChakraHeader>
            <Heading as="h2" size="xl" mb={20} color={textColor} fontFamily="secondary">
                <TypeAnimation sequence={[" ", 1000, "Software Engineer", 1000, () => setTextColor('#C34A36'), "Full Stack Developer", 1000, () => setTextColor('#845EC2'), "Web3 Enthusiast", 1000, () => setTextColor('#F2B872'),]} repeat={Infinity} />
            </Heading>
            <Text fontSize="3xl" fontFamily="secondary">
                Decentralizing the future,
            </Text>
            <Text fontSize="3xl" mb={12} fontFamily="secondary">
                one block at a time.
            </Text>
            <Flex align="center" mt="auto">
                <Button as={NextLink} href="" variant="solid" fontSize="xl" border={1} borderStyle="solid" bg="#845EC2" _hover={{ bg: "#4B4453" }} color="white" borderColor="white" px={4} py={2} borderRadius={0}>My Projects</Button>
                <Image src="/icons/chain_horizontal_alt_white.png" alt="Connecting chain" h="4" w="auto" aria-hidden />
                <Button as={NextLink} href="/Shailesh_Resume.pdf" target="_blank" variant="ghost" fontSize="xl" border={1} borderStyle="solid" color="#FF8066" borderColor="gray.300" px={4} py={2} borderRadius={0}>Resume</Button>
            </Flex>
        </Stack>
    );
};
