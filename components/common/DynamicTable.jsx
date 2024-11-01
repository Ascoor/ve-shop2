import React, { useState } from 'react';
import LoadingBalls from './LoadingBalls';
import ConfirmModal from './ConfirmModal';
import TableHeader from './TableHeader';

const DynamicTable = ({
  title,
  buttonText,
  columns,
  data,
  filters,
  onFilterChange,
  onAddItem,
  isLoading,
  itemsPerPage = 10,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const handleOpenAddModal = () => setAddModalOpen(true);
  const handleCloseAddModal = () => setAddModalOpen(false);
  const handleOpenDeleteModal = () => setDeleteModalOpen(true);
  const handleCloseDeleteModal = () => setDeleteModalOpen(false);

  const handleConfirmAdd = () => {
    if (onAddItem) onAddItem();
    handleCloseAddModal();
  };

  const handleConfirmDelete = () => {
    if (onDeleteItems && selectedItems.length > 0) {
      onDeleteItems(selectedItems);
    }
    setSelectedItems([]);
    setSelectAll(false);
    handleCloseDeleteModal();
  };

  const handleSelectAll = (e) => {
    setSelectAll(e.target.checked);
    setSelectedItems(e.target.checked ? currentItems.map((item) => item.id) : []);
  };

  const handleSelectItem = (itemId) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(itemId) ? prevSelected.filter((id) => id !== itemId) : [...prevSelected, itemId]
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
    <div className="bg-[var(--color-component-background-day)] dark:bg-[var(--color-component-background-night)] text-[var(--color-text-day)] dark:text-[var(--color-text-night)] p-6 rounded-xl shadow-xl max-w-full mx-auto">
      <div className="mb-6">
        <TableHeader title={title} />
        <div className="flex justify-start">
          <button
            onClick={handleOpenAddModal}
            className="mt-2 bg-[var(--color-primary-day)] dark:bg-[var(--color-primary-night)] text-[var(--color-secondary-day)] dark:text-[var(--color-secondary-night)] px-5 py-2 rounded-lg hover:bg-[var(--color-button-hover-day)] dark:hover:bg-[var(--color-button-hover-night)] shadow-md transform transition-all duration-200 hover:scale-105"
          >
            {buttonText}
          </button>
        </div>
      </div>

      <ConfirmModal
        title="إضافة عنصر جديد"
        message="هل أنت متأكد أنك تريد إضافة هذا العنصر؟"
        isOpen={isAddModalOpen}
        onClose={handleCloseAddModal}
        onConfirm={handleConfirmAdd}
      />

      {filters && onFilterChange && (
        <div className="flex flex-wrap justify-start gap-4 my-6">
          {filters.map((filter, index) => (
            <div key={index} className="relative sm:w-auto w-full">
              <select
                className="w-full sm:w-auto appearance-none border border-[var(--color-component-border-day)] dark:border-[var(--color-component-border-night)] bg-[var(--color-component-background-day)] dark:bg-[var(--color-component-background-night)] text-[var(--color-text-day)] dark:text-[var(--color-text-night)] p-3 pr-10 rounded-lg shadow-sm focus:outline-none transition-all duration-200 hover:bg-[var(--color-background-day)] dark:hover:bg-[var(--color-background-night)]"
                value={filter.value}
                onChange={(e) => onFilterChange(filter.name, e.target.value)}
              >
                <option value="" className="bg-[var(--color-background-day)] dark:bg-[var(--color-background-night)]">
                  {filter.label}
                </option>
                {filter.options.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    className="bg-[var(--color-background-day)] dark:bg-[var(--color-background-night)] text-[var(--color-text-day)] dark:text-[var(--color-text-night)]"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}

      <div className="overflow-x-auto shadow-lg rounded-xl">
        <table className="w-full bg-[var(--color-component-background-day)] dark:bg-[var(--color-component-background-night)] border border-[var(--color-component-border-day)] dark:border-[var(--color-component-border-night)] rounded-lg overflow-hidden">
          <thead className="text-[var(--color-secondary-day)] dark:text-[var(--color-secondary-night)] bg-gradient-to-r from-[var(--color-primary-day)] to-[var(--color-button-hover-day)] dark:from-[var(--color-primary-night)] dark:to-[var(--color-button-hover-night)]">
            <tr className="border-b border-[var(--color-component-border-day)] dark:border-[var(--color-component-border-night)]">
              <th className="py-4 px-4 text-sm font-semibold text-center">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="accent-[var(--color-primary-day)] dark:accent-[var(--color-primary-night)]"
                />
              </th>
              {columns.map((column) => (
                <th key={column.key} className="px-6 py-4 text-sm font-semibold text-center">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[var(--color-text-day)] dark:text-[var(--color-text-night)]">
            {currentItems.map((item) => {
              const isChecked = selectedItems.includes(item.id);
              return (
                <tr
                  key={item.id}
                  className={`border-b border-[var(--color-component-border-day)] dark:border-[var(--color-component-border-night)] ${
                    isChecked ? 'bg-blue-100 dark:bg-gray-700' : 'hover:bg-[var(--color-background-day)] dark:hover:bg-[var(--color-background-night)]'
                  } transition-colors duration-200`}
                >
                  <td className="px-4 py-4 text-center">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleSelectItem(item.id)}
                      className="accent-[var(--color-primary-day)] dark:accent-[var(--color-primary-night)]"
                    />
                  </td>
                  {columns.map((column) => (
                    <td key={column.key} className="px-4 py-4 text-sm text-center whitespace-nowrap">
                      {getValueByPath(item, column.key)}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`mx-1 px-4 py-2 rounded-lg ${
              currentPage === index + 1
                ? 'bg-[var(--color-primary-day)] dark:bg-[var(--color-primary-night)] text-[var(--color-secondary-day)] dark:text-[var(--color-secondary-night)]'
                : 'bg-gray-200 dark:bg-gray-700 text-[var(--color-text-day)] dark:text-[var(--color-text-night)]'
            } hover:scale-105 transform transition-all duration-200`}
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