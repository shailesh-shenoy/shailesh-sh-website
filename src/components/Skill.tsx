import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import { Skill } from './types';


const Skill: React.FC<Skill> = ({ name, iconClass }) => {
    return (
        <Flex direction="column" align="center" gap={4} color="tertiary.light" _odd={{ color: "secondary.light" }}>
            <Box as="i" className={iconClass} fontSize="5xl" />
            <Heading as="h4" size="md" color="gray.50">{name}</Heading>
        </Flex>
    );
};

export default Skill;
