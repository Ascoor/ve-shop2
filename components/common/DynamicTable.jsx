import React, { useState, useEffect } from 'react';

const DynamicTable = ({ data, headers, onDelete, onEdit, onAdd }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [selectedRows, setSelectedRows] = useState([]);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null);

  useEffect(() => {
    setFilteredData(
      data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, data]);

  const handleSelectAll = () => {
    if (selectedRows.length === filteredData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredData.map((item) => item.id));
    }
  };

  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleDelete = (id) => {
    setRowToDelete(id);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    onDelete(rowToDelete);
    setShowDeleteConfirm(false);
    setRowToDelete(null);
  };

  return (
    <div className="p-4">
      {/* شريط البحث */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2 w-full md:w-1/3"
          placeholder="ابحث عن عنصر..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
          onClick={onAdd}
        >
          + إضافة جديد
        </button>
      </div>

      {/* الجدول */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse bg-white rounded-md shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-center">
                <input
                  type="checkbox"
                  checked={selectedRows.length === filteredData.length}
                  onChange={handleSelectAll}
                />
              </th>
              {headers.map((header) => (
                <th key={header.key} className="p-2 text-center">
                  {header.text}
                </th>
              ))}
              <th className="p-2 text-center">الإجراء</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr
                key={item.id}
                className={`border-t ${
                  selectedRows.includes(item.id) ? 'bg-gray-50' : ''
                }`}
              >
                <td className="p-2">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(item.id)}
                    onChange={() => handleSelectRow(item.id)}
                  />
                </td>
                {headers.map((header) => (
                  <td key={header.key} className="p-2">
                    {item[header.key]}
                  </td>
                ))}
                <td className="p-2 flex space-x-2">
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600"
                    onClick={() => onEdit(item)}
                  >
                    تعديل
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                    onClick={() => handleDelete(item.id)}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* نافذة تأكيد الحذف */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md shadow-md text-center">
            <p>هل أنت متأكد أنك تريد الحذف؟</p>
            <div className="mt-4 flex justify-center space-x-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                onClick={confirmDelete}
              >
                نعم
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                onClick={() => setShowDeleteConfirm(false)}
              >
                لا
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicTable;
