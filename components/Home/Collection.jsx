import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

const Collection = ({ womenProducts }) => {
  return (
    <div dir="rtl" className="space-y-4 w-full flex flex-col gap-6 relative">
      
      {/* Centered "تسوق الآن" Text */}
      <div className=" inset-x-0 top-0 z-10 flex justify-center items-center h-full">
        <h1 className="text-[#E43038] text-5xl md:text-6xl font-semibold text-center">
          تسوق الآن
        </h1>
      </div>

      {/* Swiper Slider with "تسوق الآن" centered on top */}
      <Swiper
        grabCursor={true}
        modules={[Navigation]}
        navigation={true}
        className="w-72 h-72 md:h-96 lg:w-96 bg-white lg:h-96 xl:w-full mb-8 md:mb-0 relative z-0"
      >
        {womenProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <Link href={`/detail/${product.id}`}>
              <Image
                src={product.image}
                alt=""
                width={500}
                height={100}
                className="object-contain w-full h-full"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>


      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide font-semibold text-center mt-8 lg:mt-12">
        خصومات كبيرة
      </h1>
      <div className="flex flex-col md:flex-row gap-4 w-full">
      
        <div className="flex flex-col items-center justify-center w-full md:w-1/2">
          <Image
            src="/assets/autumn-sale.png"
            alt="autumn sale"
            width={500}
            height={500}
            className="p-4 w-full object-contain"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-1/2">
          <video
            src="/assets/video.mp4"
            autoPlay
            loop
            muted
            className="p-4 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Collection;
