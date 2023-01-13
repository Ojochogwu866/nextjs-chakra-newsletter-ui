import React, { useState } from "react";
import {
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
import NextLink from "next/link";
import styled from "@emotion/styled";
import ModeSwitch from "./Switch";

const Container = ({ children }) => {
  return (
    <>
      <ModeSwitch />
      <Flex
        width="full"
        flex
        flexDirection="column"
        align="center"
        justifyContent="center"
      >
        <Box textAlign="center" width="auto">
          <Heading fontWeight={700} fontSize={48}>
            Join my Newsletter
          </Heading>
        </Box>
        <Box
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
                h={40}
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
            <Button width="full" mt={12} type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default Container;
