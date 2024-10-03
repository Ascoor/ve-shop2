<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import ProductCard from '../../Products/ProductCard';
import DemoData from '../../../tools/DemoData';

const ProductsSection = () => {
  const productList = DemoData('productList');
  const [visibleProducts, setVisibleProducts] = useState(3);

  const handleShowMore = () => {
    setVisibleProducts((prev) => (prev + 3 <= productList.length ? prev + 3 : productList.length));
  };

  return (
    <div className="container mx-auto py-8 relative">
      {/* عنوان القسم */}
      <h2 className="text-2xl font-bold text-yellow-300 text-center mb-6">منتجات مميزة</h2>

      {/* عرض المنتجات */}
      <div className="flex flex-wrap justify-center items-center">
        {productList.slice(0, visibleProducts).map((product, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8 flex justify-center"
          >
            <ProductCard
              title={product.title}
              price={product.price}
              description={product.description}
              imageSrc={product.imageSrc}
              brand={product.brand}
            />
          </div>
        ))}
      </div>

      {/* زر "عرض المزيد" */}
      {visibleProducts < productList.length && (
        <div className="flex justify-center mt-8">
        <button
  className="relative py-3 px-8 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-lg font-semibold shadow-lg hover:from-orange-400 hover:to-orange-500 hover:text-yellow-100 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
  onClick={handleShowMore}
>
  <span className="absolute inset-0 rounded-full bg-yellow-300 opacity-0 transition duration-300 ease-out group-hover:opacity-25"></span>
  <span className="relative">عرض المزيد</span>
</button>

        </div>
      )}
    </div>
  );
};

export default ProductsSection;
=======
import ProductCard from '../../Products/ProductCard';
import { Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9,Img10,Img11,Img12,Img13,Img14,Img15 } from '../../../assets/images/index';

import { Swiper, SwiperSlide } from 'swiper/react';
const ProductsSection = () => {
    const products = [
        {
            title: "حتى 50% خصم | فستان أحمر بنقط بيضاء",
            price: 120,
            description: "فستان أنيق مثالي للمناسبات الخاصة، مزين بنقط بيضاء، خامة خفيفة مريحة",
            imageSrc: Img10,
            altText: "فستان أحمر",

            linkHref: "#"
        },
        {
            title: "قماش صيفي متعدد الألوان",
            price: 85,
            description: " قميص صيفي بتصميم متدرج الألوان وقماش خفيف، مثالي للأيام الدافئة",
            imageSrc: Img8, 
            altText: "قميص صيفي",
            linkHref: "#"
        },
        {
            title: "قماش صيفي متعدد الألوان",
            price: 85,
            description: " قميص صيفي بتصميم متدرج الألوان وقماش خفيف، مثالي للأيام الدافئة",
            imageSrc: Img11, 
            altText: "قميص صيفي",
            linkHref: "#"
        },
        {
            title: "قماش صيفي متعدد الألوان",
            price: 95,
            description: " قميص صيفي بتصميم متدرج الألوان وقماش خفيف، مثالي للأيام الدافئة",
            imageSrc: Img2, 
            altText: "قميص صيفي",
            linkHref: "#"
        },
        {
            title: "قماش صيفي متعدد الألوان",
            price: 105,
            description: " قميص صيفي بتصميم متدرج الألوان وقماش خفيف، مثالي للأيام الدافئة",
            imageSrc: Img11, 
            altText: "قميص صيفي",
            linkHref: "#"
        },
        {
            title: "قماش صيفي متعدد الألوان",
            price: 115,
            description: " قميص صيفي بتصميم متدرج الألوان وقماش خفيف، مثالي للأيام الدافئة",
            imageSrc: Img8, 
            altText: "قميص صيفي",
            linkHref: "#"
        },
        {
            title: "قماش صيفي متعدد الألوان",
            price: 185,
            description: " قميص صيفي بتصميم متدرج الألوان وقماش خفيف، مثالي للأيام الدافئة",
            imageSrc: Img12, 
            altText: "قميص صيفي",
            linkHref: "#"
        },
        {
            title: "خلاط كهربائي من باناسونيك",
            price: 300,
            description: "خلاط كهربائي متعدد الوظائف من باناسونيك، مثالي لجميع احتياجات المطبخ",
            imageSrc:Img4, 
            altText: "خلاط كهربائي",
            linkHref: "#"
        },
        {
            title: "مجموعة مستحضرات تجميل",
            price: 220,
            description: "كل ما تحتاجينه من مستحضرات تجميل في مجموعة واحدة متكاملة",
            imageSrc: Img5,
            altText: "مستحضرات تجميل",
            linkHref: "#"
        },
        {
            title: "مجموعة الكترونيات",
            price: 1500,
            description: "تشكيلة واسعة من الأجهزة الالكترونية لتلبية جميع احتياجاتك التكنولوجية",
            imageSrc: Img6, 
            altText: "أجهزة الكترونية",
            linkHref: "#"
        },
        {
            title: "مجموعة الكترونيات",
            price: 1500,
            description: "تشكيلة واسعة من الأجهزة الالكترونية لتلبية جميع احتياجاتك التكنولوجية",
            imageSrc: Img6, 
            altText: "أجهزة الكترونية",
            linkHref: "#"
        },
        {
            title: "مجموعة الكترونيات",
            price: 1500,
            description: "تشكيلة واسعة من الأجهزة الالكترونية لتلبية جميع احتياجاتك التكنولوجية",
            imageSrc: Img14, 
            altText: "أجهزة الكترونية",
            linkHref: "#"
        },
        {
            title: "قميص صيفي مريح",
            price: 45,
            imageSrc: Img7, 
            description: "قميص صيفي بنقشة مربعات، خامات عالية الجودة توفر الراحة في الأيام الحارة",

            altText: "قميص صيفي",
            linkHref: "#"
        }
    ];
    

  return (       <div className="container mx-auto px-4" dir="rtl">
    <div className="w-full flex justify-center mt-4">
        <h1 className="text-[32px] text-black font-bold pt-[30px]">الأقسام</h1>
    </div>
    <div className="w-full mt-[90px] pt-5 pb-5 px-5 rounded-[60px] border-2 border-solid border-[#797979] shadow-xl">
               
              <Swiper
                    slidesPerView={5}
                    spaceBetween={10}
                    loop={true}
                    className="mySwiper"
                >
                   {products.map((product, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center flex-col">
                        <ProductCard 
                                title={product.title}
                                  imageSrc={product.imageSrc}
                                  altText={product.altText}
                                  linkHref={product.linkHref}
                                  price={product.price}
                                  description={product.description}
                                />
                                  </SwiperSlide>
                    ))}
                </Swiper>
                    
                  </div>
              </div>
    )
}

export default ProductsSection
>>>>>>> 61437aadda136a5787ad4ffec00cbd22c916e3eb
