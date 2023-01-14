import React, { useState } from "react";
import {
  Text,
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  useColorMode,
  FormHelperText,
} from "@chakra-ui/react";

const Container = ({ children }) => {
  return (
    <>
      <Box
        h="calc(100vh)"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundImage="https://images.unsplash.com/photo-1626544827763-d516dce335e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGFic3RyYWN0JTIwc2hhcGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
      >
        <Flex
          width="full"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box mt={100} textAlign="center" width="auto">
            <Text fontSize={16}>
              Grow from Junior to Advanced Software Engineer
            </Text>
            <Text bg="teal.100" fontSize={18}>
              Join 10k+ growth focused software engineers and receive exclusive,
              actionable steps that will propel your career to world class
              level.
            </Text>
            <Heading fontWeight={700} fontSize={48}>
              Join my Newsletter
            </Heading>
          </Box>
          <Box
            mt={500}
            width={500}
            border="1px"
            borderColor="gray.400"
            my={4}
            textAlign="left"
            bg="gray.100"
            paddingTop={50}
            paddingLeft={30}
            paddingRight={30}
            paddingBottom={50}
            borderRadius={6}
          >
            <form>
              <FormControl>
                <FormLabel fontWeight={500} mb="10px">
                  Email address
                </FormLabel>
                <Input
                  type="email"
                  variant="unstyled"
                  borderRadius={4}
                  border="1px"
                  borderColor="gray.500"
                  padding="10px"
                  fontSize="14"
                />
                <FormHelperText
                  fontSize={12}
                  letterSpacing="0.3px"
                  fontStyle="italic"
                >
                  Your Email is Safe
                </FormHelperText>
              </FormControl>
              <Button
                width="100%"
                borderRadius={2}
                padding="10px"
                bg="teal.300"
                mt={25}
                type="submit"
                variant="unstyled"
              >
                Submit
              </Button>
            </form>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Container;
