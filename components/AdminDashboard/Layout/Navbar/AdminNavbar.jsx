import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FiMenu, FiBell, FiUser } from 'react-icons/fi';
import Link from 'next/link';
import { selectUser, logoutUserThunk } from '../../../../store/slices/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useSidebar } from '../../../../hooks/SidbarContext';
import { useRouter } from 'next/router';

const AdminNavbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { toggleSidebar, toggleMobileSidebar, isSidebarOpen } = useSidebar();
  const [isNotificationsMenuOpen, setNotificationsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const router = useRouter();

  const notificationsRef = useRef(null);
  const profileRef = useRef(null);
  useEffect(() => {
    if (!user) router.push('/');
  }, [user, router]); // Added `router` to the dependency array
  

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target)
      ) {
        setNotificationsMenuOpen(false);
      }
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleNotificationsMenu = () => setNotificationsMenuOpen(prev => !prev);
  const toggleProfileMenu = () => setProfileMenuOpen(prev => !prev);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header
      className={`z-10 py-4 bg-white shadow-md dark:bg-gray-800 transition-all duration-300 ${
        isSidebarOpen ? 'md:mr-64' : 'md:mr-0'
      }`}
    >
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        
        {/* Mobile hamburger */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={toggleMobileSidebar}
        >
          <FiMenu className="w-6 h-6" />
        </button>

        {/* Desktop sidebar toggle button */}
        <button
          className="hidden md:block p-1 rounded-md focus:outline-none focus:shadow-outline-purple"
          onClick={toggleSidebar}
        >
          <FiMenu className="w-6 h-6" />
        </button>

        {/* Profile and Notifications */}
        <ul className="flex items-center space-x-2">
          
          {/* Notifications */}
          <li className="relative ml-4" ref={notificationsRef}>
            <button
              onClick={toggleNotificationsMenu}
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
              aria-label="Notifications"
            >
              <FiBell className="w-5 h-5" />
              <span className="absolute top-0 left-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full"></span>
            </button>
            {isNotificationsMenuOpen && (
              <ul className="absolute left-0 w-56 p-2 mt-2 space-y-2 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:bg-gray-700">
                <li className="flex">
                  <Link href="#" className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                    Messages
                  </Link>
                </li>
                <li className="flex">
                  <Link href="#" className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                    Sales
                    <span className="px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full">2</span>
                  </Link>
                </li>
                <li className="flex">
                  <Link href="#" className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                    Alerts
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Profile */}
          <li className="relative" ref={profileRef}>
            <button
              onClick={toggleProfileMenu}
              className="flex items-center align-middle rounded-full focus:outline-none"
              aria-label="Account"
            >
              <span className="ml-2 font-semibold hidden md:inline">{user.name}</span>
              {user.image ? (
                <Image
                  className="object-cover w-8 h-8 rounded-full"
                  src={user.image.path || '/path/to/default-image.png'}
                  alt="Profile"
                  width={32}
                  height={32}
                />
              ) : (
         
<Image
  className="object-cover w-8 h-8 rounded-full"
  src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
  alt="Default Profile"
  width={32} // العرض المناسب للصورة
  height={32} // الارتفاع المناسب للصورة
  priority={false} // تحميل بطيء
/>
              )}
            </button>
            {isProfileMenuOpen && (
              <ul className="absolute left-0 w-56 p-2 mt-2 space-y-2 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:bg-gray-700">
                <li className="flex">
                  <Link href="#" className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                    <FiUser className="w-4 h-4 mr-3" />
                    Profile
                  </Link>
                </li>
                <li className="flex">
                  <Link href="#" className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                    <FiUser className="w-4 h-4 mr-3" />
                    Settings
                  </Link>
                </li>
                <li className="flex">
                  <Link href="#" onClick={() => dispatch(logoutUserThunk())} className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                    <FiUser className="w-4 h-4 mr-3" />
                    Log out
                  </Link>
                </li>
              </ul>
            )}
          </li>

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
        </ul>
      </div>
    </header>
  );
};

export default AdminNavbar;
