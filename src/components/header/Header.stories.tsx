import React from "react";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";
import NavbarItem from "./NavbarItem";

export default {
  title: "Components/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <ChakraProvider>
      <Router>
        <Header
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        >
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
  )
};

export const Original = Template.bind({});
