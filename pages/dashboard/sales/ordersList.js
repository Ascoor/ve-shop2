
        import React from 'react';

        const OrdersList = () => {
          return (
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-6">قائمة الطلبات</h1>
              <table className="table-auto w-full text-right border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border px-4 py-2">رقم الطلب</th>
                    <th className="border px-4 py-2">العميل</th>
                    <th className="border px-4 py-2">الحالة</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">1001</td>
                    <td className="border px-4 py-2">أحمد</td>
                    <td className="border px-4 py-2 text-green-500">تم التوصيل</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-2">1002</td>
                    <td className="border px-4 py-2">محمد</td>
                    <td className="border px-4 py-2 text-yellow-500">في الطريق</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        };

        export default OrdersList;
    