import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { createTheme } from '@chakra-ui/theme';
import HomePage from './components/home/';
import AboutPage from './components/about/';
import ProductsPage from './components/products/';
import ContactPage from './components/contact';
// import theme from './components/themed'; // Assuming you have a theme file
import { system } from './components/theme'; // Importing the theme

function App() {
  return (
    <ChakraProvider value={system}>
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