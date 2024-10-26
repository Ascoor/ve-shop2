import { useState, useEffect } from 'react';
import Image from 'next/image';
import { brands } from '../../data';

const Brands = ({ loading }) => {
  const [visibleBrands, setVisibleBrands] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      setVisibleBrands(window.innerWidth >= 1024 ? 8 : 6);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showAllBrands = () => {
    setVisibleBrands(brands.length);
  };

  const displayedBrands = brands.slice(0, visibleBrands);

  return (
    <div className="flex flex-col items-center p-4">
      {/* شبكة العلامات التجارية */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
        {displayedBrands.map((brand) => (
          <div key={brand.id} className="flex flex-col items-center gap-3">
            {loading ? (
              <div className="animate-pulse">
                <div className="bg-gray-200 dark:bg-gray-700 h-16 w-16 rounded-full"></div>
              </div>
            ) : (
              <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <p className="text-sm font-bold text-gray-800 dark:text-gray-200 text-center">
              {brand.name}
            </p>
          </div>
        ))}
      </div>

      {/* زر "عرض الباقي" */}
      {visibleBrands < brands.length && (
        <button
          onClick={showAllBrands}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          عرض المزيد
        </button>
      )}
    </div>
  );
};

export default Brands;
