import { FiBox, FiTag, FiUsers, FiTruck, FiPackage, FiUser, FiLayers, FiBarChart } from 'react-icons/fi';
import { useState } from 'react';
import Link from 'next/link';
import { useSidebar } from '../../../../hooks/SidbarContext';
import Image from 'next/image'; // Import Image component

const AdminSidebar = () => {
  const { isSidebarOpen, isMobileSidebarOpen, toggleMobileSidebar } = useSidebar();
  const [activeMenu, setActiveMenu] = useState(null); // State to track which menu is open

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu); // Toggle menu
  };

  return (
    <>
      {/* Desktop Sidebar */}
<aside
        className={`z-20 hidden md:block bg-white dark:bg-gray-800 flex-shrink-0 transition-all duration-300 ${
          isSidebarOpen ? 'w-64' : 'w-16'
        }`}
        style={{ position: 'fixed', top: 0, bottom: 0, right: 0 }}
      >
        <div className="py-4 text-gray-500 dark:text-gray-400">
          <Link href="/" legacyBehavior  className="flex justify-center mb-6">
              <div className={`relative ${isSidebarOpen ? 'w-[100px] h-[55px]' : 'w-[80px] h-[45px]'} transition-all duration-300`}>
                <Image
                  src="/assets/logo.png"
                  alt="Logo"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>
          
          </Link>

          <ul className="mt-6">
            {/* المنتجات */}
            <li className="relative px-6 py-3">
              <button onClick={() => handleMenuClick('products')} className="flex items-center w-full text-sm font-semibold text-gray-800 hover:text-purple-600 dark:hover:text-purple-300 dark:text-gray-100 transition-colors duration-150">
                <FiBox className="w-5 h-5" />
                <span className={`mr-6 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
                  المنتجات
                </span>
              </button>
              {activeMenu === 'products' && isSidebarOpen && (
                <ul className="pr-12 mt-2 space-y-2 text-sm">
                  <li>
                    <Link href="/products/list" className="block text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300">قائمة المنتجات
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/add" className="block text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300">إضافة منتج جديد
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* التصنيفات */}
            <li className="relative px-6 py-3">
              <button onClick={() => handleMenuClick('categories')} className="flex items-center w-full text-sm font-semibold text-gray-800 hover:text-purple-600 dark:hover:text-purple-300 dark:text-gray-100 transition-colors duration-150">
                <FiTag className="w-5 h-5" />
                <span className={`mr-6 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
                  التصنيفات
                </span>
              </button>
              {activeMenu === 'categories' && isSidebarOpen && (
                <ul className="pr-12 mt-2 space-y-2 text-sm">
                  <li>
                    <Link href="/categories/list" className="block text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300">قائمة التصنيفات
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/add" className="block text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300">إضافة تصنيف جديد
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* المستخدمين */}
            <li className="relative px-6 py-3">
              <button onClick={() => handleMenuClick('users')} className="flex items-center w-full text-sm font-semibold text-gray-800 hover:text-purple-600 dark:hover:text-purple-300 dark:text-gray-100 transition-colors duration-150">
                <FiUsers className="w-5 h-5" />
                <span className={`mr-6 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
                  المستخدمين
                </span>
              </button>
              {activeMenu === 'users' && isSidebarOpen && (
                <ul className="pr-12 mt-2 space-y-2 text-sm">
                  <li>
                    <Link href="/users/list" className="block text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300">قائمة المستخدمين
                    </Link>
                  </li>
                  <li>
                    <Link href="/users/roles" className="block text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300">إدارة الأدوار
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* المخازن */}
            <li className="relative px-6 py-3">
              <button onClick={() => handleMenuClick('stores')} className="flex items-center w-full text-sm font-semibold text-gray-800 hover:text-purple-600 dark:hover:text-purple-300 dark:text-gray-100 transition-colors duration-150">
                <FiLayers className="w-5 h-5" />
                <span className={`mr-6 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
                  المخازن
                </span>
              </button>
              {activeMenu === 'stores' && isSidebarOpen && (
                <ul className="pr-12 mt-2 space-y-2 text-sm">
                  <li>
                    <Link href="/stores/list" className="block text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300">قائمة المخازن
                    </Link>
                  </li>
                  <li>
                    <Link href="/stores/add" className="block text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300">إضافة مخزن جديد
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* الطلبات */}
            <li className="relative px-6 py-3">
              <button onClick={() => handleMenuClick('orders')} className="flex items-center w-full text-sm font-semibold text-gray-800 hover:text-purple-600 dark:hover:text-purple-300 dark:text-gray-100 transition-colors duration-150">
                <FiPackage className="w-5 h-5" />
                <span className={`mr-6 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
                  الطلبات
                </span>
              </button>
              {activeMenu === 'orders' && isSidebarOpen && (
                <ul className="pr-12 mt-2 space-y-2 text-sm">
                  <li>
                    <Link href="/orders/list" className="block text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300">قائمة الطلبات
                    </Link>
                  </li>
                  <li>
                    <Link href="/orders/returns" className="block text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300">إدارة المرتجعات
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* الشحن */}
            <li className="relative px-6 py-3">
              <button onClick={() => handleMenuClick('shipping')} className="flex items-center w-full text-sm font-semibold text-gray-800 hover:text-purple-600 dark:hover:text-purple-300 dark:text-gray-100 transition-colors duration-150">
                <FiTruck className="w-5 h-5" />
                <span className={`mr-6 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
                  الشحن
                </span>
              </button>
              {activeMenu === 'shipping' && isSidebarOpen && (
                <ul className="pr-12 mt-2 space-y-2 text-sm">
                  <li>
                    <Link href="/shipping/list" className="block text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300">إدارة الشحن
                    </Link>
                  </li>
                  <li>
                    <Link href="/shipping/provide" className="block text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300">مزودي الشحن
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* التقارير */}
            <li className="relative px-6 py-3">
              <button onClick={() => handleMenuClick('reports')} className="flex items-center w-full text-sm font-semibold text-gray-800 hover:text-purple-600 dark:hover:text-purple-300 dark:text-gray-100 transition-colors duration-150">
                <FiBarChart className="w-5 h-5" />
                <span className={`mr-6 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
                  التقارير
                </span>
              </button>
              {activeMenu === 'reports' && isSidebarOpen && (
                <ul className="pr-12 mt-2 space-y-2 text-sm">
                  <li>
                    <Link href="/reports/sales" className="block text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300">تقارير المبيعات
                    </Link>
                  </li>
                  <li>
                    <Link href="/reports/inventor" className="block text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300">تقارير المخزون
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {isMobileSidebarOpen && (
<aside className="fixed inset-y-0 right-0 z-20 w-64 bg-white dark:bg-gray-800 md:hidden transition-all duration-300">
          <div className="py-4 text-gray-500 dark:text-gray-400">
            <button className="ml-auto mr-4" onClick={toggleMobileSidebar}>
              Close
            </button>
            <div className="py-4 text-gray-500 dark:text-gray-400">
              <Link href="#" legacyBehavio className="mr-6 text-lg font-bold text-gray-800 dark:text-gray-200">
                  لوحة التحكم
                
              </Link>
              <ul className="mt-6">
                <li className="relative px-6 py-3">
                  <Link href="/dashboard" legac className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100">
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span className="ml-4">Dashboard</span>
                    
                  </Link>
                </li>
                {/* Add more items here */}
              </ul>
            </div>
          </div>
        </aside>
      )}

      {/* Backdrop for Mobile Sidebar */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
          onClick={toggleMobileSidebar}
        ></div>
      )}
    </>
  );
};

export default AdminSidebar;
