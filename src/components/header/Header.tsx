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
  HStack,
  IconButton,
  Stack,
  Link,
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
  rightItem?: React.ReactNode[] | React.ReactNode;
  rightItemMobile?: React.ReactNode[] | React.ReactNode;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <NavbarContainer as="header" justifyContent="space-between">
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          height="100%"
        >
          <Link href="/">
            <a style={{ textDecoration: 'none' }}><HexLabsLogo /></a>
          </Link>
          <HStack
            marginLeft="10px"
            height="100%"
            display={{ base: "none", md: "flex" }}
            spacing={0}
          >
            {props.children}
          </HStack>
        </Box>
        <Box display="flex" alignItems="center" height="100%">
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
            icon={<HamburgerIcon w={5} h={5} />}
            variant="ghost"
            aria-label="Toggle Navigation"
          />
          {props.rightItem && (
            <HStack
              marginLeft="10px"
              height="100%"
              display={{ base: "none", md: "flex" }}
              spacing={0}
            >
              {props.rightItem}
            </HStack>
          )}
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
            <SidebarContainer onClick={onClose}>
              {props.children}
              {props.rightItemMobile && props.rightItemMobile}
            </SidebarContainer>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
