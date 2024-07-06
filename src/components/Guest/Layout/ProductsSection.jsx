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