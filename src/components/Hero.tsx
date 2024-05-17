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

const ChakraHeader = chakra(motion.h1, {
    shouldForwardProp: (prop) =>
        isValidMotionProp(prop) || shouldForwardProp(prop),
});
const ChakraText = chakra(motion.p, {
    shouldForwardProp: (prop) =>
        isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Hero() {

    return (
        <Stack
            as="section"
            p={8}
            w={"100%"}
            maxW="7xl"
            // bgImage="/images/hero_blocks_primary.jpg"
            bgColor="primary.dark"
            bgSize="cover"
            bgPosition="center"
            direction="column"
            align="center"
            color="gray.50"
            border={1}
            borderStyle="solid"
            borderColor="gray.50"
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
                    40deg,
                    hsl(7deg 100% 74%) 0%,
                    hsl(4deg 84% 72%) 16%,
                    hsl(360deg 70% 71%) 23%,
                    hsl(355deg 59% 68%) 29%,
                    hsl(349deg 50% 65%) 34%,
                    hsl(342deg 41% 63%) 39%,
                    hsl(334deg 34% 60%) 43%,
                    hsl(323deg 28% 57%) 48%,
                    hsl(308deg 22% 54%) 52%,
                    hsl(289deg 21% 52%) 57%,
                    hsl(272deg 24% 52%) 61%,
                    hsl(257deg 27% 53%) 66%,
                    hsl(244deg 30% 53%) 71%,
                    hsl(232deg 36% 51%) 77%,
                    hsl(223deg 50% 47%) 84%,
                    hsl(211deg 97% 36%) 100%
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
                color="tertiary.light"
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
                        // () => setTextColor("#C34A36"),
                        "Full Stack Developer",
                        1000,
                        // () => setTextColor("#845EC2"),
                        "Web3 Builder",
                        1000,
                        // () => setTextColor("#F2B872"),
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
            <Stack direction="row" spacing={12} align="center" mt="auto" fontSize="2xl" fontFamily="secondary" fontWeight={400} mb={4}>
                <Button
                    as={NextLink}
                    href="/Shailesh_Resume.pdf"
                    target="_blank"
                    tabIndex={0}
                    variant="ghost"
                    border={1}
                    borderStyle="solid"
                    color="primary.light"
                    borderColor="primary.light"
                    px={4}
                    py={1}
                    w={140}
                    borderRadius={0}
                    _focus={{ bg: "secondary.light", color: "primary.light", borderWidth: 3 }}
                    _hover={{ bg: "primary.light", color: "secondary.light" }}
                >
                    Resume
                </Button>

                <Button
                    as={NextLink}
                    href="/#projects"
                    variant="solid"
                    border={1}
                    borderStyle="solid"
                    w={140}
                    _focus={{ bg: "secondary.light", color: "primary.light", borderWidth: 3 }}
                    _hover={{ bg: "secondary.light", color: "primary.light" }}
                    color="secondary.light"
                    borderColor="secondary.dark"
                    px={4}
                    py={1}
                    borderRadius={0}
                >
                    Projects
                </Button>
            </Stack>
        </Stack>
    );
}
