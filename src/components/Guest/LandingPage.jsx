import React from 'react';
import HeaderSection from './Layout/HeaderSection';
import CategorySection from './Layout/CategorySection';
import ClientSection from './Layout/ClientSection';
import ProductsSection from './Layout/ProductsSection';
import NewsletterSection from './Layout/NewsletterSection';
import BeautyProudctsSection from './Layout/BeautyProudctsSection';
import FooterSection from './Layout/FooterSection';
import ImageSlider from './Layout/ImageSlider';
 

const LandingPage = () => {
  return (
    <>
       <HeaderSection />

      <CategorySection />
      <ProductsSection />
      {/* <BeautyProudctsSection />
      <ClientSection />
      <NewsletterSection /> */}
      <FooterSection />
    </>
  );
};

export default LandingPage;