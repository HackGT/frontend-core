import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LoadingScreen from "./LoadingScreen";

export default {
  title: "Components/Loading Screen",
  component: LoadingScreen,
} as ComponentMeta<typeof LoadingScreen>;

const Template: ComponentStory<typeof LoadingScreen> = (args) => (
  <ChakraProvider>
    <LoadingScreen />
  </ChakraProvider>
);

export const Original = Template.bind({});
