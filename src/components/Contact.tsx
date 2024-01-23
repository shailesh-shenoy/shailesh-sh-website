import {
    Heading,
    Text,
    Button,
    Flex,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { mailToText } from "./types";
export default function Contact() {
    return (
        <Flex as="section" id="contact" w={"100%"} maxW="4xl" bgImage="linear-gradient(
            210deg,
            hsl(210deg 100% 60%) 0%,
            hsl(214deg 100% 68%) 4%,
            hsl(216deg 100% 74%) 8%,
            hsl(218deg 100% 78%) 13%,
            hsl(219deg 100% 82%) 18%,
            hsl(220deg 100% 86%) 25%,
            hsl(221deg 100% 90%) 34%,
            hsl(222deg 100% 93%) 49%,
            hsl(223deg 100% 97%) 72%,
            hsl(0deg 0% 100%) 100%
          )" p={8} mb={16} direction="column" align="center" border={2} borderStyle="solid" borderColor="blue.500">
            <Heading as="h2" fontSize="3xl" mb={8} textAlign="center" fontFamily="secondary" fontWeight="500" lineHeight={1.4}>
                Contact
            </Heading>
            <Text>
                {`Are you looking for a passionate and creative developer who can work on both Software & Web3 projects? 
                If so, you have come to the right place! I am always eager to collaborate with like-minded people and explore new possibilities. 
                Whether you have an idea, a job opportunity, or just a friendly greeting, I would love to hear from you. 
                Don’t hesitate to contact me and let’s make something awesome together!`}
            </Text>
            <Button mt={8} fontSize="xl"
                as={NextLink} href={mailToText} variant="ghost"
                fontWeight={400} _hover={{ bg: "blue.50", color: "blue.700", borderColor: "blue.700" }} _focus={{ bg: "blue.50", color: "blue.700", borderColor: "blue.700", borderWidth: 3 }} border={1} borderStyle="solid" color="blue.600" colorScheme="blue" borderColor="blue.600" px={4} py={2} borderRadius={0}>Get in touch</Button>
        </Flex>
    );
}
