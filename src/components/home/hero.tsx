import React from "react";
import { Box, Button, Container, Heading, Text, Flex } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <Box
      bg="brand.lightGray.100"
      bgImage="url('/images/Home/home.jpg')"
      backgroundPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      py={20}
      // px={8}
      position="relative"
      width="100%"
      height="100%"
    >
      <Container
        my={{ base: "auto", md: "auto", lg: "96px" }}
        mx={{ base: "auto", md: "auto", lg: "128px" }}
      >
        <Flex>
          <Box
            maxW="600px"
            // mx={0}
            // p={8}
          >
            <Heading
              as="h1"
              fontSize={{ base: "32px", md: "48px", lg: "60px" }}
              color="brand.blue.100"
              fontWeight="bold"
              fontFamily="cofo-kabeltouw-solid-0, sans-serif"
              lineHeight="1.2"
              mb={{ base: "20px", md: "20px", lg: "24px" }}
            >
              PRECISANDO DE <br />
              EQUIPAMENTOS PARA <br />
              SUA OBRA?
            </Heading>

            <Box maxW={"550px"}>
              <Text
                fontWeight="light"
                fontSize={{ base: "20px", md: "22px", lg: "24px" }}
                mb={{ base: "20px", md: "20px", lg: "48px" }}
                // whiteSpace="nowrap"
              >
                Alugue com quem{" "}
                <Text as="span" fontWeight="bold">
                  entende do assunto
                </Text>{" "}
                e entrega com
                <Text as="span" color="brand.blue.100" fontWeight="bold">
                  {" "}
                  agilidade e confiança.
                </Text>
              </Text>
            </Box>

            <Button
              as="a"
              href="https://wa.me/5547984572151"
              bg="brand.yellow.100"
              color="brand.blue.100"
              size="lg"
              borderRadius="md"
              _hover={{ bg: "#FFD54F" }}
              px={6}
            >
              <FaWhatsapp />
              SOLICITAR ORÇAMENTO
            </Button>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
