import { Image, Card, Text, Stack, CardBody, Heading, CardFooter, Link, Avatar, AvatarGroup } from "@chakra-ui/react";
import { Project, projects, allSkills } from "./types";
import NextLink from "next/link";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Project: React.FC<Project> = ({ name, description, imageUrl, github, link, pageLink, skills }) => {
    return (
        <Card
            direction={"column"}
            overflow='hidden'
            variant='outline'
        >
            <Image
                objectFit='cover'
                maxW="100%"
                src={imageUrl}
                alt='Caffe Latte'
                bg='gray.100'
            />

            <Stack h="100%">
                <CardBody>
                    <Heading as="h4" size='md'>{name}</Heading>

                    <Text py='2'>
                        {description}
                    </Text>
                </CardBody>

                <CardFooter mt="auto">
                    <Stack direction="column" spacing={3} align="center" w="100%">
                        <Stack direction="row" spacing={2} align="center" >
                            {
                                skills?.map((skill) => (
                                    allSkills[skill] && <Image w={10} h="auto" key={skill} alt={skill} src={allSkills[skill]?.imageUrl} />
                                ))
                            }
                        </Stack>
                        <Link as={NextLink} href={link} target="_blank" variant="">Visit {name} <ExternalLinkIcon boxSize={4} /></Link>
                    </Stack>
                </CardFooter>
            </Stack>
        </Card>
    );
};

export default Project;
