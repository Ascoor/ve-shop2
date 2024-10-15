import React, { useState } from 'react';
import { useGetProductsQuery, useGetCategoriesQuery, useGetBrandsQuery } from '../../../store/services/productApi'; // API queries

const ProductListings = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectAll, setSelectAll] = useState(false);
  const [filterCategory, setFilterCategory] = useState('');
  const [filterBrand, setFilterBrand] = useState('');

  // Fetch products, categories, and brands from the API
  const { data: products = [], isLoading, error } = useGetProductsQuery();
  const { data: categories = [] } = useGetCategoriesQuery();
  const { data: brands = [] } = useGetBrandsQuery();

  // Sorting logic
  const sortedProducts = [...products].sort((a, b) => {
    if (sortColumn) {
      return sortOrder === "asc"
        ? a[sortColumn] < b[sortColumn] ? -1 : 1
        : a[sortColumn] > b[sortColumn] ? -1 : 1;
    }
    return 0;
  });

  // Filter products by category and brand
  const filteredProducts = sortedProducts.filter((product) => {
    const categoryMatch = filterCategory ? product.category?.id === parseInt(filterCategory) : true;
    const brandMatch = filterBrand ? product.brand?.id === parseInt(filterBrand) : true;
    return categoryMatch && brandMatch;
  });

  const handleSelectAll = (e) => {
    setSelectAll(e.target.checked);
    setSelectedProducts(e.target.checked ? filteredProducts.map((product) => product.id) : []);
  };

  const handleSort = (column) => {
    setSortOrder(sortColumn === column && sortOrder === "asc" ? "desc" : "asc");
    setSortColumn(column);
  };

  const handleSelectProduct = (productId) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((id) => id !== productId)
        : [...prevSelected, productId]
    );
  };

  const sortSvg = (column) => (
    sortColumn === column && (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        {sortOrder === "asc" ? <path d="M7 10l5 5 5-5z" /> : <path d="M7 14l5-5 5 5z" />}
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    )
  );

  // Handle loading and error states
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>There was an error fetching the products.</p>;

  return (
    <div className="bg-white p-4 font-raleway">
      <div className="flex flex-row justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Products Table</h2>
        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Add Product</button>
      </div>

      {/* Filter Section */}
      <div className="flex justify-end my-6">
        <div className="mr-8">
          <select
            className="border-b border-gray-400 focus:outline-none sm:w-auto md:w-48"
            value={filterBrand}
            onChange={(e) => setFilterBrand(e.target.value)}
          >
            <option value="">Brand</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mr-8">
          <select
            className="border-b border-gray-400 focus:outline-none sm:w-auto md:w-48"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="px-4 py-2 text-left w-3">
              <input
                className="accent-purple-600"
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th onClick={() => handleSort("name")}>
              <div className="flex flex-row justify-center items-center">
                <p>Product</p>
                {sortSvg("name")}
              </div>
            </th>
            <th onClick={() => handleSort("category")}>
              <div className="flex flex-row justify-center items-center">
                <p>Category</p>
                {sortSvg("category")}
              </div>
            </th>
            <th onClick={() => handleSort("brand")}>
              <div className="flex flex-row justify-center items-center">
                <p>Brand</p>
                {sortSvg("brand")}
              </div>
            </th>
            <th onClick={() => handleSort("price")}>
              <div className="flex flex-row justify-center items-center">
                <p>Price</p>
                {sortSvg("price")}
              </div>
            </th>
            <th onClick={() => handleSort("stock")}>
              <div className="flex flex-row justify-center items-center">
                <p>Stock</p>
                {sortSvg("stock")}
              </div>
            </th>
            <th onClick={() => handleSort("totalSales")}>
              <div className="flex flex-row justify-center items-center">
                <p>Total Sales</p>
                {sortSvg("totalSales")}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id} className={`${selectedProducts.includes(product.id) ? "bg-gray-100" : ""} border-b border-gray-200`}>
              <td className="px-4 py-3">
                <input
                  type="checkbox"
                  onChange={() => handleSelectProduct(product.id)}
                  checked={selectedProducts.includes(product.id)}
                  className="text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-600 accent-purple-600"
                />
              </td>
              <td className="px-4 py-3 text-gray-600 text-center">{product.name}</td>
              <td className="px-4 py-3 text-gray-600 text-center">{product.category?.name}</td>
              <td className="px-4 py-3 text-gray-600 text-center">{product.brand?.name}</td>
              <td className="px-4 py-3 text-gray-600 text-center">{product.price}</td>
              <td className="px-4 py-3 text-gray-600 text-center">{product.stock?.quantity}</td> {/* Render stock quantity */}
              <td className="px-4 py-3 text-gray-600 text-center">{product.totalSales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductListings;
