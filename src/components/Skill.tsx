import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import { SkillInfo } from './types';


const Skill: React.FC<SkillInfo> = ({ name, iconClass }) => {
    return (
        <Flex direction="column" align="center" gap={4} color="#f5f5f5" _odd={{ color: "#b355fd" }}>
            <Box as="i" className={iconClass} fontSize="5xl" />
            <Heading as="h4" fontWeight="400" size="md" color="#8f8f8f">{name}</Heading>
        </Flex>
    );
};

export default Skill;
