import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Loading from "./Loading";

export default {
  title: "Components/Loading",
  component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => (
  <Loading/>
);

export const Original = Template.bind({});
