import React, { PropsWithChildren } from "react";
import { Text } from "@chakra-ui/react";

interface HeaderItemProps extends React.ComponentProps<"p"> {
  show?: boolean;
}

const HeaderItem: React.FC<PropsWithChildren<HeaderItemProps>> = ({
  show,
  children,
  ...otherProps
}) => (
  <Text lineHeight="48px" {...otherProps}>
    {children}
  </Text>
);

export default HeaderItem;
