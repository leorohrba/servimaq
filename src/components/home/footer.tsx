import React from "react";
import {
  Box,
  Container,
  Flex,
  Text,
  Link,
  Icon,
  HStack,
  VStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box bg="#1E1E1E" color="white" py={8}>
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "center", md: "flex-start" }}
          mb={8}
          gap={8}
        >
          {/* Logo and Site Map Section */}
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 6, md: 12 }}
            align={{ base: "center", md: "flex-start" }}
          >
            {/* Logo Section */}
            <VStack align={{ base: "center", md: "flex-start" }} gap={4}>
              <Image
                src="/images/Marca/servimaq-logo-yellow-2.png"
                alt="Servimaq Logo"
                maxW="200px"
                objectFit="contain"
              />
              <Link
                href="https://www.instagram.com/servimaq_locacoes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/Home/logo-insta.svg"
                  alt="Instagram"
                  boxSize="2rem"
                />
              </Link>
            </VStack>

            {/* Site Map */}
            <VStack align={{ base: "center", md: "flex-start" }} ml={{base: 0, md: 6}} gap={3}>
              <Heading fontSize="md" mb={2}>
                MAPA DO SITE
              </Heading>
              <Link
                as={RouterLink}
                to="/"
                color="white"
                href="/"
                _hover={{ bg: "#FCB720" }}
              >
                Home
              </Link>
              <Link
                as={RouterLink}
                to="/about"
                color="white"
                href="/about"
                _hover={{ bg: "#FCB720" }}
              >
                Sobre
              </Link>
              <Link
                as={RouterLink}
                to="/products"
                color="white"
                href="/produtos"
                _hover={{ bg: "#FCB720" }}
              >
                Produtos
              </Link>
              <Link
                as={RouterLink}
                to="/contact"
                color="white"
                href="/contato"
                _hover={{ bg: "#FCB720" }}
              >
                Contato
              </Link>
            </VStack>
          </Flex>

          {/* Contact */}
          <VStack align={{ base: "center", md: "flex-start" }} gap={3}>
            <Heading fontSize="md" mb={2}>
              CONTATO
            </Heading>
            <HStack>
              <Icon as={FaWhatsapp as React.ElementType} color="#FFC107" />
              <Text color="white">+55 (47) 98457-2151</Text>
            </HStack>
            <HStack align="flex-start">
              <Icon
                as={FaMapMarkerAlt as React.ElementType}
                color="#FFC107"
                mt={1}
              />
              <Text>
                R. Adolfo da Veiga, 69 - Boehmerwald, Joinville - SC, 89235-000
              </Text>
            </HStack>
          </VStack>
        </Flex>

        {/* Copyright */}
        <Box
          pt={6}
          borderTopWidth={1}
          borderColor="gray.700"
          textAlign="center"
        >
          <Text fontSize="sm">
            © {currentYear} ServiMaq • Todos os direitos reservados
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
