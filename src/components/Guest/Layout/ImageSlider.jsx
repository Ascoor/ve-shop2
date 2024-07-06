import React, { useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';
import { Img1, Img2, Img3 } from '../../../assets/images/index';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      id: 1,
      img: Img1,
      title: "خصم 50%",
      description: "استمتع بأفضل العروض والخصومات على منتجاتنا المتنوعة. جودة عالية وأسعار منافسة بانتظارك.",
      buttonText: "تسوق الآن",
    },
    {
      id: 2,
      img: Img2,
      title: "عرض خاص",
      description: "احصل على أفضل المنتجات بأفضل الأسعار. عرض محدود لفترة قصيرة.",
      buttonText: "تسوق الآن",
    },
    {
      id: 3,
      img: Img3,
      title: "تخفيضات الصيف",
      description: "استفد من تخفيضات الصيف الرائعة على جميع المنتجات.",
      buttonText: "تسوق الآن",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Wait for 5 seconds before moving to the next slide
    return () => clearInterval(interval);
  }, [slides.length]);

  const textTransition = useTransition(slides[currentIndex], {
    key: slides[currentIndex].id,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(50%,0,0)' },
    config: { duration: 1000 }
  });

  const imageTransition = useTransition(slides[currentIndex], {
    key: slides[currentIndex].id,
    from: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    config: { duration: 1000 }
  });

  return (
    <div className="relative w-full max-w-7xl mx-auto items-center space-x-4 lg:space-x-0">
      <div className="overflow-hidden">
        <div className="relative h-[600px]">
          {textTransition((style, item) => (
            <animated.div key={item.id} style={style} className="absolute w-full h-full flex items-start justify-between">
              <div className="w-full lg:w-1/2 p-4 lg:mb-0 lg:flex lg:flex-col lg:justify-start lg:items-start lg:relative lg:top-16">
                <h2 className="text-2xl font-bold text-yellow-300">{item.title}</h2>
                <p className="text-white mt-2">{item.description}</p>
                <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300">{item.buttonText}</button>
              </div>
            </animated.div>
          ))}
          {imageTransition((imageStyle, item) => (
            <animated.div key={item.id} style={imageStyle} className="absolute w-full h-full flex items-start justify-end">
              <div className="w-full lg:w-1/2 p-4 transform translate-y-10">
                <img src={item.img} alt={item.title} className="w-full h-96 object-cover" />
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
