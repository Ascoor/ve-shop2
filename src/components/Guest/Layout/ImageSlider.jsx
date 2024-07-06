import React from 'react';
import Slider from 'react-slick';
import { Img1, Img2 } from '../../../assets/images/index';
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const slides = [
  {
    img: Img1,
    title: "خصم 50%",
    description: "استمتع بأفضل العروض والخصومات على منتجاتنا المتنوعة. جودة عالية وأسعار منافسة بانتظارك.",
    buttonText: "تسوق الآن",
  },
  {
    img: Img2,
    title: "عرض خاص",
    description: "احصل على أفضل المنتجات بأفضل الأسعار. عرض محدود لفترة قصيرة.",
    buttonText: "تسوق الآن",
  },
  {
    img: Img2,
    title: "تخفيضات الصيف",
    description: "استفد من تخفيضات الصيف الرائعة على جميع المنتجات.",
    buttonText: "تسوق الآن",
  },
];

const ImageSlider = () => {
  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="flex flex-row items-center p-2 animate-slide">
          <div className="w-1/2 text-center lg:text-left p-2 animate-text">
            <h4 className="text-2xl lg:text-4xl text-white font-bold">
              {slide.title}
            </h4>
            <p className="text-sm lg:text-base text-white mt-4">
              {slide.description}
            </p>
            <div className="mt-5">
              <a href="#" className="text-sm lg:text-base text-white bg-yellow-500 px-4 lg:px-6 py-2 lg:py-3 rounded-full hover:bg-transparent hover:border hover:border-white">
                {slide.buttonText}
              </a>
            </div>
          </div>
          <div className="w-1/2 p-5">
            <img src={slide.img} alt="بانر" className="w-full h-auto" />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
