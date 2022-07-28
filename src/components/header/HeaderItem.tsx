import React, { PropsWithChildren } from "react";
import { Text } from "@chakra-ui/react";

interface HeaderItemProps {
  show?: boolean;
}

const HeaderItem: React.FC<PropsWithChildren<HeaderItemProps>> = (props) => (
  <Text style={{ lineHeight: "48px" }}>{props.children}</Text>
);

export default HeaderItem;
