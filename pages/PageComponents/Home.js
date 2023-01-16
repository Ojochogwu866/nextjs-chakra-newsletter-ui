import React from "react";
import {
  Box,
  Flex,
  Select,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  useBreakpointValue,
  Icon,
} from "@chakra-ui/react";
import ModeSwitch from "./Switch";
export default function JoinOurTeam() {
  return (
    <Box position={"relative"}>
      <ModeSwitch />
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading lineHeight={1.2} size="3xl">
            Level up your Income <br /> Get the best ideas from my weekly
            newsletter
          </Heading>
        </Stack>
        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              SignUp for my NewsLetter
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              Join 1000+ developers in recieving weekly newsletters to hlep you
              make huge extra income as a developer.
            </Text>
          </Stack>
          <Box as={"form"} mt={10}>
            <Stack spacing={4}>
              <Input
                placeholder="Firstname"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                placeholder="hello@ojochogwu.xyz"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Select
                placeholder="Select Stack"
                bg={"gray.100"}
                border={0}
                size="sm"
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              >
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="fullstack">FullStack Developer</option>
                <option value="design">Ui/Ux Designer</option>
                <option value="datascience">Data Science Engineer</option>
                <option value="Iot">Internet of Things</option>
              </Select>
            </Stack>
            <Button
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, red.400,pink.400)",
                boxShadow: "xl",
              }}
            >
              Submit
            </Button>
          </Box>
          form
        </Stack>
      </Container>
    </Box>
  );
}
