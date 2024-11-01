import React from 'react';
import { FaTable } from 'react-icons/fa'; // استبدلها بالأيقونة المطلوبة أو تمريرها كمكون

const TableHeader = ({ title, icon: Icon = FaTable }) => {
  return (
    <div className="table-header flex items-center justify-center mb-4 rounded-lg shadow-lg p-4 w-full">
      {Icon && <Icon className="header-icon text-[var(--color-primary-day)] dark:text-[var(--color-primary-night)] mr-2" />}
      <h2 className="header-title text-2xl sm:text-3xl font-bold text-[var(--color-text-day)] dark:text-[var(--color-text-night)]">
        {title}
      </h2>
    </div>
  );
};

export default TableHeader;
