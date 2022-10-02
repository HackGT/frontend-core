import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "./Header";
import HeaderItem from "./HeaderItem";

export default {
  title: "Components/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <ChakraProvider>
    <Header rightItem={<HeaderItem>Sign Out</HeaderItem>}>
      <HeaderItem>Home</HeaderItem>
      <HeaderItem>Profile</HeaderItem>
    </Header>
  </ChakraProvider>
);

export const Original = Template.bind({});
