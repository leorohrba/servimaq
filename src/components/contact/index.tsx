import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Flex,
  VStack,
  Link,
  AspectRatio,
} from "@chakra-ui/react";
import Header from "../home/header";
import Footer from "../home/footer";
import { FaWhatsapp } from "react-icons/fa";

const ContactPage: React.FC = () => {
  return (
    <Box>
      <Header />

      {/* Hero Section */}
      <Box bg="brand.lightGray.100" py={12}>
        <Container maxW="container.xl">
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 10, md: 16 }}
            align="center"
            justify="center"
            mb={16}
            mt={16}
          >
            <Box flex="1" maxW={{ base: "100%", md: "50%" }}>
              <Image
                src="/images/Contato/contato.jpg"
                alt="Servimaq Storefront"
                borderRadius="md"
                w="100%"
                objectFit="cover"
                boxSize="500px"
              />
            </Box>
            <VStack
              flex="1"
              maxW={{ base: "100%", md: "50%" }}
              align={{ base: "center", md: "flex-start" }}
              gap={8}
            >
              <Heading
                as="h1"
                fontSize={{ base: "32px", md: "48px", lg: "60px" }}
                color="brand.blue.100"
                fontWeight="bold"
                fontFamily="cofo-kabeltouw-solid-0, sans-serif"
                lineHeight="1.2"
              >
                ALUGUE COM A SERVIMAQ
              </Heading>

              <Text fontSize="24px" maxW="550px">
                Estamos prontos para entender sua necessidade, tirar dúvidas e
                ajudar você a{" "}
                <Text as="span" fontWeight="bold">
                  encontrar os equipamentos ideais para sua obra.
                </Text>
              </Text>

              <Link
                as="a"
                href="https://wa.me/5547984572151"
                target="_blank"
                rel="noopener noreferrer"
                bg="brand.yellow.100"
                color="brand.blue.100"
                px={6}
                py={3}
                borderRadius="md"
                fontWeight="bold"
                _hover={{ bg: "#FFD54F" }}
                display="inline-flex"
                alignItems="center"
              >
                <FaWhatsapp />
                SOLICITAR ORÇAMENTO
              </Link>
            </VStack>
          </Flex>
        </Container>
      </Box>

      {/* Contact Information Section */}
      <Box py={12}>
        <Container maxW="container.xl">
          <Flex
            direction={{ base: "column", md: "row" }}
            alignItems="flex-start"
          >
            {/* Contact */}
            <VStack align="flex-start" alignItems="flex-start" gap={4} flex="1">
              <VStack align="center">
                <Image
                  src="/images/Contato/call_24dp_5F6368.svg"
                  alt="Phone"
                  boxSize="32px"
                />
                <Heading
                  as="h2"
                  fontSize={{ base: "24px", md: "28px" }}
                  color="brand.blue.100"
                  fontFamily="cofo-kabeltouw-solid-0, sans-serif"
                  textAlign="center"
                >
                  CONTATO
                </Heading>
              </VStack>
              <Text fontSize="lg">+55 (47) 98457-2151</Text>
            </VStack>

            {/* Hours */}
            <VStack align="flex-start" alignItems="flex-start" gap={4} flex="1">
              <VStack align="center" alignItems="flex-start">
                <Image
                  src="/images/Contato/schedule_24dp_5F6368.svg"
                  alt="Clock"
                  boxSize="32px"
                />
                <Heading
                  as="h2"
                  fontSize={{ base: "24px", md: "28px" }}
                  color="brand.blue.100"
                  fontFamily="cofo-kabeltouw-solid-0, sans-serif"
                >
                  HORÁRIO
                </Heading>
              </VStack>
              <Box>
                <Text fontSize="lg">Segunda à sexta-feira</Text>
                <Text fontSize="lg">07h30 às 12h</Text>
                <Text fontSize="lg">13h30 às 17h30</Text>
                <Text fontSize="lg" mt={4}>
                  Sábado
                </Text>
                <Text fontSize="lg">07h30 às 11h30</Text>
              </Box>
            </VStack>

            {/* Address */}
            <VStack align="flex-start" alignItems="flex-start" gap={4} flex="1">
              <VStack alignItems="flex-start">
                <Image
                  src="/images/Contato/location_on_24dp_5F6368.svg"
                  alt="Location"
                  boxSize="32px"
                />
                <Heading
                  as="h2"
                  fontSize={{ base: "24px", md: "28px" }}
                  color="brand.blue.100"
                  fontFamily="cofo-kabeltouw-solid-0, sans-serif"
                >
                  ENDEREÇO
                </Heading>
              </VStack>
              <Box>
                <Text fontSize="lg">R. Adolfo da Veiga, 69 -</Text>
                <Text fontSize="lg">Boehmerwald, Joinville - SC,</Text>
                <Text fontSize="lg">89235-000</Text>
              </Box>
            </VStack>
          </Flex>
        </Container>
      </Box>
      {/* Map Section */}
      <Box mb={12}>
          <AspectRatio ratio={16 / 7} w="100%">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.9201762307666!2d-48.829371599999995!3d-26.3614437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb6cfe0aadcad%3A0x93058ce4ebafdf13!2sAluguel%20de%20Andaimes%20-%20Joinville%20e%20Araquari!5e0!3m2!1spt-BR!2sbr!4v1749224220006!5m2!1spt-BR!2sbr"
                width="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </AspectRatio>
      </Box>

      <Footer />
    </Box>
  );
};

export default ContactPage;
