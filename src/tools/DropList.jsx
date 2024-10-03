import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DropList = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block text-right"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* العنوان الرئيسي مع السهم */}
      <div
        className="flex items-center  cursor-pointer py-2 px-4 mr-5 bg-transparent font-bold text-white lg:text-white rounded-md hover:text-yellow-400 transition duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span
          className={`transform mr-1 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-90'}`}
          style={{ display: 'inline-block', transformOrigin: 'center' }} // ضبط نقطة دوران السهم
        >
          {/* SVG للسهم المتجه نحو النص (يمين) ثم لأسفل (عند الفتح) */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414L10 5.414 6.707 8.707A1 1 0 015.293 7.293l4-4A1 1 0 0110 3z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>

      {/* القائمة المنسدلة */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute text-center mt-2 py-2 w-48 bg-white rounded-md shadow-xl border border-gray-200 z-20"
          >
            {items.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                className="block px-4 py-2 text-violet-700 hover:bg-gray-100 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropList;
