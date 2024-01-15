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
import ThemeButton from "./ThemeButton";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      as="header"
      width="100%"
      justify="center"
      bg="gray.50"
      color={"primary.900"}
      backdropFilter="saturate(180%) blur(10px)"
    >
      <Flex
        as="nav"
        w="100%"
        maxW="7xl"
        h={16}
        py={4}
        align={"center"}
        bgImage="/icons/chain_horizontal_1.png" bgSize="auto 16px" bgRepeat="repeat-x" bgPosition="center"
      >

        <Flex flex={1} align={"center"} >
          <Link as={NextLink} href="/" bg="gray.50" px={4} py={2} border="1px" borderColor="gray.500" borderStyle="solid">
            <Image src="/logo.png" alt="Shailesh Shenoy's Portfolio" h={7} w="auto" />
          </Link>
        </Flex>

        <Flex
          display={{ base: "none", md: "flex" }}
          flex={2} justify="space-between"
        >
          <DesktopNav />
          <ThemeButton />
        </Flex>

        <Flex display={{ base: "flex", md: "none" }}
        >
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

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Flex>
  );
}

const DesktopNav = () => {
  return (
    <Flex justify="center" flex="1">
      <Stack as={List} direction={"row"} spacing={36} align="center" justify="space-evenly" >
        {NAV_ITEMS.map((navItem) => (
          <ListItem key={navItem.label} bg="gray.50" px={4} py={2} border="1px" borderColor="gray.500" borderStyle="solid">
            <Link as={NextLink} href={navItem.link}>
              {navItem.label}
            </Link>
          </ListItem>
        ))}
      </Stack>
    </Flex>
  );
};

const MobileNav = () => {
  return (
    <List bg="transparent" p={4} display={{ md: "none" }} padding={4}>
      {NAV_ITEMS.map((navItem) => (
        <ListItem key={navItem.label} px={4} mt={2}>
          <Link as={NextLink} href={navItem.link}>
            {navItem.label}
          </Link>
        </ListItem>
      ))}
      <ThemeButton />
    </List>
  );
};