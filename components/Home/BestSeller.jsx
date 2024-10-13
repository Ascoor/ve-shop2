import Image from "next/image";
import Link from "next/link";

const BestSeller = ({ bestSellers, loading }) => {
  return (
    <div className="mt-5 w-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mt-5 text-[#E43038]">
          الأكثر مبيعاً
        </h1>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-[#752125]">
          منتجاتنا الأكثر شعبية
        </p>
      </div>
      <div className="py-10 px-4 md:px-8 lg:px-12"> {/* Adjust padding for mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {bestSellers.map((item) => (
            <div key={item.id} className="flex flex-col bg-white h-full">
              {loading ? (
                <div className="animate-pulse">
                  <div className="bg-gray-200 h-64 w-full"></div>
                  <div className="bg-gray-200 h-4 w-1/2 mt-2"></div>
                  <div className="bg-gray-200 h-4 w-1/4 mt-2"></div>
                  <div className="bg-gray-200 h-4 w-1/4 mt-2"></div>
                </div>
              ) : (
                <div className="border-2 rounded-md flex flex-col items-center hover:shadow-md hover:scale-105 transition-all h-full">
                  <Link href={`/detail/${item.id}`} className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}  // Increased width for larger images
                      height={300} // Adjusted height for consistency
                      className="w-full h-auto object-contain"  // Adjusted for full-width responsiveness
                      placeholder="blur"
                      blurDataURL={item.image}
                      loading="lazy"
                      priority={item.isTopSeller}
                      quality={75}
                    />
                  </Link>

                  <div className="flex-grow flex flex-col items-center justify-center bg-slate-300 gap-2 text-center w-full p-2">
                    <h1 className="text-sm md:text-md font-semibold">{item.title}</h1>
                    <p className="text-sm">${item.price}</p>
                  </div>

                  <Link className="flex items-center justify-end w-full h-12" href={`/detail/${item.id}`}>
                    <button className="bg-[#E43038] text-white w-full font-semibold text-sm px-4 py-2 hover:bg-[#752125]">
                      تفاصيل
                    </button>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
