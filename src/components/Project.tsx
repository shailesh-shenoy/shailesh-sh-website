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
    <Flex
      maxW={"4xl"}
      direction={"row"}
      bg="gray.100"
      _after={{
        content: "url(/icons/chain_vertical.svg)",
        w: "100%",
        h: "128px",
      }}
    >
      <Image
        w={"64"}
        h={"auto"}
        src={imageUrl}
        alt="Caffe Latte"
        bg="gray.100"
      />

      <Stack direction="column" p={4} flex={1}>
        <Heading as="h4" size="md">
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
