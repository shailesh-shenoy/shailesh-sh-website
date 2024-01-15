import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, Flex, IconButton, Switch } from "@chakra-ui/react";

export default function ThemeButton() {
    return (
        <Flex align="center" gap={2} px={4} py={2} my={4} bg="gray.50" border="1px" borderStyle="solid" borderColor="gray.500">
            <MoonIcon />
            <Switch colorScheme="blue" />
            <SunIcon />
        </Flex>
    );
};

