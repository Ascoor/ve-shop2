import Image from "next/image";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { useDarkMode } from "../../hooks/useDarkMode"; // Import the custom hook
import { Fragment } from "react";
import { AiOutlineLogin, AiOutlineUser, AiOutlineShoppingCart, AiOutlineInfoCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logoutUserThunk } from "../../store/slices/authSlice";
import { ChevronDownIcon, SunIcon, MoonIcon } from "@heroicons/react/20/solid";

const Nav = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const { isDarkMode, toggleDarkMode } = useDarkMode(); // Use the custom hook

  const handleLogout = () => {
    dispatch(logoutUserThunk());
  };

  const isGuest = !user || !user.role_id; 
  const isAdminOrEmployee = user && (user.role_id === 1 || user.role_id === 2); 

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
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </Link>

      {/* Search Bar (for guests or users with role_id = 3) */}
      {(isGuest || (user && user.role_id === 3)) && (
        <div className="hidden md:flex items-center w-full max-w-md mx-4 lg:mx-6">
          <input
            type="text"
            placeholder="ابحث عن المنتجات..."
            className="px-4 py-2 w-full rounded-lg border-none focus:outline-none text-[var(--color-muted-text-day)] dark:text-[var(--color-muted-text-night)] bg-[var(--color-background-day)] dark:bg-[var(--color-background-night)]"
          />
        </div>
      )}

      {/* Navigation Menu */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6">
        {user ? (
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex items-center justify-center w-full rounded-md bg-[var(--color-primary-day)] dark:bg-[var(--color-primary-night)] px-4 py-2 text-sm font-medium hover:bg-[var(--color-button-hover-day)] dark:hover:bg-[var(--color-button-hover-night)] focus:outline-none">
              {user.name}
              <ChevronDownIcon className="mr-2 -ml-1 h-5 w-5 text-[var(--color-secondary-day)] dark:text-[var(--color-secondary-night)] hover:text-gray-300" aria-hidden="true" />
            </Menu.Button>
            <Transition as={Fragment}>
              <Menu.Items className="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-[var(--color-secondary-day)] dark:bg-[var(--color-component-background-night)] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/profile" className={`${active ? "bg-[var(--color-primary-day)] dark:bg-[var(--color-primary-night)] text-[var(--color-secondary-day)] dark:text-[var(--color-secondary-night)]" : "text-[var(--color-muted-text-day)] dark:text-[var(--color-muted-text-night)]"} group flex items-center px-4 py-2 text-sm`}>
                        ملفي الشخصي
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button onClick={handleLogout} className={`${active ? "bg-[var(--color-primary-day)] dark:bg-[var(--color-primary-night)] text-[var(--color-secondary-day)] dark:text-[var(--color-secondary-night)]" : "text-[var(--color-muted-text-day)] dark:text-[var(--color-muted-text-night)]"} group flex items-center px-4 py-2 text-sm w-full`}>
                        <AiOutlineUser className="ml-2 h-5 w-5" />
                        تسجيل الخروج
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        ) : (
          <>
            <Link href="/login" className="font-semibold flex items-center text-[var(--color-secondary-day)] dark:text-[var(--color-secondary-night)]">
              <AiOutlineLogin size={25} className="ml-2" />
              دخول
            </Link>
            <Link href="/register" className="font-semibold flex items-center text-[var(--color-secondary-day)] dark:text-[var(--color-secondary-night)]">
              <AiOutlineUser size={25} className="ml-2" />
              تسجيل
            </Link>
          </>
        )}

        {/* About Section for guests or role_id = 3 */}
        {(isGuest || (user && user.role_id === 3)) && (
          <Link href="/about" className="font-semibold flex items-center text-[var(--color-secondary-day)] dark:text-[var(--color-secondary-night)]">
            <AiOutlineInfoCircle size={25} className="ml-2" />
            حولنا
          </Link>
        )}

        {/* Cart */}
        {(isGuest || (user && user.role_id === 3)) && (
          <Link href="/cart" className="relative flex items-center">
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -left-2 bg-[var(--color-secondary-day)] dark:bg-[var(--color-secondary-night)] text-[var(--color-primary-day)] dark:text-[var(--color-primary-night)] rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                {cartItems.length}
              </span>
            )}
            <AiOutlineShoppingCart size={30} />
          </Link>
        )}
      </div>

      {/* Dark Mode Toggle */}
      <div className="flex items-center gap-2 lg:gap-4">
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
