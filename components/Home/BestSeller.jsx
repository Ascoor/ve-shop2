import Image from "next/image";
import Link from "next/link";

const BestSeller = ({ bestSellers, loading }) => {
  return (
    <div className="mt-5 w-full">
      {/* عنوان الأكثر مبيعاً */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mt-5 text-[var(--color-primary-day)] dark:text-[var(--color-primary-night)]">
          الأكثر مبيعاً
        </h1>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-[var(--color-secondary-day)] dark:text-[var(--color-secondary-night)]">
          منتجاتنا الأكثر شعبية
        </p>
      </div>

      {/* عرض المنتجات */}
      <div className="py-10 px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {bestSellers.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-[var(--color-background-day)] dark:bg-[var(--color-background-night)] h-full border-2 rounded-md hover:shadow-md hover:scale-105 transition-all"
            >
              {loading ? (
                <div className="animate-pulse">
                  <div className="bg-gray-200 h-64 w-full dark:bg-gray-700"></div>
                  <div className="bg-gray-200 h-4 w-1/2 mt-2 dark:bg-gray-700"></div>
                  <div className="bg-gray-200 h-4 w-1/4 mt-2 dark:bg-gray-700"></div>
                  <div className="bg-gray-200 h-4 w-1/4 mt-2 dark:bg-gray-700"></div>
                </div>
              ) : (
                <div className="flex flex-col items-center h-full">
                  {/* صورة المنتج */}
                  <Link
                    href={`/detail/${item.id}`}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={300}
                      className="w-full h-auto object-contain"
                      placeholder="blur"
                      blurDataURL={item.image}
                      loading="lazy"
                      priority={item.isTopSeller}
                      quality={75}
                    />
                  </Link>

                  {/* تفاصيل المنتج */}
                  <div className="flex-grow flex flex-col items-center justify-center bg-[var(--color-component-background-day)] dark:bg-[var(--color-component-background-night)] gap-2 text-center w-full p-2">
                    <h1 className="text-sm md:text-md font-semibold text-[var(--color-text-day)] dark:text-[var(--color-text-night)]">
                      {item.title}
                    </h1>
                    <p className="text-sm text-[var(--color-text-day)] dark:text-[var(--color-text-night)]">
                      ${item.price}
                    </p>
                  </div>

                  {/* زر التفاصيل */}
                  <Link className="flex items-center justify-end w-full h-12" href={`/detail/${item.id}`}>
                    <button className="bg-[var(--color-primary-day)] text-[var(--color-secondary-day)] dark:bg-[var(--color-primary-night)] dark:text-[var(--color-secondary-night)] w-full font-semibold text-sm px-4 py-2 hover:bg-[var(--color-button-hover-day)] dark:hover:bg-[var(--color-button-hover-night)]">
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
