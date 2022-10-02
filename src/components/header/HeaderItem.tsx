import React, { PropsWithChildren } from "react";
import { Box, Text } from "@chakra-ui/react";

interface HeaderItemProps extends React.ComponentProps<"div"> {}

const HeaderItem: React.FC<PropsWithChildren<HeaderItemProps>> = ({
  children,
  ...otherProps
}) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    height="100%"
    paddingX="15px"
    {...otherProps}
  >
    <Text lineHeight="48px">{children}</Text>
  </Box>
);

export default HeaderItem;
