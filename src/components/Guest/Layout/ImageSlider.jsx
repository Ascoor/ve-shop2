import React, { useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';
import DemoData from '../../../tools/DemoData';

const ImageSlider = () => {
  const slides = DemoData('slides');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Wait for 5 seconds before moving to the next slide
    return () => clearInterval(interval);
  }, [slides.length]);

  const transitionConfig = {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
    config: { duration: 1000 },
    exitBeforeEnter: true // يجعل العناصر التالية تظهر بعد اختفاء العناصر السابقة
  };

  const textTransition = useTransition(slides[currentIndex], {
    key: slides[currentIndex].id,
    ...transitionConfig, // استخدام الإعدادات الجديدة
  });

  const imageTransition = useTransition(slides[currentIndex], {
    key: slides[currentIndex].id,
    ...transitionConfig, // استخدام نفس الإعدادات للصورة
    from: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(100%,0,0)' }, // خروج الصورة من الجهة الأخرى
  });

  return (
    <div className="relative w-full max-w-7xl mx-auto items-center space-x-4 lg:space-x-0">
      <div className="overflow-hidden">
        <div className="relative h-[600px] flex flex-col lg:flex-row"> {/* flex-col for small screens, flex-row for large */}
        
          {textTransition((style, item) => (
            <animated.div key={item.id} style={style} className="w-full lg:w-1/2 flex justify-center items-start lg:items-center p-4">
              <div className="p-2 lg:p-8">
                <h2 className="text-2xl font-bold text-yellow-300">{item.title}</h2>
                <p className="text-white mt-2">{item.description}</p>
                <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300">{item.buttonText}</button>
              </div>
            </animated.div>
          ))}
          
          {imageTransition((imageStyle, item) => (
            <animated.div key={item.id} style={imageStyle} className="w-full lg:w-1/2 flex justify-center items-center p-4">
              <div className="w-full h-96 transform translate-x-[-10px] lg:translate-y-[-40px]"> {/* رفع الصورة للأعلى على الشاشات الكبيرة */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  style={{
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 0%, black 70%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 0%, black 80%, transparent 100%)'
                  }}
                />
              </div>
            </animated.div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
