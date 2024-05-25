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
import { ProjectData, projects, allSkills } from "./types";
import NextLink from "next/link";

const Project: React.FC<ProjectData> = ({
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
      filter="grayscale(0.9)"
      //@ts-ignore
      border={1} borderColor="gray.700" borderStyle="solid" as={disabled ? "div" : NextLink} href={link} target="_blank"
      _hover={{ transform: "scale(1.01)", filter: "grayscale(0.2)" }} transition="transform 0.2s ease-in-out"
    >
      <Image
        minW={"64"}
        flex={1}
        h={"auto"}
        src={imageUrl}
        alt={name}
        borderRight={1} borderColor="gray.700" borderStyle="solid"
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
                  <Box as="i" key={skill} className={allSkills[skill]?.iconClass} fontSize={"2xl"} color="#b355fd" />
                )
            )}
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Project;
