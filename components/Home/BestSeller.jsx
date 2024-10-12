import Image from "next/image";
import Link from "next/link";

const BestSeller = ({ bestSellers, loading }) => {
  return (
    <div className='mt-5 w-full'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mt-5 text-[#E43038]'>
          الأكثر مبيعاً
        </h1>
        <p className='text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-[#752125]'>
          منتجاتنا الأكثر شعبية
        </p>
      </div>
      <div className='py-10 px-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {bestSellers.map((item) => (
            <>
              {loading ? (
                <div key={item.title} className='animate-pulse'>
                  <div className='bg-gray-200 h-64 w-full'></div>
                  <div className='bg-gray-200 h-4 w-1/2 mt-2'></div>
                  <div className='bg-gray-200 h-4 w-1/4 mt-2'></div>
                  <div className='bg-gray-200 h-4 w-1/4 mt-2'></div>
                </div>
              ) : (
                <div
                  key={item.id}
                  className='border-2 rounded-md flex flex-col items-center hover:shadow-md hover:scale-105 transition-all '
                >
                  <Link
                    href={`/detail/${item.id}`}
                    className='relative w-full h-full flex items-center justify-center'
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500} // استخدام العرض المناسب
                      height={500} // استخدام الطول المناسب
                      className='w-auto h-auto object-contain'
                      placeholder="blur" // تحميل تدريجي بتأثير التمويه
                      blurDataURL={item.image} // مصدر تأثير التمويه
                      loading="lazy" // التحميل المتأخر
                      priority={item.isTopSeller} // أولوية التحميل إذا كان المنتج مهم
                      quality={75} // تحسين جودة الصورة
                    />
                  </Link>

                  <div className='flex flex-col items-center justify-center bg-slate-300 gap-2 text-center h-40 w-full p-2'>
                    <h1 className='text-md font-semibold'>{item.title}</h1>
                    <p className='text-sm'>${item.price}</p>
                  </div>

                  <Link
                    className='flex items-center justify-end w-full h-12'
                    href={`/detail/${item.id}`}
                  >
                    <button className='bg-[#E43038] text-white w-full font-semibold text-sm px-4 py-2 hover:bg-[#752125]'>
                      تفاصيل
                    </button>
                  </Link>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
