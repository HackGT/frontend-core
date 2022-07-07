import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";
import NavbarItem from "./NavbarItem";
import { ChakraProvider } from "@chakra-ui/react";

export default {
  title: "Components/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <ChakraProvider>
    <Router>
      <Header>
        <NavbarItem
          routeName="Home"
          routeLink="/"
        />
        <NavbarItem
          routeName="Login"
          routeLink="/login"
          show
        />
      </Header>
    </Router>
  </ChakraProvider>
);

export const Original = Template.bind({});
