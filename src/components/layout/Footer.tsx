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
            color="white"
            mt="auto"
            bg="#0D0D0D"
            backdropFilter="saturate(180%) blur(10px)"
            borderTop={1}
            borderStyle={"solid"}
            borderColor={"gray.50"}
        >
            <Flex as={Stack} pt={10} px={10} pb={5}>
                <SimpleGrid
                    templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr" }}
                    spacing={8}
                >
                    <Stack spacing={6}>
                        <Flex justify={"center"}>
                            <Link as={NextLink} href="/">
                                <Image src="/logo.png" alt="Shailesh Shenoy's Portfolio" w={48} h="auto" />
                            </Link>
                        </Flex>
                        <Text fontSize={"sm"} align={"center"}>
                            © 2023 Shailesh Shenoy.
                        </Text>
                    </Stack>

                    <Stack>
                        <ListHeader>Site</ListHeader>
                        {NAV_ITEMS.map((navItem) => (
                            <Link as={NextLink} key={navItem.label} href={navItem.link}>
                                {navItem.label}
                            </Link>
                        ))}
                    </Stack>
                    <Stack>
                        <ListHeader>Socials</ListHeader>
                        {SOCIALS.map((navItem) => (
                            <Link as={NextLink} key={navItem.label} href={navItem.link}>
                                {navItem.label}
                            </Link>
                        ))}
                    </Stack>
                </SimpleGrid>
            </Flex>
        </Box>
    );
}

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Heading as="h4" fontWeight={"600"} fontSize={"xl"} mb={2}>
            {children}
        </Heading>
    );
};