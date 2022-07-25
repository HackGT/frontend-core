import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import NotFoundScreen from "./NotFoundScreen";

export default {
  title: "Components/NotFoundScreen",
  component: NotFoundScreen,
} as ComponentMeta<typeof NotFoundScreen>;

const Template: ComponentStory<typeof NotFoundScreen> = (args) => (
  <NotFoundScreen />
);

export const Original = Template.bind({});
