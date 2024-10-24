import { useState, useEffect } from "react";
import { FiMenu, FiSearch, FiBell, FiUser } from "react-icons/fi"; 
import Link from "next/link";
import { selectUser, logoutUserThunk } from "../../../../store/slices/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useSidebar } from "../../../../hooks/SidbarContext"; // Import sidebar context
import { useRouter } from 'next/router';

const AdminNavbar = () => {
  const { toggleSidebar, toggleMobileSidebar, isSidebarOpen } = useSidebar(); 
  const [isNotificationsMenuOpen, setNotificationsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const router = useRouter();

  // Toggle dark/light mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Handle redirect after logout
  const handleLogout = () => {
    dispatch(logoutUserThunk());
  };

  useEffect(() => {
    console.log('User state:', user);
    if (!user) {
      console.log('Redirecting to login...');
      router.push('/');
    }
  }, [user]);
  
  // Toggle notifications menu
  const toggleNotificationsMenu = () => {
    setNotificationsMenuOpen((prev) => !prev);
  };

  // Toggle profile menu
  const toggleProfileMenu = () => {
    setProfileMenuOpen((prev) => !prev);
  };

  return (
    <header className={`z-10 py-4 bg-white shadow-md dark:bg-gray-800 transition-all duration-300 ${isSidebarOpen ? 'md:mr-64' : 'md:mr-0'}`}>
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        {/* Mobile hamburger */}
        <button className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple" onClick={toggleMobileSidebar}>
          <FiMenu className="w-6 h-6" />
        </button>

        {/* Desktop toggle button */}
        <button className="hidden md:block p-1 rounded-md focus:outline-none focus:shadow-outline-purple" onClick={toggleSidebar}>
          <FiMenu className="w-6 h-6" />
        </button>

        {/* Search input */}
        <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <div className="absolute inset-y-0 flex items-center pr-2">
              <FiSearch className="w-4 h-4" />
            </div>
            <input className="w-full pr-8 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:bg-gray-700 dark:text-gray-200 focus:bg-white focus:outline-none focus:shadow-outline-purple" type="text" placeholder="Search for projects" aria-label="Search" />
          </div>
        </div>

        {/* Profile and Notifications */}
        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* Theme toggler */}
          <li className="flex pl-6">
            <button className="rounded-md focus:outline-none focus:shadow-outline-purple" onClick={toggleTheme} aria-label="Toggle color mode">
              {darkMode ? (
                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              ) : (
                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path>
                </svg>
              )}
            </button>
          </li>
          {/* Notifications menu */}
          <li className="relative">
            <button
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={toggleNotificationsMenu}
              aria-label="Notifications"
            >
              <FiBell className="w-5 h-5" />
              <span className="absolute top-0 left-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full"></span>
            </button>
            {isNotificationsMenuOpen && (
              <ul className="absolute left-0 w-56 p-2 mt-2 space-y-2 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:bg-gray-700">
                <li className="flex">
                  <Link href="#" className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                    Messages
                  </Link>
                </li>
                <li className="flex">
                  <Link href="#" className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                    Sales
                    <span className="px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full">
                      2
                    </span>
                  </Link>
                </li>
                <li className="flex">
                  <Link href="#" className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                    Alerts
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Profile menu */}
          <li className="relative">
            <button
              className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
              onClick={toggleProfileMenu}
              aria-label="Account"
            >
              <img
                className="object-cover w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                alt="Profile"
              />
            </button>

            {isProfileMenuOpen && (
              <ul className="absolute left-0 w-56 p-2 mt-2 space-y-2 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:bg-gray-700">
                <li className="flex">
                  <Link href="#" className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                    <FiUser className="w-4 h-4 mr-3" />
                    <span>Profile</span>
                  </Link>
                </li>
                <li className="flex">
                  <Link href="#" className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                    <FiUser className="w-4 h-4 mr-3" />
                    <span>Settings</span>
                  </Link>
                </li>
                <li className="flex">
                  <Link href="#" onClick={handleLogout} className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                    <FiUser className="w-4 h-4 mr-3" />
                    <span>Log out</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default AdminNavbar;
