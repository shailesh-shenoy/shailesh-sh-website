import {
    Flex,
    Heading,
    Stack,
    Text,
    Image,
    chakra,
    shouldForwardProp,
    Button,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import NextLink from "next/link";
import { useState } from "react";

const ChakraHeader = chakra(motion.h1, {
    shouldForwardProp: (prop) =>
        isValidMotionProp(prop) || shouldForwardProp(prop),
});
const ChakraText = chakra(motion.p, {
    shouldForwardProp: (prop) =>
        isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Hero() {
    const [textColor, setTextColor] = useState("#F2B872");

    return (
        <Stack
            as="section"
            p={8}
            w={"100%"}
            maxW="7xl"
            bgImage="/images/hero_blocks_dark.jpg"
            bgSize="cover"
            bgPosition="center"
            direction="column"
            align="center"
            color="gray.50"
            border={2}
            borderStyle="solid"
            borderColor="#FF8066"
            minH="60vh"
            mt={12}
        >
            <ChakraText
                fontSize={{ base: "3xl", md: "5xl" }}
                fontWeight="400"
                lineHeight={1.2}
                initial={{ x: -2000 }}
                animate={{ x: 0 }}
                transition={{
                    type: "spring",
                    duration: "0.4",
                    delay: "0",
                }}
            >
                {"Hi, I am "}
            </ChakraText>
            <ChakraHeader
                fontSize={{ base: "5xl", md: "7xl" }}
                fontWeight="700"
                textAlign="center"
                mb={16}
                lineHeight={1.4}
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
                  )"
                bgClip="text"
                // @ts-ignore no problem in operation, although type error appears.
                transition={{
                    type: "spring",
                    duration: 2,
                    delay: 0.4,
                }}
            >
                Shailesh Shenoy.
            </ChakraHeader>
            <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl" }}
                mb={24}
                color={textColor}
                fontFamily="primary"
                fontWeight="600"
                textTransform={"uppercase"}
            >
                <TypeAnimation
                    sequence={[
                        " ",
                        1000,
                        "Software Engineer",
                        1000,
                        () => setTextColor("#C34A36"),
                        "Full Stack Developer",
                        1000,
                        () => setTextColor("#845EC2"),
                        "Web3 Builder",
                        1000,
                        () => setTextColor("#F2B872"),
                    ]}
                    repeat={Infinity}
                />
            </Heading>
            <Text
                fontSize={{ base: "2xl", md: "3xl" }}
                fontFamily="primary"
                fontWeight="500"
                fontStyle="italic"
            >
                Decentralizing the future,
            </Text>
            <Text
                fontSize={{ base: "2xl", md: "3xl" }}
                mb={12}
                fontFamily="primary"
                fontWeight="500"
                fontStyle="italic"
            >
                one block at a time.
            </Text>
            <Flex align="center" mt="auto" fontSize="xl" fontWeight={400}>
                <Button
                    as={NextLink}
                    href="/Shailesh_Resume.pdf"
                    target="_blank"
                    _focus={{ bg: "orange.50", color: "orange.700", borderColor: "orange.700", borderWidth: 3 }}
                    tabIndex={0}
                    variant="ghost"
                    border={1}
                    borderStyle="solid"
                    color="#FF8066"
                    borderColor="gray.300"
                    px={4}
                    py={2}
                    borderRadius={0}
                    _hover={{ bg: "orange.50", color: "orange.700", borderColor: "orange.700" }}
                >
                    Resume
                </Button>
                <Image
                    src="/icons/chain_horizontal_alt_white.png"
                    alt="Connecting chain"
                    h="5"
                    w="auto"
                    aria-hidden
                />
                <Button
                    as={NextLink}
                    href="/#Projects"
                    variant="solid"
                    border={1}
                    borderStyle="solid"
                    bg="#845EC2"
                    _focus={{ bg: "#4B4453", borderWidth: 3 }}
                    _hover={{ bg: "#4B4453" }}
                    color="white"
                    borderColor="white"
                    px={4}
                    py={2}
                    borderRadius={0}
                >
                    Projects
                </Button>
            </Flex>
        </Stack>
    );
}
