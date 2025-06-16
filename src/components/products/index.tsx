import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import Header from "../home/header";
import Footer from "../home/footer";
import ContactCta from "../home/contactCta";

interface ProductProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  row: boolean;
}

const products: ProductProps[] = [
  {
    id: "betoneira",
    title: "BETONEIRAS 250L E 400L",
    description:
      "Mistura rápida e homogênea de concreto para obras de todos os portes. Modelos robustos e fáceis de operar.",
    imageSrc: "/images/Produtos/betoneira.jpeg",
    row: false,
  },
  {
    id: "placa-vibratoria",
    title: "PLACA VIBRATÓRIA",
    description:
      "Equipamento ideal para compactação de solo, calçadas e pavers. Potente, prática e eficiente.",
    imageSrc: "/images/Produtos/placa_vibratoria.jpg",
    row: true,
  },
  {
    id: "cortador-piso",
    title: "CORTADORA DE PISO",
    description:
      "Perfeita para cortes em concreto e asfalto. Alta precisão para reformas e aberturas em pisos.",
    imageSrc: "/images/Produtos/cortador_de_piso.jpg",
    row: false,
  },
  {
    id: "furadeira-impacto",
    title: "FURADEIRA DE IMPACTO",
    description:
      "Indicada para perfurações em superfícies mais duras como concreto, tijolos e paredes.",
    imageSrc: "/images/Produtos/furadeira-impacto.jpg",
    row: true,
  },
  {
    id: "serra-marmore",
    title: "SERRA MÁRMORE",
    description:
      "Versátil e precisa, ideal para cortes de cerâmica, porcelanato e pedras ornamentais.",
    imageSrc: "/images/Produtos/serra-marmore.jpg",
    row: false,
  },
  {
    id: "esmerilhadeira",
    title: "ESMERILHADEIRA",
    description:
      "Utilizada para cortes, desbates e acabamentos em metal, concreto e alvenaria.",
    imageSrc: "/images/Produtos/esmerilhadeira.jpg",
    row: true,
  },
  {
    id: "serra-madeira",
    title: "SERRA DE MADEIRA",
    description:
      "Indicada para cortes retos e rápidos em madeiras de diferentes espessuras.",
    imageSrc: "/images/Produtos/serra-madeira.jpg",
    row: false,
  },
  {
    id: "escadas",
    title: "ESCADAS",
    description: "Diversos tamanhos para acesso seguro em trabalhos em altura.",
    imageSrc: "/images/Produtos/escadas.png",
    row: true,
  },
  {
    id: "rompedores",
    title: "ROMPEDORES",
    description:
      "Alta potência para demolições e quebra de concreto, ideal para reformas pesadas.",
    imageSrc: "/images/Produtos/rompedores.jpg",
    row: false,
  },
  {
    id: "compactador-solo",
    title: "COMPACTADOR DE SOLO",
    description:
      "Ideal para compactar solos em valas, fundações e áreas de difícil acesso. Alta performance em compactação profunda.",
    imageSrc: "/images/Produtos/compactador-solo.jpg",
    row: true,
  },
  {
    id: "andaimes",
    title: "ANDAIMES TUBULARES",
    description:
      "Estabilidade e segurança para obras em altura. Fáceis de montar e transportar.",
    imageSrc: "/images/Produtos/andaimes.jpg",
    row: false,
  },
  {
    id: "bomba-agua",
    title: "BOMBA DE ÁGUA",
    description:
      "Solução prática para remoção ou transferência de água em obras e terrenos alagados.",
    imageSrc: "/images/Produtos/bomba-agua.jpg",
    row: true,
  },
  {
    id: "vibrador-concreto",
    title: "VIBRADOR DE CONCRETO",
    description:
      "Garante a compactação interna do concreto, evitando falhas e aumentando a resistência da estrutura.",
    imageSrc: "/images/Produtos/vibrador-concreto.jpg",
    row: false,
  },
  {
    id: "lava-jato",
    title: "LAVA JATO",
    description:
      "Lavadora de alta pressão para limpeza pesada de obras, fachadas, veículos e calçadas.",
    imageSrc: "/images/Produtos/lava-jato.jpg",
    row: true,
  },
];

const ProductItem: React.FC<ProductProps> = ({
  title,
  description,
  imageSrc,
  row,
}) => {
  return (
    <Flex
      direction={{
        base: "column",
        md: row === false ? "row-reverse" : "row",
      }}
      align="center"
      justify="space-between"
      bg="white"
      p={{ base: 4, md: 0 }}
      borderRadius="md"
      mb={10}
      overflow="hidden"
    >
      <Box
        p={{ base: 4, md: 8 }}
        width={{ base: "full", md: "50%" }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Heading
          as="h2"
          fontSize={{ base: "24px", md: "32px", lg: "36px" }}
          color="brand.blue.100"
          fontFamily="cofo-kabeltouw-solid-0, sans-serif"
          mb={4}
        >
          {title}
        </Heading>
        <Text fontSize={"24px"} color="gray.700">
          {description}
        </Text>
      </Box>
      <Box
        width={{ base: "full", md: "50%" }}
        height={{ base: "250px", md: "300px" }}
        overflow="hidden"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={imageSrc}
          alt={title}
          objectFit="contain"
          maxH="100%"
          maxW="100%"
          p={4}
        />
      </Box>
    </Flex>
  );
};

const ProductsPage: React.FC = () => {
  return (
    <Box>
      <Header />

      {/* Hero Section */}
      <Box bg="brand.lightGray.100" py={12}>
        <Container maxW="container.xl">
          <Heading
            as="h1"
            fontSize={{ base: "32px", md: "48px", lg: "60px" }}
            color="brand.blue.100"
            fontFamily="cofo-kabeltouw-solid-0, sans-serif"
            textAlign="center"
            mb={"24px"}
            mt={"96px"}
            maxW="1200px"
            mx={"auto"}
            lineHeight={1.2}
          >
            OS MELHORES EQUIPAMENTOS PARA SUA CONSTRUÇÃO
          </Heading>
          <Text
            fontSize={"24px"}
            textAlign="center"
            maxW="800px"
            mx="auto"
            mb={12}
            p={2}
          >
            Encontre aqui tudo o que você precisa para cada etapa da sua obra.
          </Text>
        </Container>
      </Box>

      {/* Products List */}
      <Box py={12}>
        <Container maxW="container.xl">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              imageSrc={product.imageSrc}
              row={product.row}
            />
          ))}
        </Container>
      </Box>

      <ContactCta />
      <Footer />
    </Box>
  );
};

export default ProductsPage;
