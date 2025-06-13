import React, { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Box,
  Container,
  Heading,
  Flex,
  Text,
  Avatar,
  HStack,
  Icon,
  Image,
  IconButton,
  Link,
} from "@chakra-ui/react";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaGoogle,
} from "react-icons/fa";

interface TestimonialData {
  id: string;
  name: string;
  date: string;
  text: string;
  imageSrc: string;
  stars: number;
}

const testimonials: TestimonialData[] = [
  {
    id: "adilson-novaes",
    name: "Adilson Novaes",
    date: "12/05/2025",
    text: "Empresa extremamente séria, competente e pontual. Sempre que preciso de equipamentos sou muito bem atendido.",
    imageSrc: "/images/Depoimentos/adilson-novaes.png",
    stars: 5,
  },
  {
    id: "fernando-santos",
    name: "Fernando Santos",
    date: "03/04/2024",
    text: "Ótimo atendimento, ágil na entrega dos equipamentos, muito educado, preço acessível! Recomendo a empresa! Tá de parabéns.",
    imageSrc: "/images/Depoimentos/fernando-santos.png",
    stars: 5,
  },
  {
    id: "versatil-moveis",
    name: "Versátil Móveis",
    date: "27/04/2025",
    text: "Ótimos, são super atenciosos, rápidos!! Sempre usamos, e nunca tivemos problemas! Gratidão.",
    imageSrc: "/images/Depoimentos/versatil-moveis.png",
    stars: 5,
  },
  {
    id: "susana-francisco-da-silva",
    name: "Susana Francisco da Silva",
    date: "15/10/2024",
    text: "Um atendimento excelente desde o primeiro contato, produto de qualidade e preço acessível, recomendo para sua obra.",
    imageSrc: "/images/Depoimentos/susana-francisco-da-silva.png",
    stars: 5,
  },
  {
    id: "rafael-fernando-batista",
    name: "Rafael Fernando Batista",
    date: "05/02/2025",
    text: "Equipe atendeu muito bem, rápido, preço justo e foram pontual com a entrega do equipamento. Muito boa a experiência. Recomendo!",
    imageSrc: "/images/Depoimentos/rafael-fernando-batista.png",
    stars: 5,
  },
  {
    id: "fabio-silva",
    name: "Fabio Silva",
    date: "19/08/2024",
    text: "Serviço muito profissional. Entrega pontual e remoção rápida conforme pedido pelo cliente. Recomendo está empresa",
    imageSrc: "/images/Depoimentos/fabio-silva.png",
    stars: 5,
  },
  {
    id: "dustyn-jhonny-hoffmann",
    name: "Dustyn Jhonny Hoffmann",
    date: "22/06/2024",
    text: "Um atendimento na minha opinião excepcional, com bastante explicação de como funciona os alugueis dos equipamentos e maquinários. Valores acessíveis. Aluguei um andaime e me surpreendi com a qualidade do produto bem como a limpeza e funcionalidades. Nota 10…!!!",
    imageSrc: "/images/Depoimentos/dustyn-jhonny- hoffmann.png",
    stars: 5,
  },
  {
    id: "alberto-coura",
    name: "Alberto Coura",
    date: "10/03/2025",
    text: "Atendimento Excelente, Empresa Muito Prestativa com os Clientes, Sou de São Paulo e Adorei o atendimento, Só não dou mais estrelas pq não tem, Super recomendo para quem está em Joinville. 😉",
    imageSrc: "/images/Depoimentos/alberto-coura.png",
    stars: 5,
  },
  {
    id: "install-ar",
    name: "Install'Ar",
    date: "14/07/2024",
    text: "Ótimo atendimento. Preço justo. Os andaimes sempre bem limpos e conservados. Cumprem o prazo de entrega e retirada. Parabéns à empresa!",
    imageSrc: "/images/Depoimentos/install-ar.png",
    stars: 5,
  },
  {
    id: "victor-ferreira",
    name: "Victor Ferreira",
    date: "02/01/2025",
    text: "Serviço de excelência, equipamentos de ótima qualidade com certeza voltarei a alugar equipamentos com essa empresa.",
    imageSrc: "/images/Depoimentos/victor-ferreira.png",
    stars: 5,
  },
];

const TestimonialCard: React.FC<{ testimonial: TestimonialData }> = ({
  testimonial,
}) => {
  return (
    <Box
      bg="white"
      borderRadius="24px"
      p={5}
      // w="350px"
      minW="350px"
      // maxW="350px"
      h="220px"
      mr={4}
    >
      <Flex mb={3} alignItems="center">
        <Avatar.Root>
          <Avatar.Fallback name={testimonial.name} />
          <Avatar.Image src={testimonial.imageSrc} />
        </Avatar.Root>
        <Box ml={3}>
          <Text fontWeight="bold" fontSize="md">
            {testimonial.name}
          </Text>
          <Text fontSize="xs" color="gray.500">
            {testimonial.date}
          </Text>
        </Box>
      </Flex>
      <HStack gap={1} mb={3}>
        {Array(5)
          .fill("")
          .map((_, i) => (
            <Icon
              key={i}
              as={FaStar}
              color={i < testimonial.stars ? "#FFB81C" : "gray.300"}
            />
          ))}
      </HStack>
      <Text
        // fontSize="sm"
        // noOfLines={4}
        overflowY={"scroll"}
        maxHeight="100px"
        textOverflow="ellipsis"
      >
        {testimonial.text}
      </Text>
    </Box>
  );
};

const GoogleReviewsWidget: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    backgroundColor: 'white',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  };

  return (
    <Box bg="#f2f2f2" py={12}>
      {/* <Container> */}
      <Heading
        as="h2"
        textAlign="center"
        mb="96px"
        fontSize={{ base: "32px", md: "48px", lg: "60px" }}
        mt="96px"
        color="brand.blue.100"
        fontFamily="cofo-kabeltouw-solid-0, sans-serif"
        lineHeight="1.2"
      >
        VEJA O QUE DIZEM NOSSOS CLIENTES
      </Heading>

      <Box position="relative">
      <Carousel
          infiniteLoop
          centerMode
          centerSlidePercentage={100}
          showStatus={false}
          showThumbs={false}
          interval={5000}
          transitionTime={500}
          swipeable
          emulateTouch
          selectedItem={0}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <div
                onClick={onClickHandler}
                title={label}
                style={{
                  ...arrowStyles,
                  left: 15,
                }}
              >
                <FaChevronLeft color="#0047BB" />
              </div>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <div
                onClick={onClickHandler}
                title={label}
                style={{
                  ...arrowStyles,
                  right: 15,
                }}
              >
                <FaChevronRight color="#0047BB" />
              </div>
            )
          }
          renderIndicator={(clickHandler, isSelected, index, label) => (
            <div
              onClick={clickHandler}
              key={index}
              style={{
                height: "0.5rem",
                width: "0.5rem",
                borderRadius: "8px",
                display: "inline-block",
                margin: "0 8px",
                backgroundColor: isSelected ? "#0047BB" : "#E0E0E0",
              }}
            ></div>
          )}
          className="testimonials-carousel"
        >
          {/* Group testimonials in sets of 3 for larger screens, 2 for medium, 1 for small */}
          {(() => {
            const items = [];
            const testimonialsPerSlide = window?.innerWidth > 768 ? 3 : window?.innerWidth > 480 ? 2 : 1;
            
            for (let i = 0; i < testimonials.length; i += testimonialsPerSlide) {
              const group = testimonials.slice(i, i + testimonialsPerSlide);
              items.push(
                <div key={`group-${i}`}>
                  <Flex 
                    justifyContent="center" 
                    alignItems="stretch"
                    flexWrap="wrap"
                    gap={4}
                    mx="auto"
                    px={4}
                    py={2}
                  >
                    {group.map(testimonial => (
                      <Box 
                        key={testimonial.id} 
                        flex="1"
                        minW={{ base: "100%", md: "45%", lg: "30%" }}
                        maxW={{ base: "100%", md: "45%", lg: "30%" }}
                      >
                        <TestimonialCard testimonial={testimonial} />
                      </Box>
                    ))}
                  </Flex>
                </div>
              );
            }
            return items;
          })()}
        </Carousel>
      </Box>

      <Flex justifyContent="center" alignItems="center" mt={12} fontSize="md">
        <Flex alignItems="center">
          <Link href="https://g.co/kgs/HAU9aAp" target="blank">
            <Image
              src="/images/Home/google.png"
              alt="Google Reviews"
              height="32px"
              mr={4}
              pb={0}
            ></Image>
            <HStack gap={2}>
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <Icon key={i} as={FaStar} color="#FFB81C" boxSize="16px" />
                ))}
            </HStack>
            <Text ml={6} fontWeight="light">
              4.9 - 116 avaliações
            </Text>
          </Link>
        </Flex>
      </Flex>
      {/* </Container> */}
    </Box>
  );
};

export default GoogleReviewsWidget;
