
        import React from 'react';

        const InventoryManagement = () => {
          return (
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-6">إدارة المخزون</h1>
              <table className="table-auto w-full text-right border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border px-4 py-2">المنتج</th>
                    <th className="border px-4 py-2">الكمية</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">منتج 1</td>
                    <td className="border px-4 py-2">100</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-2">منتج 2</td>
                    <td className="border px-4 py-2">50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        };

        export default InventoryManagement;
    