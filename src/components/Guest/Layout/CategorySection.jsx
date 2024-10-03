import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SectionKitchen,SectionKidToys, SectionDecoration, SectionClothes, SectionElectronics, SectionGifts, SectionTecnolgy } from '../../../assets/images/index';

const CategorySection = () => {
    const sections = [
        { src: SectionClothes, title: "ملابس وأحذية", alt: "ملابس وأحذية" },
        { src: SectionDecoration, title: "ديكورات", alt: "ديكورات" },
        { src: SectionTecnolgy, title: "خدمات تكنولوجية", alt: "خدمات تكنولوجية" },
        { src: SectionGifts, title: "هدايا مناسبات", alt: "هدايا مناسبات" },
        { src: SectionElectronics, title: "إلكترونيات", alt: "إلكترونيات" },
        { src: SectionKitchen, title: "مطابخ وحمامات", alt: "مطابخ وحمامات" },
        { src: SectionKidToys, title: "ألعاب أطفال", alt: "العاب أطفال" },
    ];

    return (
        <div className="container mx-auto px-4" dir="rtl">
            <div className="w-full flex justify-center mt-4">
                <h1 className="text-[32px] text-black font-bold pt-[30px]">الأقسام</h1>
            </div>
            <div className="w-full mt-[90px] pt-5 pb-5 px-5 rounded-[60px] border-2 border-solid border-[#797979] shadow-xl">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    className="mySwiper"
                >
                    {sections.map((section, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center flex-col">
                            <h4 className="text-center text-[20px] text-[#ac58ec] font-medium pt-[5px] pb-6 hover:text-purple-600 hover:scale-110 transition duration-300">{section.title}</h4>
                            <img src={section.src} alt={section.alt} className="w-[380px] h-[220px] mx-auto transform hover:scale-110 transition duration-300 hover:brightness-125 rounded-xl " />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default CategorySection;
