import React from "react";
import {
  Box,
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

export interface Props {
  children: React.ReactNode[] | React.ReactNode;
}

const Header: React.FC<Props> = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        as="header"
        position="sticky"
        top={0}
        zIndex={100}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height="64px"
        px="30px"
        bg="white"
        boxShadow="0 3px 4px 0 rgba(0, 0, 0, 8%)"
      >
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
          <HStack spacing={10} display={{ base: "none", md: "block" }}>
            {props.children}
          </HStack>
          <HStack spacing={10} display={{ base: "block", md: "none" }}>
            {
              Array.isArray(props.children) ? (
                props.children?.map((child: any) =>
                  child?.props?.show ? child : null
                )
              ) : (
                props.children
              )
            }
          </HStack>
        </Box>
      </Box>
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
            <Box
              display="flex"
              ml="12"
              h="20"
              alignItems="center"
              justifyContent="space-between"
            >
              <HexLabsLogo />
              <CloseButton onClick={onClose} />
            </Box>
          </DrawerHeader>
          <DrawerBody>
            <Stack
              textAlign="center"
              fontSize="18px"
            >
              {props.children}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
