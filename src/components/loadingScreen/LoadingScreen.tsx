import { Center, Spinner } from "@chakra-ui/react";
import React from "react";

const LoadingScreen: React.FC = () => (
  <Center h="calc(100vh)">
    <Spinner size="xl" />
  </Center>
);

export default LoadingScreen;
