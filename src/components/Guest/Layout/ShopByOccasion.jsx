import React, { useState } from 'react';
import DemoData from '../../../tools/DemoData';

const ShopByOccasion = () => {
  const [visibleOccasionCategories, setVisibleOccasionCategories] = useState(3);
  const occasionCategories = DemoData('occasionCategories');
  
  const handleShowMore = () => {
    setVisibleOccasionCategories((prev) => 
      prev + 3 <= occasionCategories.length ? prev + 3 : occasionCategories.length
    );
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-8">
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-center mb-12 text-yellow-300">
        التسوق حسب المناسبات
      </h2>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8">
        {occasionCategories.slice(0, visibleOccasionCategories).map((category, index) => (
          <a
            key={index}
            href={category.link}
            className="relative group overflow-hidden rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            {/* Category Image */}
            <img
              src={category.imageSrc}
              alt={category.title}
              className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity duration-300 rounded-t-lg"
            />
            
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-lg">
              <h3 className="text-2xl font-extrabold text-white">{category.title}</h3>
              <p className="text-sm text-gray-200 mt-2 text-center">
                {category.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Show More Button */}
      {visibleOccasionCategories < occasionCategories.length && (
        <div className="flex justify-center mt-8">
              <button
  className="relative py-3 px-8 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-lg font-semibold shadow-lg hover:from-orange-400 hover:to-orange-500 hover:text-yellow-100 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
  onClick={handleShowMore}
>
  <span className="absolute inset-0 rounded-full bg-yellow-300 opacity-0 transition duration-300 ease-out group-hover:opacity-25"></span>
  <span className="relative">عرض المزيد</span>
</button>

        </div>
      )}
    </div>
  );
};

export default ShopByOccasion;
