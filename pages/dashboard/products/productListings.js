import React, { useState } from 'react';
import { useGetProductsQuery, useGetCategoriesQuery, useGetBrandsQuery } from '../../../store/services/productApi'; // API queries
import DynamicTable from '../../../components/common/DynamicTable'; // مكون الجدول العام

const ProductListings = () => {
  // حالة الفلاتر
  const [filterCategory, setFilterCategory] = useState('');
  const [filterBrand, setFilterBrand] = useState('');

  const { data: products = [], isLoading: productsLoading } = useGetProductsQuery();
  const { data: categories = [] } = useGetCategoriesQuery();
  const { data: brands = [] } = useGetBrandsQuery();

  const columns = [
    { key: 'name', label: 'Product' },
    { key: 'category.name', label: 'Category' },
    { key: 'brand.name', label: 'Brand' },
    { key: 'price', label: 'Price' },
    { key: 'stock.quantity', label: 'Stock' },
    { key: 'totalSales', label: 'Total Sales' },
  ];

  // تصفية المنتجات بناءً على الفئة أو العلامة التجارية المختارة
  const filteredProducts = products.filter((product) => {
    const categoryMatch = filterCategory ? product.category?.id === parseInt(filterCategory) : true;
    const brandMatch = filterBrand ? product.brand?.id === parseInt(filterBrand) : true;
    return categoryMatch && brandMatch;
  });

  // إعداد الفلاتر
  const filters = [
    {
      name: 'category',
      label: 'التصنيفات',
      value: filterCategory,
      options: categories.map((category) => ({ value: category.id, label: category.name }))
    },
    {
      name: 'brand',
      label: 'البراندات',
      value: filterBrand,
      options: brands.map((brand) => ({ value: brand.id, label: brand.name }))
    }
  ];

  const handleFilterChange = (name, value) => {
    if (name === 'category') {
      setFilterCategory(value);
    } else if (name === 'brand') {
      setFilterBrand(value);
    }
  };

  const handleAddProduct = () => {
    console.log("Add Product clicked");
  };

  return (
    <DynamicTable
      title="قائمة المنتجات"
      buttonText="إضافة منتج"
      columns={columns}
      data={filteredProducts} // استخدام المنتجات المصفاة
      filters={filters}
      onFilterChange={handleFilterChange}
      onAddItem={handleAddProduct}
      isLoading={productsLoading}
    />
  );
};

export default ProductListings;
