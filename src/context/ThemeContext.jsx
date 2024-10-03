import React, { createContext, useContext, useState } from 'react';

// إنشاء سياق الثيم
const ThemeContext = createContext();

// إنشاء Hook لاستخدام الثيم في المكونات الأخرى
export const useTheme = () => useContext(ThemeContext);

// مكون مزود للثيمات لتطبيق الوضع الليلي والنهاري
const ThemeProvider = ({ children }) => {
  const [isNightMode, setIsNightMode] = useState(false);

  // وظيفة لتبديل الثيمات
  const toggleTheme = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <ThemeContext.Provider value={{ isNightMode, toggleTheme }}>
      {/* تطبيق الثيمات باستخدام TailwindCSS */}
      <div className={isNightMode ? 'bg-night-background text-night-text' : 'bg-day-background text-day-text'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
