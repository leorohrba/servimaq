import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  Image,
  useBreakpointValue,
  IconButton,
  Portal,
  CloseButton,
  Drawer,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "SOBRE", path: "/about" },
    { name: "PRODUTOS", path: "/products" },
    { name: "CONTATO", path: "/contact" },
  ];

  const NavLink = ({ name, path }: { name: string; path: string }) => (
    <Link
      as={RouterLink}
      to={path}
      _hover={{ textDecoration: "none", color: "blue.500" }}
      fontSize={isMobile ? "20px" : "24px"}
      color="brand.blue.100"
      onClick={isMobile ? onClose : undefined}
    >
      {name}
    </Link>
  );

  return (
    <Box as="header" bg="brand.yellow.100" py={4} px={8}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxW="1200px"
        mx="auto"
      >
        <Box>
          <Link as={RouterLink} to="/">
            <Image
              src="/images/Marca/servimaq-logo-blue.png"
              alt="Servimaq Logo"
              maxW={"150px"}
              objectFit="contain"
            />
          </Link>
        </Box>

        {isMobile ? (
          <IconButton
            aria-label="Open menu"
            onClick={onOpen}
            variant="ghost"
            size="lg"
            color="brand.blue.100"
          >
            <FaBars />
          </IconButton>
        ) : (
          <HStack
            gap={20}
            justify="center"
            flexGrow={1}
            justifyContent="center"
          >
            {navLinks.map((link) => (
              <NavLink key={link.path} name={link.name} path={link.path} />
            ))}
          </HStack>
        )}
      </Flex>

      {/* Mobile Drawer */}
      <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Menu</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <VStack gap={6} align="flex-start" py={4}>
                  {navLinks.map((link) => (
                    <NavLink key={link.path} name={link.name} path={link.path} />
                  ))}
                </VStack>
              </Drawer.Body>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" position="absolute" right={3} top={3} />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Box>
  );
};

export default Header;
