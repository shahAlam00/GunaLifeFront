import React from 'react';
import Hero from '../components/layout/Hero';
import AsFeaturedIn from '../components/common/AsFeaturedIn';
import ProductCards from '../components/common/ProductCards';
import ClinicalProofSection from '../components/common/ClinicalProofSection';
import PerformersSlider from '../components/common/PerformersSlider';
import WelcomeKitSection from '../components/common/WelcomeKitSection';
import RiskFreePromise from '../components/common/RiskFreePromise';
import VerifiedReviews from '../components/common/VerifiedReviews';

const HomePage = () => {
  return (
    <>
      <Hero />
      <AsFeaturedIn />
      <ProductCards />
      <ClinicalProofSection />
      <PerformersSlider />
      <WelcomeKitSection />
      <RiskFreePromise />
      <VerifiedReviews />
    </>
  );
};

export default HomePage;
