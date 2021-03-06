import React from "react";
import {
  Box,
  chakra,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  HStack,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import HexLabsLogo from "./HexLabsLogo";

const NavbarContainer = chakra(Box, {
  baseStyle: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "64px",
    px: "30px",
    bg: "white",
    boxShadow: "0 3px 4px 0 rgba(0, 0, 0, 8%)",
  },
});

const SidebarContainer = chakra(Stack, {
  baseStyle: {
    textAlign: "center",
    fontSize: "18px",
  },
});

export interface HeaderProps {
  children: React.ReactNode[] | React.ReactNode;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <NavbarContainer as="header">
        <IconButton
          ml={-5}
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          icon={<HamburgerIcon w={5} h={5} />}
          variant="ghost"
          aria-label="Toggle Navigation"
        />
        <HexLabsLogo />
        <Box>
          <HStack spacing={10} display={{ base: "none", md: "flex" }}>
            {props.children}
          </HStack>
          <HStack spacing={10} display={{ base: "flex", md: "none" }}>
            {Array.isArray(props.children)
              ? props.children?.map((child: any) =>
                  child?.props?.show ? child : null
                )
              : props.children}
          </HStack>
        </Box>
      </NavbarContainer>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        autoFocus={false}
        returnFocusOnClose={false}
        closeOnOverlayClick
        closeOnEsc
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <CloseButton w={10} h={10} onClick={onClose} />
          </DrawerHeader>
          <DrawerBody>
            <SidebarContainer>{props.children}</SidebarContainer>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
