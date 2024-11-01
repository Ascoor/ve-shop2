import { useState } from 'react';
import { sections } from '../../../components/common/sectionData';
import { useSidebar } from '../../../hooks/SidbarContext';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillCloseSquare } from "react-icons/ai";

const AdminSidebar = ({ onSectionChange }) => {
  const { isSidebarOpen, toggleSidebar, isMobileSidebarOpen, toggleMobileSidebar } = useSidebar();
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleLinkClick = (link) => {
    onSectionChange(link);
    toggleMobileSidebar(); // Close the sidebar on mobile after a link is clicked
  };

  return (
    <aside
    className={`z-20 ${isMobileSidebarOpen ? 'fixed inset-0 bg-white dark:bg-gray-800' : 'hidden md:block bg-white dark:bg-gray-800'} transition-all duration-300`}
  >
    <div className="py-4 text-gray-500 dark:text-gray-400 h-full">
      {/* Header with Logo and Close Button */}
      <div className="flex items-center justify-between mt-6">
  {/* الشعار */}
  <Link href="/" className="flex justify-center mx-auto">
    <div className={`relative ${isSidebarOpen ? 'w-[100px] h-[55px]' : 'w-[80px] h-[45px]'} transition-all duration-300`}>
      <Image
        src="/assets/logo.png"
        alt="Logo"
        fill
        style={{ objectFit: 'contain' }}
        priority
      />
    </div>
  </Link>

  {/* Close Button for Mobile */}
  {isMobileSidebarOpen && (
    <button className="text-gray-500 dark:text-gray-400 ml-2" onClick={toggleMobileSidebar}>
      <AiFillCloseSquare size={32} />
    </button>
  )}
</div>

        <ul className="mt-4">
          {sections.map((section) => (
            <li key={section.id} className="px-6 py-3">
              <button onClick={() => handleMenuClick(section.name)} className="flex items-center w-full">
                <section.icon className="w-5 h-5" />
                <span className={`mr-6 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>{section.name}</span>
              </button>
              {activeMenu === section.name && (
                <ul className="pr-12 mt-2 space-y-2">
                  {section.dropdown.map((item) => (
                    <li key={item.id}>
                      <button onClick={() => handleLinkClick(item.link)} className="block">
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
  );
};

export default AdminSidebar;
