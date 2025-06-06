import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './header';
import Hero from './hero';
import BenefitsSection from './benefits';
import GoogleReviewsWidget from './googleReviewsWidget';
import WhyChooseUs from './whyChooseUs';
import ContactCta from './contactCta';
import Footer from './footer';

const HomePage: React.FC = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <BenefitsSection />
      <GoogleReviewsWidget />
      <WhyChooseUs />
      <ContactCta />
      <Footer />
    </Box>
  );
};

export default HomePage;