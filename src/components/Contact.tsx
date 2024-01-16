import {
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Stack,
  Container,
  Link,
  Flex,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { mailToText } from "./types";
import { EmailIcon } from "@chakra-ui/icons";
export default function Contact() {
  return (
    <Stack as="section" w={"100%"} maxW="4xl" bg="white" p={4} mb={16}>
      <Heading>Contact Me</Heading>
      <Text>Want to talk tech or build something with me?</Text>
      <Button
        as={NextLink}
        href={mailToText}
        target="_blank"
        variant="solid"
        colorScheme="green"
        w={40}
        textAlign="center"
      >
        Reach out to me
      </Button>
    </Stack>
  );
}
