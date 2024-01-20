import { ReactNode } from "react";

import {
    Box,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Image,
    Flex,
    Heading,
} from "@chakra-ui/react";

import NextLink from "next/link";
import { SOCIALS, NAV_ITEMS } from "./types";

export default function Footer() {
    return (
        <Box
            as="footer"
            color="gray.50"
            mt="auto"
            bg="#0D0D0D"
            backdropFilter="saturate(180%) blur(10px)"
            borderTop={1}
            borderStyle={"solid"}
            borderColor={"gray.50"}
            lineHeight={1.8}
            fontFamily="primary"
            fontWeight={400}
            fontSize="md"
        >
            <Flex as={Stack} pt={10} px={10} pb={5}>
                <SimpleGrid
                    templateColumns={{ base: "1fr 1fr", md: "2fr 1fr 1fr" }}
                    spacing={8} alignItems={"center"}
                >
                    <Stack spacing={6} gridColumn={{ base: "span 2", md: 1 }}>
                        <Flex justify={"center"}>
                            <Link as={NextLink} href="/">
                                <Image src="/logo.png" alt="Shailesh Shenoy's Portfolio" w={48} h="auto" />
                            </Link>
                        </Flex>
                        <Text fontSize={"sm"} align={"center"}>
                            © 2024 Shailesh Shenoy.
                        </Text>
                    </Stack>

                    <Flex direction="column" align="center" h="100%">
                        <Stack align="flex-end">
                            <ListHeader>Site</ListHeader>
                            {NAV_ITEMS.map((navItem) => (
                                <Link as={NextLink} key={navItem.label} href={navItem.link}>
                                    {navItem.label}
                                </Link>
                            ))}
                        </Stack>
                    </Flex>
                    <Flex direction="column" align="center" h="100%">
                        <Stack align="flex-end"><ListHeader>Socials</ListHeader>
                            {SOCIALS.map((navItem) => (
                                <Link as={NextLink} key={navItem.label} href={navItem.link}>
                                    {navItem.label}
                                </Link>
                            ))}
                        </Stack>
                    </Flex>
                </SimpleGrid>
            </Flex>
        </Box>
    );
}

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Heading as="h4" fontWeight={"500"} color="gray.400" fontSize={"lg"} fontFamily="tertiary" mb={2}>
            {children}
        </Heading>
    );
};