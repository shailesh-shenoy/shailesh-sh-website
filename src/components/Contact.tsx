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
        <Flex as="section" id="contact" w={"100%"} maxW="4xl" bgColor="primary.dark" p={8} mb={16} direction="column" align="center" border={2} borderStyle="solid" borderColor="primary.light">
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
                fontWeight={500} border={1} borderStyle="solid" color="tertiary.light" borderColor="tertiary.light" px={4} py={2} borderRadius={0}
                _hover={{ bg: "secondary.light", color: "gray.50", borderColor: "secondary.light" }}
                _focus={{ bg: "blue.50", color: "blue.700", borderColor: "blue.700", borderWidth: 3 }} >Get in touch</Button>
        </Flex>
    );
}
