import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeaderSection from './Layout/HeaderSection';
import CategorySection from './Layout/CategorySection';
import BrandsSection from './Layout/BrandsSection';
import ProductsSection from './Layout/ProductsSection';
import FooterSection from './Layout/FooterSection';
import { BannerBackground } from '../../assets/images/index';
import ShopByOccasion from './Layout/ShopByOccasion';
import ReviewsSection from './Layout/ReviewsSection';
import ImageSlider from './Layout/ImageSlider';

const LandingPage = () => {
  return (
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gradientColorStart to-black z-0">
        {/* Background effect with stars */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-full w-1 h-1 animate-twinkle opacity-80"
              style={{
                position: 'absolute',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 5 + 2}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

            <HeaderSection />{/* Header and Image Slider Section */}
<div className="relative pb-10 z-10">
  <section className="relative h-full pt-8 pb-8 px-16 lg:px-16" style={{ backgroundImage: `url(${BannerBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    {/* Image Slider */}
    <ImageSlider />
  </section>

  <section className="py-12 px-4 lg:px-16">
    <CategorySection />
  </section>
  <section className="py-12 px-4 lg:px-16">
    <ProductsSection />
  </section>
  <section className="py-8 px-4 lg:px-16">
    <ShopByOccasion />
  </section>
  
  <BrandsSection />
  <ReviewsSection />
</div>
 
  <FooterSection />

      </div>
  );
};

export default LandingPage;
