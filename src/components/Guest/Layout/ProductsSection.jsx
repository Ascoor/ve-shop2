import React, { useState, useEffect } from 'react';
import ProductCard from '../../Products/ProductCard';
import DemoData from '../../../tools/DemoData';

const ProductsSection = () => {
  const productList = DemoData('productList');
  const [visibleProducts, setVisibleProducts] = useState(3);

  const handleShowMore = () => {
    setVisibleProducts((prev) => (prev + 3 <= productList.length ? prev + 3 : productList.length));
  };

  return (
    <div className="container mx-auto py-8 relative">
      {/* عنوان القسم */}
      <h2 className="text-2xl font-bold text-yellow-300 text-center mb-6">منتجات مميزة</h2>

      {/* عرض المنتجات */}
      <div className="flex flex-wrap justify-center items-center">
        {productList.slice(0, visibleProducts).map((product, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8 flex justify-center"
          >
            <ProductCard
              title={product.title}
              price={product.price}
              description={product.description}
              imageSrc={product.imageSrc}
              brand={product.brand}
            />
          </div>
        ))}
      </div>

      {/* زر "عرض المزيد" */}
      {visibleProducts < productList.length && (
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

export default ProductsSection;
