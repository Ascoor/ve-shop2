import { sections } from '../../../common/sectionData';
import { useState } from 'react';
import Link from 'next/link';
import { useSidebar } from '../../../../hooks/SidbarContext';
import Image from 'next/image';
import { FiHome } from 'react-icons/fi';

const AdminSidebar = ({ onSectionChange }) => {
  const { isSidebarOpen, isMobileSidebarOpen, toggleMobileSidebar, toggleSidebar } = useSidebar();
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleSectionClick = (link) => {
    onSectionChange(link.slice(1));
    toggleSidebar();
    if (isMobileSidebarOpen) toggleMobileSidebar();
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`z-20 hidden md:block bg-white dark:bg-gray-800 flex-shrink-0 transition-all duration-300 ${
          isSidebarOpen ? 'w-64' : 'w-16'
        } fixed top-0 bottom-0 right-0`}
      >
        <div className="py-4 text-gray-500 dark:text-gray-400">
          {/* Logo */}
          <Link href="/" className="flex justify-center mb-6">
            <div
              className={`relative ${isSidebarOpen ? 'w-[100px] h-[55px]' : 'w-[80px] h-[45px]'} transition-all duration-300`}
            >
              <Image
                src="/assets/logo.png"
                alt="Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </Link>

          {/* Main Section */}
          <ul className="mt-6">
            <li className="relative px-6 py-3">
              <button
                onClick={() => handleSectionClick('/home')}
                className="flex items-center w-full text-sm font-semibold text-gray-800 hover:text-purple-600 dark:hover:text-purple-300 dark:text-gray-100 transition-colors duration-150"
              >
                <FiHome className="w-5 h-5" />
                <span
                  className={`mr-6 transition-opacity duration-300 ${
                    isSidebarOpen ? 'opacity-100' : 'opacity-0 hidden'
                  }`}
                >
                  الرئيسية
                </span>
              </button>
            </li>
          </ul>

          {/* Other Sections */}
          <ul className="mt-4">
            {sections.map((section) => (
              <li key={section.id} className="relative px-6 py-3">
                <button
                  onClick={() => handleMenuClick(section.name)}
                  className="flex items-center w-full text-sm font-semibold text-gray-800 hover:text-purple-600 dark:hover:text-purple-300 dark:text-gray-100 transition-colors duration-150"
                >
                  <section.icon className="w-5 h-5" />
                  <span
                    className={`mr-6 transition-opacity duration-300 ${
                      isSidebarOpen ? 'opacity-100' : 'opacity-0 hidden'
                    }`}
                  >
                    {section.name}
                  </span>
                </button>
                {activeMenu === section.name && isSidebarOpen && (
                  <ul className="pr-12 mt-2 space-y-2 text-sm">
                    {section.dropdown.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => handleSectionClick(item.link)}
                          className="block text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300"
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {isMobileSidebarOpen && (
        <aside className="fixed inset-y-0 right-0 z-20 w-full bg-white dark:bg-gray-800 md:hidden transition-all duration-300">
          <div className="py-4 text-gray-500 dark:text-gray-400">
            <button className="ml-auto mr-4" onClick={toggleMobileSidebar}>
              Close
            </button>
            <Link href="/" className="mr-6 text-lg font-bold text-gray-800 dark:text-gray-200">
              لوحة التحكم
            </Link>

            <ul className="mt-6">
              <li className="relative px-6 py-3">
                <button
                  onClick={() => handleSectionClick('/home')}
                  className="flex items-center w-full text-sm font-semibold text-gray-800 hover:text-purple-600 dark:hover:text-purple-300 dark:text-gray-100 transition-colors duration-150"
                >
                  <FiHome className="w-5 h-5" />
                  <span className="mr-6">الرئيسية</span>
                </button>
              </li>
              {sections.map((section) => (
                <li key={section.id} className="relative px-6 py-3">
                  <button
                    onClick={() => handleMenuClick(section.name)}
                    className="flex items-center w-full text-sm font-semibold text-gray-800 hover:text-purple-600 dark:hover:text-purple-300 dark:text-gray-100 transition-colors duration-150"
                  >
                    <section.icon className="w-5 h-5" />
                    <span className="mr-6">{section.name}</span>
                  </button>
                  {activeMenu === section.name && (
                    <ul className="pr-12 mt-2 space-y-2 text-sm">
                      {section.dropdown.map((item) => (
                        <li key={item.id}>
                          <button
                            onClick={() => handleSectionClick(item.link)}
                            className="block text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300"
                          >
                            {item.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
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
