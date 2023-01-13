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
          my={4}
          textAlign="left"
          bg="teal.100"
          paddingTop={50}
          paddingLeft={30}
          paddingRight={30}
          paddingBottom={50}
        >
          <form>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <Button width="full" mt={4} type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default Container;
