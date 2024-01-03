import { Box, Heading, Text, Input, Textarea, Button } from "@chakra-ui/react";

export default function Contact() {
    return (
        <Box>
            <Heading>Contact Me</Heading>
            <Text>Feel free to reach out to me for any inquiries or collaborations.</Text>
            <Box mt={4}>
                <Input placeholder="Your Name" />
            </Box>
            <Box mt={4}>
                <Input placeholder="Your Email" />
            </Box>
            <Box mt={4}>
                <Textarea placeholder="Your Message" />
            </Box>
            <Button mt={4} colorScheme="blue">
                Send Message
            </Button>
        </Box>
    );
};

