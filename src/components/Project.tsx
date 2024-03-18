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
import { useRouter } from "next/navigation";
import { Project, projects, allSkills } from "./types";
import NextLink from "next/link";

const Project: React.FC<Project> = ({
  name,
  description,
  imageUrl,
  github,
  link,
  disabled,
  skills,
}) => {
  const router = useRouter();
  return (
    <Flex w="100%"
      direction={{ base: "column", md: "row" }}
      //@ts-ignore
      border={1} borderColor="gray.900" borderStyle="solid" as={disabled ? "div" : NextLink} href={link} target="_blank"
      _hover={{ transform: "scale(1.02)" }} _focusWithin={{ transform: "scale(1.02)" }} transition="transform 0.2s ease-in-out"
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
        <Heading as="h4" fontSize="2xl" fontFamily="secondary">
          {name}
        </Heading>

        <Text py="2">{description}</Text>
        <Stack direction="column" spacing={3} w="100%" mt="auto">
          <Stack direction="row" spacing={2} align="center">
            {skills?.map(
              (skill) =>
                allSkills[skill] && (
                  <Box as="i" key={skill} className={allSkills[skill]?.iconClass} fontSize={"2xl"} color="secondary.light" />
                )
            )}
            {!disabled && <Image w={10} ml="auto"
              role="link" tabIndex={0} data-href={github} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Github link" bg="white" border={1} borderStyle="solid" borderRadius={8}
              _hover={{ transform: "scale(1.2)" }}
              _focus={{ transform: "scale(1.2)" }}
              transition="transform 0.2s ease-in-out" onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                router.push(github);
              }
              }
            />}
          </Stack>

        </Stack>
      </Stack>
    </Flex>
  );
};

export default Project;
