import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

const ContactCta: React.FC = () => {
  return (
    <Box bg="#1E50A0" color="white" textAlign="center">
      <Container maxW="container.lg">
        <VStack gap={6}>
          <Box maxW="1000px" mx="auto">
            <Heading
              as="h2"
              mt={{ base: "80px", md: "80px", lg: "96px" }}
              mb={{ base: "10px", md: "20px", lg: "24px" }}
              fontSize={{ base: "32px", md: "48px", lg: "60px" }}
              fontFamily="cofo-kabeltouw-solid-0, sans-serif"
              fontWeight="bold"
              lineHeight="1.2"
              textTransform="uppercase"
            >
              QUER ALUGAR UM EQUIPAMENTO PARA A SUA OBRA?
            </Heading>

            <Text fontSize="24px">
              Estamos prontos para te atender com agilidade, qualidade e os{" "}
              <Text as="span" fontWeight="bold">
                melhores equipamentos para o seu projeto.
              </Text>
            </Text>

            <a
              href="https://wa.me/5547984572151"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button
                as="a"
                href="https://wa.me/5547984572151"
                mt={{ base: "20px", md: "40px", lg: "48px" }}
                mb={{ base: "80px", md: "80px", lg: "96px" }}
                bg="#FFC107"
                color="brand.blue.100"
                size="lg"
                px={8}
                _hover={{ bg: "#FFD54F" }}
                borderRadius="md"
                // mt={4}
              >
                <FaWhatsapp style={{ marginRight: "8px" }} />
                SOLICITAR ORÇAMENTO
              </Button>
            </a>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default ContactCta;
