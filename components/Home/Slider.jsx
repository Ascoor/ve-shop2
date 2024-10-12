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
          src='/assets/black-friday.png'
          alt='Black Friday Promotion'
          width={2400}
          height={1600}
          className='w-full h-full object-contain p-4 transition-opacity duration-500'
          priority // تحميل سريع للصورة إذا كانت ضرورية
          loading="eager" // تحميل فوري إذا كانت الصورة في الجزء العلوي
          placeholder="blur" // تحميل تدريجي للصورة
          blurDataURL='/assets/black-friday.png' // مصدر تمويه الصورة
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // لتحسين التحميل حسب حجم الشاشة
        />
      )}
    </div>
  );
};

export default Slider;
