<<<<<<< HEAD
import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useAnimation } from 'framer-motion';
import {
  SectionKitchen,
  SectionKidToys,
  SectionDecoration,
  SectionClothes,
  SectionElectronics,
  SectionGifts,
  SectionTecnolgy,
} from '../../../assets/images/index';

// الأقسام المختلفة التي سيتم عرضها
const sections = [
  { src: SectionClothes, title: 'ملابس وأحذية', description: 'أفضل تشكيلة من الملابس والأحذية لجميع الأعمار.' },
  { src: SectionDecoration, title: 'ديكورات', description: 'أجمل تصاميم الديكورات المنزلية.' },
  { src: SectionTecnolgy, title: 'خدمات تكنولوجية', description: 'خدمات تكنولوجية متميزة لكل احتياجاتك.' },
  { src: SectionGifts, title: 'هدايا مناسبات', description: 'أفضل الهدايا لجميع المناسبات.' },
  { src: SectionElectronics, title: 'إلكترونيات', description: 'أحدث أنواع الإلكترونيات بأسعار منافسة.' },
  { src: SectionKitchen, title: 'مطابخ وحمامات', description: 'تصاميم مطابخ وحمامات بأعلى جودة.' },
  { src: SectionKidToys, title: 'ألعاب أطفال', description: 'مجموعة متنوعة من ألعاب الأطفال.' },
];

const CategorySection = () => {
  const [contentWidth, setContentWidth] = useState(0); // عرض المحتوى
  const [isDragging, setIsDragging] = useState(false); // تتبع حالة السحب
  const containerRef = useRef(); // مرجع الحاوية
  const x = useMotionValue(0); // استخدام `useMotionValue` للتحكم في قيمة x
  const controls = useAnimation(); // لإدارة الرسوم المتحركة

  // تكرار الأقسام لضمان التحريك المستمر
  const repeatedSections = [...sections, ...sections];

  useEffect(() => {
    if (containerRef.current) {
      const totalWidth = containerRef.current.scrollWidth / 2; // تحديد عرض العناصر القابلة للتمرير
      setContentWidth(totalWidth); // تحديث `contentWidth`
    }
  }, []);

  // التحكم في الرسوم المتحركة التلقائية
  useEffect(() => {
    if (!isDragging) {
      // إذا لم يكن هناك سحب، استئناف التحريك التلقائي
      controls.start({
        x: -contentWidth,
        transition: {
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          duration: 30, // مدة التحريك التلقائي
        },
      });
    } else {
      controls.stop(); // إيقاف التحريك أثناء السحب
    }
  }, [isDragging, contentWidth, controls]);

  // بدء السحب
  const handleDragStart = () => {
    setIsDragging(true);
  };

  // نهاية السحب
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="overflow-hidden" ref={containerRef}>
      <motion.div
        className="flex"
        drag="x"
        dragConstraints={{ left: -contentWidth, right: 0 }} // ضبط حدود السحب
        dragElastic={0.2} // ضبط مرونة السحب
        style={{ x }}
        animate={controls} // ربط الرسوم المتحركة بعنصر `motion`
        onDragStart={handleDragStart} // عند بدء السحب
        onDragEnd={handleDragEnd} // عند نهاية السحب
        whileTap={{ cursor: "grabbing" }} // تغيير المؤشر عند السحب
        transition={{ ease: "linear", duration: 0.5 }} // تحكم في الانتقالات أثناء السحب
      >
        {repeatedSections.map((section, index) => (
          <div
            key={index}
            className="min-w-[200px] md:min-w-[250px] lg:min-w-[300px] h-[280px] bg-transparent flex-shrink-0 flex flex-col items-center justify-center"
          >
            {/* صورة القسم */}
            <div className="w-full h-3/4 overflow-hidden rounded-lg">
              <img
                src={section.src}
                alt={section.title}
                className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110"
              />
            </div>

            {/* نص القسم */}
            <div className="mt-2 text-center">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-pink-100">{section.title}</h3>
              <p className="text-sm md:text-base lg:text-lg text-yellow-300 mt-1">{section.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
=======
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
>>>>>>> 61437aadda136a5787ad4ffec00cbd22c916e3eb

export default CategorySection;
