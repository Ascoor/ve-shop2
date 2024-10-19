import React, { useState } from 'react';
import LoadingBalls from './LoadingBalls'; // مكون التحميل

const DynamicTable = ({
  title, // العنوان الخاص بالجدول (مثل Products Table)
  buttonText, // نص الزر (مثل Add Product)
  columns, // أسماء الأعمدة
  data, // البيانات المعروضة في الجدول
  filters, // خيارات الفلترة
  onFilterChange, // دالة تغيير الفلاتر
  onAddItem, // دالة زر الإضافة
  isLoading, // حالة التحميل
  itemsPerPage = 10 // عدد العناصر في كل صفحة
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const handleSelectAll = (e) => {
    setSelectAll(e.target.checked);
    setSelectedItems(e.target.checked ? currentItems.map((item) => item.id) : []);
  };

  const handleSelectItem = (itemId) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(itemId)
        ? prevSelected.filter((id) => id !== itemId)
        : [...prevSelected, itemId]
    );
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSelectAll(false);
    setSelectedItems([]);
  };

  const getValueByPath = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <LoadingBalls />
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-component-background-day)] dark:bg-[var(--color-component-background-night)] text-[var(--color-text-day)] dark:text-[var(--color-text-night)] p-6 rounded-lg shadow-lg max-w-6xl mx-auto">
      <div className="flex flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">{title}</h2> {/* استخدام العنوان الممرر */}
        <button
          onClick={onAddItem}
          className="bg-[var(--color-primary-day)] dark:bg-[var(--color-primary-night)] text-[var(--color-secondary-day)] dark:text-[var(--color-secondary-night)] px-4 py-2 rounded hover:bg-[var(--color-button-hover-day)] dark:hover:bg-[var(--color-button-hover-night)]"
        >
          {buttonText} {/* استخدام النص الممرر للزر */}
        </button>
      </div>

      {/* Filter Section */}
      <div className="flex justify-end my-6"> 
  {filters.map((filter, index) => (
    <div key={index} className="mr-4">
      <select
        className="border-b border-[var(--color-component-border-day)] dark:border-[var(--color-component-border-night)] 
                  bg-[var(--color-component-background-day)] dark:bg-[var(--color-component-background-night)] 
                  text-[var(--color-text-day)] dark:text-[var(--color-text-night)] 
                  focus:outline-none sm:w-auto md:w-48 rounded-md p-2"
        value={filter.value}
        onChange={(e) => onFilterChange(filter.name, e.target.value)}
      >
        <option value="">{filter.label}</option>
        {filter.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  ))}
</div>


      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-[var(--color-component-border-day)] dark:border-[var(--color-component-border-night)]">
            <th className="px-4 py-2 text-left">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
                className="accent-[var(--color-primary-day)] dark:accent-[var(--color-primary-night)]"
              />
            </th>
            {columns.map((column) => (
              <th key={column.key} className="px-4 py-2 text-center">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id} className="border-b border-[var(--color-component-border-day)] dark:border-[var(--color-component-border-night)]">
              <td className="px-4 py-3">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleSelectItem(item.id)}
                  className="accent-[var(--color-primary-day)] dark:accent-[var(--color-primary-night)]"
                />
              </td>
              {columns.map((column) => (
                <td key={column.key} className="px-4 py-3 text-center">
                  {getValueByPath(item, column.key)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`mx-1 px-4 py-2 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DynamicTable;
