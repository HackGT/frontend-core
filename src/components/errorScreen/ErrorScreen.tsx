import * as React from "react";
import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";

export interface ErrorScreenProps {
  error: Error | undefined;
}

const ErrorScreen: React.FC<ErrorScreenProps> = (props) => {
  return (
    <Box p="5" borderWidth="1px">
      <Center>
        <Flex align="baseline" mt={5}>
          <WarningIcon w={375} h={175} />
        </Flex>
      </Center>
      <Box>
        <Center>
          <Text
            mt={2}
            fontSize="4xl"
            fontWeight="semibold"
            lineHeight="short"
            noOfLines={2}
          >
            Hmm, an error has occurred...
          </Text>
        </Center>
        <Center>
          <Text mt={2} fontSize="1xl" fontWeight="semibold" lineHeight="short">
            {props.error?.message}
          </Text>
        </Center>
      </Box>
      <Center>
        <Text mt={2}>
          We are currently looking into the issue. For now, you can navigate
          back to our home screen.
        </Text>
      </Center>
      <Center>
        <Flex mt="35px" align="center">
          <Button
            colorScheme="blue"
            onClick={() => (window.location.href = "/")}
          >
            Go Home
          </Button>
        </Flex>
      </Center>
    </Box>
  );
};
export default ErrorScreen;
