import Image from "next/image";

const Slider = ({ loading }) => {
  return (
    <div className='w-full mt-10'>
      {loading ? (
        <div className='animate-pulse'>
          <div className='bg-gray-400 h-64 w-full'></div> {/* Skeleton Loader */}
        </div>
      ) : (
        <Image
          src='/assets/black-friday.webp'  // استخدام الصورة المحسنة بتنسيق WebP
          alt='Black Friday Promotion'
          width={2400}
          height={1600}
          className='w-full h-full object-contain p-4 transition-opacity duration-500'
          priority
          loading="eager"  // تحميل الصورة بسرعة إذا كانت مهمة
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw, 33vw" // تحديد حجم الصورة بناءً على الشاشة
        />
      )}
    </div>
  );
};

export default Slider;
