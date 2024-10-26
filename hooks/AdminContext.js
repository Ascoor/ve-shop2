// hooks/AdminContext.js
import React, { createContext, useContext, useState } from 'react';

// إنشاء Context
const AdminContext = createContext();

// إنشاء Provider لتغليف المكونات
export const AdminProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home'); // الحالة لتخزين القسم النشط

  return (
    <AdminContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </AdminContext.Provider>
  );
};

// هوك لاستخدام الـ Context
export const useAdminContext = () => {
  return useContext(AdminContext);
};
