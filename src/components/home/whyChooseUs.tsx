import React from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  VStack,
  Text,
  Icon,
  Image,
} from "@chakra-ui/react";
import { FaTools, FaHeadset, FaTag, FaTruck } from "react-icons/fa";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ConstructionIcon: React.FC = () => (
  <Image
    src="/images/Home/construction.svg"
    alt="Construction Icon"
    boxSize="5.5rem"
  />
);
const HeadsetIcon: React.FC = () => (
  <Image
    src="/images/Home/headset.svg"
    alt="Construction Icon"
    boxSize="5.5rem"
  />
);
const TagIcon: React.FC = () => (
  <Image src="/images/Home/tag.svg" alt="Construction Icon" boxSize="5.5rem" />
);
const TruckIcon: React.FC = () => (
  <Image
    src="/images/Home/truck.svg"
    alt="Construction Icon"
    boxSize="5.5rem"
  />
);

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <VStack gap={4} align="center" textAlign="center">
      {icon}
      <Text fontWeight="bold" fontSize="24px" color="brand.blue.100">
        {title}
        <Text color="brand.blue.100" fontWeight="normal" fontSize="24px">
          {description}
        </Text>
      </Text>
    </VStack>
  );
};

const WhyChooseUs: React.FC = () => {
  return (
    <Box bg="white">
      <Container maxW="container.xl">
        <Heading
          as="h2"
          textAlign="center"
          //   mb={12}
          mt={{ base: "80px", md: "80px", lg: "96px" }}
          mb={{ base: "80px", md: "80px", lg: "100px" }}
          fontSize={{ base: "32px", md: "48px", lg: "60px" }}
          color="#1E50A0"
          fontFamily="cofo-kabeltouw-solid-0, sans-serif"
          textTransform="uppercase"
          lineHeight="1.2"
        >
          POR QUE ALUGAR COM A SERVIMAQ?
        </Heading>

        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 4 }}
          gap={10}
          mt={{ base: "80px", md: "80px", lg: "96px" }}
          mb={{ base: "80px", md: "80px", lg: "96px" }}
        >
          <VStack gap={4} align="center" textAlign="center">
            <ConstructionIcon />
            <Text fontWeight="normal" fontSize="24px" color="brand.blue.100">
              Equipamentos de
              <Text color="brand.blue.100" fontWeight="bold" fontSize="24px">
                marcas confiáveis
              </Text>
            </Text>
          </VStack>
          <VStack gap={4} align="center" textAlign="center">
            <HeadsetIcon />
            <Text fontWeight="bold" fontSize="24px" color="brand.blue.100">
              Suporte técnico
              <Text color="brand.blue.100" fontWeight="normal" fontSize="24px">
                durante a locação
              </Text>
            </Text>
          </VStack>
          <VStack gap={4} align="center" textAlign="center">
            <TagIcon />
            <Text fontWeight="bold" fontSize="24px" color="brand.blue.100">
              Preços justos
              <Text color="brand.blue.100" fontWeight="normal" fontSize="24px">
                e competitivos
              </Text>
            </Text>
          </VStack>
          <VStack gap={4} align="center" textAlign="center">
            <TruckIcon />
            <Text fontWeight="bold" fontSize="24px" color="brand.blue.100">
              Entrega rápida
              <Text color="brand.blue.100" fontWeight="normal" fontSize="24px">
                em Joinville e região
              </Text>
            </Text>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
