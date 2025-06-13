import React from "react";
import {
  Box,
  Heading,
  Container,
  SimpleGrid,
  Text,
  VStack,
  Flex,
  Icon,
  Image,
} from "@chakra-ui/react";
import { FaHammer } from "react-icons/fa";
import { IconType } from "react-icons";

const BenefitsSection: React.FC = () => {
  const statsData = [
    { value: "+10", description: "anos de experiência" },
    { value: "+4.000", description: "clientes atendidos" },
    { value: "+13.000", description: "contratos de locação" },
    { value: "4.9", description: "em avaliações no Google" },
  ];

  const equipmentData = [
    { imageSrc: "images/Home/andaime.png", title: "Andaimes" },
    { imageSrc: "images/Home/betoneira.png", title: "Betoneiras" },
    { imageSrc: "images/Home/rompedor.png", title: "Rompedor elétrico" },
    { imageSrc: "images/Home/escada.png", title: "Escadas" },
    { imageSrc: "images/Home/compactador.png", title: "Compactador de solo" },
    { imageSrc: "images/Home/furadeira.png", title: "Furadeira" },
    { imageSrc: "images/Home/placa-vibratoria.png", title: "Placa vibratória" },
    { imageSrc: "images/Home/lava-jato.png", title: "Lava jato" },
  ];

  return (
    <>
      <Box bg="brand.blue.100" py={8} color="white" textAlign="center">
        <Container maxW="1200px">
          <Heading
            as="h2"
            mt="96px"
            mb="96px"
            fontSize={{ base: "32px", md: "48px", lg: "60px" }}
            fontWeight="bold"
            fontFamily="cofo-kabeltouw-solid-0, sans-serif"
            lineHeight="1.2"
          >
            NOSSOS NÚMEROS NÃO ENGANAM
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={8} mb="96px">
            {/* <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}> */}
            {statsData.map((stat, index) => (
              <VStack key={index} gap={2}>
                {/* <VStack key={index} spacing={2}> */}
                <Text
                  fontSize="6xl"
                  fontWeight="bold"
                  color="brand.yellow.100"
                  fontFamily="cofo-kabeltouw-solid-0, sans-serif"
                >
                  {stat.value}
                </Text>
                <Text fontSize="xl">{stat.description}</Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
      <Box bg="brand.yellow.100" py={1} textAlign="center">
        <Container maxW="1200px">
          <Heading
            as="h2"
            mt="96px"
            // mb="96px"
            fontSize={{ base: "32px", md: "48px", lg: "60px" }}
            fontWeight="bold"
            fontFamily="cofo-kabeltouw-solid-0, sans-serif"
            color="brand.blue.100"
            lineHeight="1.2"
          >
            PRINCIPAIS EQUIPAMENTOS PARA LOCAÇÃO
          </Heading>

          <SimpleGrid
            mt="96px"
            mb="96px"
            justifyItems="center"
            mx="auto"
            columns={{ base: 1, sm: 2, lg: 4 }}
            gap={6}
          >
            {equipmentData.map((item, index) => (
              <Box
                key={index}
                bg="white"
                width={258}
                height={258}
                p={10}
                borderRadius="16px"
                spaceY="8"
              >
                <Flex justifyContent="center" alignItems="center" h="100px">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    boxSize="96px"
                    objectFit="contain"
                  />
                </Flex>
                <Text fontSize="24px" color="brand.blue.100">
                  {item.title}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

export default BenefitsSection;
