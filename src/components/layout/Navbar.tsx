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
      flexWrap={"wrap"}
      width="100%"
      p={2}
      justify="center"
      bg="#0D0D0D"
      color={"gray.50"}
      backdropFilter="saturate(180%) blur(10px)"
    >
      <Flex
        as="nav"
        w="100%"
        maxW="7xl"
        h={16}
        py={4}
        align={"center"}
        bgImage={{ md: "/icons/chain_white.png" }} bgSize="auto 16px" bgRepeat="repeat-x" bgPosition="center"
      >

        <Flex flex={1} align={"center"} >
          <Link as={NextLink} href="/" bg="#0D0D0D" px={4} py={2} border="1px" borderColor="gray.500" borderStyle="solid">
            <Image src="/logo.png" alt="Shailesh Shenoy's Portfolio" h={7} w="auto" />
          </Link>
        </Flex>


        <DesktopNav />


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
      <Box h={0} flexBasis={"100%"} />
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Flex>
  );
}

const DesktopNav = () => {
  return (
    <Stack flex={1} as={List} direction={"row"} align="center" justify="space-between" display={{ base: "none", md: "flex" }}>
      {NAV_ITEMS.map((navItem) => (
        <ListItem key={navItem.label} bg="#0D0D0D" px={4} py={2} border="1px" borderColor="gray.500" borderStyle="solid">
          <Link as={NextLink} href={navItem.link}>
            {navItem.label}
          </Link>
        </ListItem>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Flex as={List} bg="transparent" p={8} display={{ md: "none" }} direction="column">
      {NAV_ITEMS.map((navItem, i, all) => (
        <Flex as={ListItem} key={navItem.label} direction="column" align="center">
          <Link as={NextLink} href={navItem.link} px={4} py={2} border="1px" borderColor="gray.500" borderStyle="solid">
            {navItem.label}
          </Link>
          {(i < all.length - 1) && <Image src="/icons/chain_vertical_alt_white.png" alt="Connecting chain" h="12" w="auto" aria-hidden />}
        </Flex>
      ))}
    </Flex>
  );
};