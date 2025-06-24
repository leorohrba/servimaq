import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { createTheme } from '@chakra-ui/theme';
import HomePage from "./components/home/";
import AboutPage from "./components/about/";
import ProductsPage from "./components/products/";
import { Helmet } from 'react-helmet-async';
import ContactPage from "./components/contact";
// import theme from './components/themed'; // Assuming you have a theme file
import { system } from "./components/theme"; // Importing the theme

function App() {
  return (
    <ChakraProvider value={system}>
      <Helmet>
        <title>ServiMaq | Aluguel de equipamentos para construção civil</title>
        <meta
          name="description"
          content="Há mais de 10 anos locando equipamentos com agilidade e confiança para obras em Joinville e região."
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-745470874"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-745470874');
          `}
        </script>
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
