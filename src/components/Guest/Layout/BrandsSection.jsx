import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import DemoData from "../../../tools/DemoData";

const BrandsSection = () => {
  const brandsData = DemoData('brands');

  return (
    <section className="py-12 neon-shadow bg-gradient-to-b from-transparent via-violet-600 to-transparent">
      {/* Title Section */}
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-100">أشهر العلامات التجارية</h2>

      {/* Swiper Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-8">
        {/* Custom Previous Button (on the right side now) */}
        <div className="swiper-button-prev-custom absolute -right-12 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-3 rounded-full bg-violet-400 hover:bg-violet-800 border-4 border-violet-700 transition duration-300">
          <span className="text-2xl font-bold text-white hover:text-yellow-400">❮</span>
        </div>

        {/* Custom Next Button (on the left side now) */}
        <div className="swiper-button-next-custom absolute -left-12 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-3 rounded-full bg-violet-400 hover:bg-violet-800  border-violet-700  transition duration-300">
          <span className="text-2xl font-bold text-white hover:text-yellow-400">❯</span>
        </div>

        {/* Swiper Component with Custom Margins for Navigation */}
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-custom',
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }} // Smooth autoplay
          loop={true} // Enable infinite loop
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          className="mx-16" // Padding around the slides to keep them inside arrow boundaries
        >
          {/* Swiper Slides */}
          {brandsData.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="relative p-8 md:p-6 transition duration-300 shadow-xl rounded-xl flex justify-center items-center bg-transparent overflow-hidden">
              {/* دائرة الخلفية */}
               <div className="absolute inset-0 flex justify-center items-center">
    <div className="w-64 h-64 rounded-full border-6 border-violet-500 opacity-80"></div>
  </div>
              <img
  src={brand.image}
  alt={brand.name}
  className="h-16 md:h-24 object-contain transition-transform transform hover:scale-110 duration-300 filter invert" // إضافة filter invert لتغيير الألوان
  onError={(e) => (e.currentTarget.style.display = "none")} // Hide broken images
/>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Area */}
        <div className="swiper-pagination-custom mt-8 flex justify-center items-center t space-x-2"></div>
      </div>
    </section>
  );
};

export default BrandsSection;
