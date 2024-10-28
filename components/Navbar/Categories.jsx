import { useState } from 'react';
import { categories } from '../../data';

const Categories = () => {
  const [showSubCategories, setShowSubCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleHoverSubCategories = category => {
    setShowSubCategories(true);
    setSelectedCategory(category);
  };

  const handleLeaveSubCategories = () => {
    setTimeout(() => {
      setShowSubCategories(false);
    }, 200);
  };

  return (
    <div
      className="categories hidden md:flex flex-wrap items-center md:justify-center"
      style={{ direction: 'rtl' }}
    >
      <div className="group inline-block relative">
        {categories.map(category => (
          <div
            key={category.id}
            className="inline-block relative"
            onMouseEnter={() => handleHoverSubCategories(category)}
            onMouseLeave={handleLeaveSubCategories}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-row p-2 rounded-full gap-4 justify-center items-center">
                {/* Main category text */}
                <p className="cursor-pointer text-sm font-semibold hover:underline hover:text-[var(--color-primary-day)] decoration-[var(--color-primary-day)]">
                  {category.name}
                </p>
              </div>
            </div>

            {/* Show dropdown on hover */}
            {showSubCategories && selectedCategory?.id === category.id && (
              <div className="absolute top-7 right-0 w-36 h-full z-10">
                <div className="flex flex-col items-center bg-[var(--color-background-day)] gap-4 text-right shadow p-2">
                  {category.dropdown.map(subCategory => (
                    <div
                      key={subCategory.id}
                      className="flex flex-col w-full text-right p-2 border-b border-[var(--color-primary-day)]"
                    >
                      <p className="text-sm font-semibold hover:text-[var(--color-primary-day)] cursor-pointer">
                        {subCategory.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
