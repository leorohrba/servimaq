import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import Header from "../home/header";
import Footer from "../home/footer";
import ContactCta from "../home/contactCta";

const AboutPage: React.FC = () => {
  const brandLogos = [
    { src: "/images/Sobre/bosch.png", alt: "Bosch" },
    { src: "/images/Sobre/makita.png", alt: "Makita" },
    { src: "/images/Sobre/csm.png", alt: "CSM" },
    {
      src: "/images/Sobre/menegotti-construcao.png",
      alt: "Menegotti Construção",
    },
    { src: "/images/Sobre/kaercher.svg", alt: "Kaercher" },
    { src: "/images/Sobre/fortequip.png", alt: "Fortequip" },
    { src: "/images/Sobre/analoc-sul.png", alt: "Analoc Sul" },
    { src: "/images/Sobre/spet.svg", alt: "Spet" },
    { src: "/images/Sobre/wbertolo.png", alt: "W Bertolo" },
    { src: "/images/Sobre/buffalo.png", alt: "Buffalo" },
    { src: "/images/Sobre/w3-sat.png", alt: "W3 Sat" },
    { src: "/images/Sobre/promaq.jpg", alt: "Promaq" },
  ];

  return (
    <Box>
      <Header />

      {/* Hero Section */}
      <Box bg="brand.lightGray.100" py={{base: 2, lg: 12}}>
        <Container maxW="container.xl">
          <Flex
            m={{base: "12px", lg: "96px"}}
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 6, lg: 12 }}
            align="center"
          >
            <Box flex="1">
              <Image
                src="/images/Sobre/sobre.jpg"
                alt="Servimaq Office"
                borderRadius="md"
                boxSize="500px"
                objectFit="cover"
              />
            </Box>
            <Box flex="1">
              <Heading
                as="h1"
                fontSize={{ base: "32px", md: "48px", lg: "60px" }}
                color="brand.blue.100"
                fontWeight="bold"
                fontFamily="cofo-kabeltouw-solid-0, sans-serif"
                lineHeight="1.2"
              >
                SEU PARCEIRO DE CONFIANÇA EM OBRAS HÁ MAIS DE 10 ANOS
              </Heading>

              <Text fontWeight={"light"} fontSize="24px" mb={4}>
                A ServiMaq atua há{" "}
                <Text as="span" fontWeight="bold">
                  mais de 10 anos
                </Text>{" "}
                oferecendo soluções práticas e ágeis em locação de equipamentos
                para construção civil em
                <Text as="span" fontWeight="bold">
                  {" "}
                  Joinville e região
                </Text>
                .
              </Text>

              <Text fontSize="24px">
                Com atendimento de excelência e equipamentos de marcas
                confiáveis, já realizamos mais de
                <Text as="span" fontWeight="bold">
                  {" "}
                  13.000 contratos de locação
                </Text>{" "}
                com mais de
                <Text as="span" color="brand.blue.100" fontWeight="bold">
                  {" "}
                  4.000 clientes satisfeitos
                </Text>
                .
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Mission, Vision, Values Section */}
      <Box bg="brand.yellow.100" py={12}>
        <Container maxW="container.xl" textAlign="center">
          <Heading
            as="h2"
            fontSize={{ base: "32px", md: "48px", lg: "60px" }}
            color="brand.blue.100"
            fontWeight="bold"
            fontFamily="cofo-kabeltouw-solid-0, sans-serif"
            lineHeight="1.2"
            mt={"96px"}
            mb={"96px"}
          >
            O NOSSO COMPROMETIMENTO É COM VOCÊ
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={10} mb="96px"
            justifyItems="center"
            mx="auto">
            <Box
              bg="white"
              p={8}
              borderRadius="xl"
              height="447px"
              width="339px"
            >
              <Image
                src="/images/Sobre/emoji_events_24dp_5F6368.svg"
                alt="Troféu"
                height="66px"
                mx="auto"
                mb={4}
              />
              <Heading
                as="h3"
                fontSize="40px"
                color="brand.blue.100"
                mb={4}
                fontFamily="cofo-kabeltouw-solid-0, sans-serif"
                fontWeight="bold"
              >
                MISSÃO
              </Heading>
              <Text color="brand.blue.100" fontSize="24px">
                Realizar atendimentos com excelência, entregar com agilidade
                para suprir as necessidades dos nossos clientes com equipamentos
                de qualidade.
              </Text>
            </Box>

            <Box
              bg="white"
              p={8}
              borderRadius="xl"
              height="447px"
              width="339px"
            >
              <Image
                src="/images/Sobre/star_24dp_5F6368.svg"
                alt="Estrela"
                height="66px"
                mx="auto"
                mb={4}
              />
              <Heading
                as="h3"
                fontSize="40px"
                color="brand.blue.100"
                mb={4}
                fontFamily="cofo-kabeltouw-solid-0, sans-serif"
                fontWeight="bold"
              >
                VISÃO
              </Heading>
              <Text color="brand.blue.100" fontSize="24px">
                Ser uma empresa de referência na região norte de Santa Catarina,
                lembrada pelo bom atendimento e qualidade dos equipamentos.
              </Text>
            </Box>

            <Box
              bg="white"
              p={8}
              borderRadius="xl"
              height="447px"
              width="339px"
            >
              <Image
                src="/images/Sobre/people_alt_24dp_5F6368.svg"
                alt="Pessoas"
                height="66px"
                mx="auto"
                mb={4}
              />
              <Heading
                as="h3"
                color="brand.blue.100"
                mb={4}
                fontFamily="cofo-kabeltouw-solid-0, sans-serif"
                fontWeight="bold"
                fontSize="40px"
              >
                VALORES
              </Heading>
              <Text color="brand.blue.100" fontSize="24px">
                Priorizar a transparência, fidelidade e honestidade com
                clientes, colaboradores e fornecedores.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Partner Brands Section */}
      <Box py={12} bg="white">
        <Container maxW="container.xl" textAlign="center">
          <Heading
            as="h2"
            fontSize={{ base: "32px", md: "48px", lg: "60px" }}
            color="brand.blue.100"
            fontWeight="bold"
            fontFamily="cofo-kabeltouw-solid-0, sans-serif"
            lineHeight="1.2"
            mt={"96px"}
            mb={"96px"}
          >
            MARCAS PARCEIRAS
          </Heading>

          <SimpleGrid
            columns={{ base: 2, sm: 3, lg: 4 }}
            gap={24}
            mb={"96px"}
          >
            {brandLogos.map((logo, index) => (
              <Box
                key={index}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  maxH="70px"
                  maxW="100%"
                  objectFit="contain"
                />
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <ContactCta />

      <Footer />
    </Box>
  );
};

export default AboutPage;
