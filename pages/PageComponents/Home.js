import React, { useState } from "react";
import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import NextLink from "next/link";
import styled from "@emotion/styled";
import ModeSwitch from "./Switch";

const [input, setInput] = useState("");
const handleInputChange = (e) => setInput(e.target.value);
const isError = input === "";

const Container = ({ children }) => {
  return (
    <>
      <FormControl isInvalid={isError}>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={input} onChange={handleInputChange} />
        {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
    </>
  );
};

export default Container;
