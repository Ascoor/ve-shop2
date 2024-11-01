import React from 'react';

const ConfirmModal = ({ title, message, isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h2 className="text-lg font-semibold mb-4 dark:text-white">{title}</h2>
        <p className="mb-6 dark:text-gray-300">{message}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onConfirm}
            className="bg-green-500 dark:bg-green-600 text-white px-4 py-2 rounded hover:bg-green-600 dark:hover:bg-green-700"
          >
            تأكيد
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 dark:bg-red-600 text-white px-4 py-2 rounded hover:bg-red-600 dark:hover:bg-red-700"
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
