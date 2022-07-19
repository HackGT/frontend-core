import React, { PropsWithChildren } from "react";
import { Text } from "@chakra-ui/react";

interface Props {
  show?: boolean;
}

const HeaderItem: React.FC<PropsWithChildren<Props>> = (props) => (
  <Text style={{ lineHeight: "48px" }}>{props.children}</Text>
);

export default HeaderItem;
