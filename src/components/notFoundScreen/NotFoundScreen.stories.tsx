import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import NotFoundScreen from "./NotFoundScreen";

export default {
  title: "Components/Helper Screens/Not Found Screen",
  component: NotFoundScreen,
} as ComponentMeta<typeof NotFoundScreen>;

const Template: ComponentStory<typeof NotFoundScreen> = (args) => (
  <ChakraProvider>
    <NotFoundScreen />
  </ChakraProvider>
);

export const Original = Template.bind({});
