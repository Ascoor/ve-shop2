import { useState } from 'react';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';

// SidebarItem Component
const SidebarItem = ({ href, icon: Icon, label, children }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <li className="relative px-6 py-3">
      {/* For items with children, we use a button */}
      {children ? (
        <>
          <button
            onClick={toggleSubMenu}
            className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
          >
            <span className="inline-flex items-center">
              <Icon className="w-5 h-5" aria-hidden="true" />
              <span className="ml-4">{label}</span>
            </span>
            <FiChevronDown className="w-4 h-4" />
          </button>

          {isSubMenuOpen && (
            <ul className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900">
              {children}
            </ul>
          )}
        </>
      ) : (
        <Link href={href} legacyBehavior>
          <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
            <Icon className="w-5 h-5" aria-hidden="true" />
            <span className="ml-4">{label}</span>
          </a>
        </Link>
      )}
    </li>
  );
};
export default SidebarItem