import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  AiOutlineLogin,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineInfoCircle,
} from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logoutUserThunk } from '../../store/slices/authSlice';
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid';
import { useDarkMode } from '../../hooks/useDarkMode'; // Import the custom hook
import { FiUser } from 'react-icons/fi';

const Nav = () => {
  const cartItems = useSelector(state => state.cart.items);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const { isDarkMode, toggleDarkMode } = useDarkMode(); // Use the custom hook

  const profileMenuRef = useRef(null);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUserThunk());
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setProfileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [profileMenuRef]);

  return (
    <nav
      className="flex justify-between items-center py-4 px-6 lg:px-8 bg-[var(--color-primary-day)] dark:bg-[var(--color-primary-night)] text-[var(--color-secondary-day)] dark:text-[var(--color-secondary-night)] shadow-md"
      style={{ direction: 'rtl' }}
    >
      {/* Logo */}
      <Link href="/">
        <div className="relative w-[80px] h-[45px] lg:w-[100px] lg:h-[55px]">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            fill // استخدم fill هنا بدلاً من layout
            style={{ objectFit: 'contain' }} // استخدم style لتحديد كيفية عرض الصورة
            priority // تبقى هذه الخاصية إذا كنت بحاجة لتحميل الصورة بأولوية
          />
        </div>
      </Link>

      {/* Search Bar */}
      <div className="hidden md:flex items-center w-full max-w-md mx-4 lg:mx-6">
        <input
          type="text"
          placeholder="ابحث عن المنتجات..."
          className="px-4 py-2 w-full rounded-lg border-none focus:outline-none text-[var(--color-muted-text-day)] dark:text-[var(--color-muted-text-night)] bg-[var(--color-background-day)] dark:bg-[var(--color-background-night)]"
        />
      </div>

      {/* Navigation Menu */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6">
        {!user ? (
          <>
            {/* Show Login and Register Links for guests */}
            <Link
              href="/login"
              className="font-semibold flex items-center text-[var(--color-secondary-day)] dark:text-[var(--color-secondary-night)]"
            >
              <AiOutlineLogin size={25} className="ml-2" />
              دخول
            </Link>
            <Link
              href="/register"
              className="font-semibold flex items-center text-[var(--color-secondary-day)] dark:text-[var(--color-secondary-night)]"
            >
              <AiOutlineUser size={25} className="ml-2" />
              تسجيل
            </Link>
            <Link
              href="/about"
              className="font-semibold flex items-center text-[var(--color-secondary-day)] dark:text-[var(--color-secondary-night)]"
            >
              <AiOutlineInfoCircle size={25} className="ml-2" />
              حولنا
            </Link>
          </>
        ) : (
          <div
            className="flex items-center gap-2 relative"
            ref={profileMenuRef}
          >
            {/* Display user name and profile image inline */}
            <button
              className="flex items-center align-middle rounded-full focus:outline-none"
              onClick={toggleProfileMenu}
              aria-label="Account"
            >
              <span className="ml-2 font-semibold">{user.name}</span>
              {user.image ? (
                <Image
                  className="object-cover w-8 h-8 rounded-full"
                  src={user.image.path} // استخدم المسار الصحيح للصورة
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

            {/* Dropdown Menu */}
            {isProfileMenuOpen && (
              <ul className="absolute left-4 w-56 p-2 top-full mt-2 space-y-2 bg-white border text-gray-800 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:bg-gray-700 z-20">
                <li className="flex">
                  <Link
                    href="/profile"
                    className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold hover:bg-red-400 "
                  >
                    <FiUser className="w-4 h-4 mr-3" />
                    <span>ملفي الشخصي</span>
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    href="/settings"
                    className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold hover:bg-red-400 "
                  >
                    <FiUser className="w-4 h-4 mr-3" />
                    <span>الإعدادات</span>
                  </Link>
                </li>
                <li className="flex">
                  <button
                    onClick={handleLogout}
                    className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold hover:bg-red-400 "
                  >
                    <FiUser className="w-4 h-4 mr-3" />
                    <span>تسجيل الخروج</span>
                  </button>
                </li>
              </ul>
            )}
          </div>
        )}

        {/* Cart (visible for all users) */}
        <Link href="/cart" className="relative flex items-center">
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -left-2 bg-[var(--color-secondary-day)] dark:bg-[var(--color-secondary-night)] text-[var(--color-primary-day)] dark:text-[var(--color-primary-night)] rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              {cartItems.length}
            </span>
          )}
          <AiOutlineShoppingCart size={30} />
        </Link>

        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode}>
          {isDarkMode ? (
            <SunIcon className="h-6 w-6 text-[var(--color-secondary-night)]" />
          ) : (
            <MoonIcon className="h-6 w-6 text-[var(--color-secondary-day)]" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
