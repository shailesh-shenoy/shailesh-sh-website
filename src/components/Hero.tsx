import { Box, Button, Flex, Heading, Stack, Text, useDisclosure } from "@chakra-ui/react";
import ContactButton from "./ContactButton";
import NextLink from "next/link";

export default function Hero() {

    return (
        <Flex as="section"

            w="100%"
            h="80vh"
            align="center"
            maxW="7xl"
            lineHeight={1.2}>
            <Box>
                <Text fontSize="3rem" color="#f5f5f5" fontFamily="secondary">Hi!</Text>
                <Heading as="h1" fontSize="4rem" fontWeight="400" mb='8px' color="#f5f5f5" fontFamily="secondary">I am Shailesh Shenoy</Heading>
                <Text fontSize="2.25rem" color="#8f8f8f">A software engineer and web3 developer</Text>
                <Stack direction="row" mt="2rem" justify="flex-end" spacing="80px" fontSize="1.5rem">
                    <Button as={NextLink} px="2.5rem" py="1.5rem" borderRadius="8px"
                        variant="none"
                        _hover={{ color: "#b355fd" }}
                        fontFamily={"primary"}
                        fontSize="1.5rem"
                        fontWeight={400}
                        href="/Shailesh_Resume.pdf"
                        target="_blank"
                    >
                        Resume
                    </Button>
                    <ContactButton>Contact</ContactButton>
                </Stack>
            </Box>
        </Flex>
    );
}