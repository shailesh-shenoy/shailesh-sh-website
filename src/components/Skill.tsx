import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import { Skill } from './types';


const Skill: React.FC<Skill> = ({ name, imageUrl }) => {
    return (
        <Flex direction="column" align="center" gap={4}>
            <Image src={imageUrl} alt={name} w="auto" h={50} />
            <Heading as="h4" size="md">{name}</Heading>
        </Flex>
    );
};

export default Skill;
