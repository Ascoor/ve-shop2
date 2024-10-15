
        import React, { useState } from 'react';

        const AddProduct = () => {
          const [name, setName] = useState('');
          const [price, setPrice] = useState('');

          const handleSubmit = (e) => {
            e.preventDefault();
            console.log('Product added:', { name, price });
          };

          return (
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-6">إضافة منتج جديد</h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">اسم المنتج:</label>
                  <input type="text" className="border p-2 w-full" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium">سعر المنتج:</label>
                  <input type="number" className="border p-2 w-full" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">إضافة المنتج</button>
              </form>
            </div>
          );
        };

        export default AddProduct;
    