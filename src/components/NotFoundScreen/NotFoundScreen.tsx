import * as React from "react";
import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";

const NotFoundScreen: React.FC = () => {
  return (
    <Box p="5" borderWidth="1px">
      <Center>
        <Flex align="baseline" mt={5}>
          <QuestionIcon w={375} h={175} />
        </Flex>
      </Center>
      <Center>
        <Text
          mt={2}
          fontSize="4xl"
          fontWeight="semibold"
          lineHeight="short"
          noOfLines={2}
        >
          Hmm, Something is Not Right here...
        </Text>
      </Center>
      <Center>
        <Text mt={2}>
          We'll find a CS Major to fix this. For now, we'll get you on the right
          track.
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

export default NotFoundScreen;
