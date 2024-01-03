import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, Flex, IconButton, Switch } from "@chakra-ui/react";

export default function ThemeButton() {
    return (
        <Flex align="center" gap={2} px={4} my={4}>
            <MoonIcon />
            <Switch colorScheme="blue" />
            <SunIcon />
        </Flex>
    );
};

