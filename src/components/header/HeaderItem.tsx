import React, { PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";

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
    minHeight="40px"
    paddingX="15px"
    {...otherProps}
  >
    {children}
  </Box>
);

export default HeaderItem;
