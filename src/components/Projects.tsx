import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

export default function Projects() {
    return (
        <Box py={8}>
            <Heading as="h2" size="lg" mb={4}>
                Projects
            </Heading>
            <SimpleGrid columns={[1, 2, 3]} spacing={8}>
                {/* Add your project cards here */}
            </SimpleGrid>
        </Box>
    );
};
