import React from 'react';
import { Box, Flex, Text, HStack, Link, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Box as="header" bg="brand.yellow.100" py={4} px={8}>
      <Flex justifyContent="space-between" alignItems="center" maxW="1200px" mx="auto">
        <Box>
          <Image
            src="/images/Marca/servimaq-logo-blue.png"
            alt="Servimaq Logo"
            // boxSize="250px"
            maxW={"200px"}
            objectFit="contain"
          />
        </Box>
        
        {/* <HStack> */}
        <HStack gap={20} justify="center" flexGrow={1} justifyContent="center">
          <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none', color: 'blue.500' }} fontSize={"24px"} color="brand.blue.100">HOME</Link>
          <Link as={RouterLink} to="/about" _hover={{ textDecoration: 'none', color: 'blue.500' }} fontSize={"24px"} color="brand.blue.100">SOBRE</Link>
          <Link as={RouterLink} to="/products" _hover={{ textDecoration: 'none', color: 'blue.500' }} fontSize={"24px"} color="brand.blue.100">PRODUTOS</Link>
          <Link as={RouterLink} to="/contact" _hover={{ textDecoration: 'none', color: 'blue.500' }} fontSize={"24px"} color="brand.blue.100">CONTATO</Link>
        </HStack>
        {/* <Box w="180px" visibility="hidden" /> */}
      </Flex>
    </Box>
  );
};

export default Header;