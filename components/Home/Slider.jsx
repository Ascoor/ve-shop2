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
          src='/assets/black-friday.webp'
          alt='Black Friday Promotion'
          width={2400}
          height={1600}
          className='w-full h-full object-contain p-4 transition-opacity duration-500'
          priority
          loading="eager" // Ensures image loads eagerly if important
        />
      )}
    </div>
  );
};

export default Slider;
