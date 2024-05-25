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
        <Flex as="section" id="contact" w={"100%"} maxW="4xl" bgColor="primary.dark" p={8} mb={16} direction="column" align="center" border={2} borderStyle="solid"
            borderColor="primary.light" borderRadius="16px">
            <Heading as="h2" fontSize="3xl" mb={8} textAlign="center" fontFamily="secondary" fontWeight="500" lineHeight={1.4} color="#8f8f8f">
                Contact
            </Heading>
            <Text>
                {`Are you looking for a passionate and creative developer who can work on both Software & Web3 projects? 
                If so, you have come to the right place! I am always eager to collaborate with like-minded people and explore new possibilities. 
                Whether you have an idea, a job opportunity, or just a friendly greeting, I would love to hear from you. 
                Don’t hesitate to contact me and let’s make something awesome together!`}
            </Text>
            <Button px={8} py={2} borderRadius="8px" bgColor="#f5f5f5" color="#141414" mt="12px"
                _focus={{ bgColor: "#b355fd", color: "#f5f5f5", borderWidth: 3 }}
                _hover={{ bgColor: "#b355fd", color: "#f5f5f5" }} >
                Get in Touch
            </Button>
        </Flex>
    );
}
