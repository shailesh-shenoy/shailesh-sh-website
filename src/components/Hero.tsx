import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";

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
                    <Button px={8} py={2.5} borderRadius="8px"
                        _focus={{ color: "#b355fd", borderWidth: 3 }}
                        _hover={{ color: "#b355fd" }}
                    >Resume</Button>
                    <Button px={8} py={2.5} borderRadius="8px" bgColor="#f5f5f5" color="#141414"
                        _focus={{ bgColor: "#b355fd", color: "#f5f5f5", borderWidth: 3 }}
                        _hover={{ bgColor: "#b355fd", color: "#f5f5f5" }}>
                        Contact
                    </Button>
                </Stack>
            </Box>
        </Flex>
    );
}