import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ErrorScreen from "./ErrorScreen";

export default {
  title: "Components/Error Screen",
  component: ErrorScreen,
} as ComponentMeta<typeof ErrorScreen>;

const Template: ComponentStory<typeof ErrorScreen> = (args) => (
  <ChakraProvider>
    <ErrorScreen {...args} />
  </ChakraProvider>
);

export const Original = Template.bind({});
