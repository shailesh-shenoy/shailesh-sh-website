import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  useDisclosure,
  List,
  ListItem,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

import { NAV_ITEMS } from "./types";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      as="header"
      flexWrap={"wrap"}
      width="100%"
      px={8} py={2}
      justify="center"
      fontSize="xl"
      fontFamily={"secondary"}
      bg="primary.dark"
      color={"gray.50"}
      backdropFilter="saturate(180%) blur(10px)"
    >
      <Flex
        as="nav"
        w="100%"
        maxW="7xl"
        h={20}
        py={4}
        align={"center"}
        justify={"space-between"}
      >
        <Flex align={"center"}>
          <Link
            as={NextLink}
            href="/"
            bg="primary.dark"
          >
            <Image
              src="/logo.png"
              alt="Shailesh Shenoy's Portfolio"
              h={20}
              w="auto"
            />
          </Link>
        </Flex>

        <DesktopNav />

        <Flex display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            colorScheme={"primary"}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
      </Flex>
      <Box h={0} flexBasis={"100%"} />
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Flex>
  );
}

const DesktopNav = () => {
  return (
    <Stack
      as={List}
      direction={"row"}
      align="center"
      justify="space-between"
      display={{ base: "none", md: "flex" }}
      bgImage={{ md: "/icons/chain_white.png" }}
      bgSize="auto 14px"
      bgRepeat="repeat-x"
      bgPosition="center"
      spacing={8}
    >
      {NAV_ITEMS.map((navItem) => (
        <ListItem
          as={NextLink}
          href={navItem.link}
          key={navItem.label}
          bg="primary.dark"
          px={5}
          py={2}
          w={120}
          textAlign="center"
          border="1px"
          borderRadius="8px"
          borderColor="gray.400"
          borderStyle="solid"
          _hover={{ bg: "#f5f5f5", color: "#141414" }}

        >
          {navItem.label}
        </ListItem>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Flex
      as={List}
      bg="transparent"
      p={8}
      display={{ md: "none" }}
      direction="column"
    >
      {NAV_ITEMS.map((navItem, i, all) => (
        <Flex
          as={ListItem}
          key={navItem.label}
          direction="column"
          align="center"
        >
          <ListItem
            as={NextLink}
            href={navItem.link}
            key={navItem.label}
            bg="primary.dark"
            px={5}
            py={2}
            border="1px"
            borderColor="gray.400"
            borderStyle="solid"
            _hover={{ bg: "gray.300", color: "black" }}
          >
            {navItem.label}
          </ListItem>
          {i < all.length - 1 && (
            <Image
              src="/icons/chain_vertical_alt_white.png"
              alt="Connecting chain"
              h="12"
              w="auto"
              aria-hidden
            />
          )}
        </Flex>
      ))}
    </Flex>
  );
};
