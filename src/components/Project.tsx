import {
  Image,
  Card,
  Text,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  Link,
  Avatar,
  AvatarGroup,
  Flex,
  Box,
} from "@chakra-ui/react";
import { Project, projects, allSkills } from "./types";
import NextLink from "next/link";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Project: React.FC<Project> = ({
  name,
  description,
  imageUrl,
  github,
  link,
  pageLink,
  skills,
}) => {
  return (
    <Flex w="100%"
      direction={{ base: "column", md: "row" }}
      border={1} borderColor="gray.900" borderStyle="solid"
    >
      <Image
        minW={"64"}
        flex={1}
        h={"auto"}
        src={imageUrl}
        alt={name}
        borderRight={1} borderBottom={1} borderColor="gray.900" borderStyle="solid"
      />

      <Stack direction="column" p={4} flex={3}>
        <Heading as="h4" size="md" fontFamily="secondary">
          {name}
        </Heading>

        <Text py="2">{description}</Text>
        <Stack direction="column" spacing={3} w="100%" mt="auto">
          <Stack direction="row" spacing={2} align="center">
            {skills?.map(
              (skill) =>
                allSkills[skill] && (
                  <Image
                    w={10}
                    h="auto"
                    key={skill}
                    alt={skill}
                    src={allSkills[skill]?.imageUrl}
                  />
                )
            )}
          </Stack>
          <Link as={NextLink} href={link} target="_blank" variant="">
            Visit {name} <ExternalLinkIcon boxSize={4} />
          </Link>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Project;
