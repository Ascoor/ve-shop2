import React from 'react';
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from '../../../../store/services/productApi'; // API queries
import DynamicTable from '../../../../components/common/DynamicTable';

const ManageCategories = () => {
  // جلب التصنيفات والمنتجات
  const { data: categories = [], isLoading: categoriesLoading } = useGetCategoriesQuery();
  const { data: products = [], isLoading: productsLoading } = useGetProductsQuery();

  // التحقق من تحميل البيانات
  const isLoading = categoriesLoading || productsLoading;

  // حساب عدد المنتجات لكل تصنيف وإضافة أسماء المنتجات كمصفوفة
  const categoriesWithProducts = categories.map((category) => {
    const relatedProducts = products.filter((product) => product.category_id === category.id);
    return {
      ...category,
      count: relatedProducts.length,
      productNames: relatedProducts.map((product) => product.name), // مصفوفة أسماء المنتجات
    };
  });

  // تعريف الأعمدة
  const columns = [
    { key: 'name', label: 'التصنيف' },
    { key: 'count', label: 'عدد المنتجات' },
    { key: 'productNames', label: 'المنتجات' }, // عمود المنتجات
  ];

  return (
    <DynamicTable
      title="قائمة التصنيفات"
      buttonText="إضافة تصنيف"
      columns={columns}
      data={categoriesWithProducts}
      filters={[]} // تمرير قائمة فارغة للتخلص من الخطأ
      isLoading={isLoading}
    />
  );
};

export default ManageCategories;
