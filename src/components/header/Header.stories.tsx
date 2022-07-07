import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import NavbarItem from "./NavbarItem";

export default {
  title: "Components/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <Router>
    <Header>
      <NavbarItem
        routeName="login"
        routeLink="/login"
        show
      />
      <NavbarItem
        routeName="home"
        routeLink="/"
      />
    </Header>
    <Routes>
      <Route
        path="/login"
      />
    </Routes>
  </Router>
);

export const Original = Template.bind({});
