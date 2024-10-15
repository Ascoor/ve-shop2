import Image from "next/image";
import Link from "next/link";
import { ListboxButton, Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlineLogin, AiOutlineUser, AiOutlineShoppingCart, AiOutlineInfoCircle } from "react-icons/ai"; // Adding the Info icon
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logoutUserThunk } from "../../store/slices/authSlice";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Nav = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUserThunk());
  };

  // التحقق من حالة المستخدم
  const isGuest = !user || !user.role_id; // التحقق إذا كان المستخدم زائرًا أو ليس لديه role_id
  const isAdminOrEmployee = user && (user.role_id === 1 || user.role_id === 2); // التحقق إذا كان المستخدم Admin أو Employee

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-gradient-to-r from-red-500 to-red-700 text-white shadow-md" style={{ direction: 'rtl' }}>
      {/* Logo */}
      <Link href="/">
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={80}
          height={50}
          className="w-20 md:w-25 lg:w-30 rounded-full cursor-pointer"
        />
      </Link>

      {/* Search Bar (يظهر فقط للمستخدمين role_id = 3 أو الزائرين) */}
      {isGuest || (user && user.role_id === 3) ? (
        <div className="hidden md:flex items-center">
          <input
            type="text"
            placeholder="ابحث عن المنتجات..."
            className="px-4 py-2 rounded-lg border-none focus:outline-none text-gray-700"
          />
        </div>
      ) : null}

      {/* Navigation Menu */}
      <div className="hidden md:flex items-center gap-6">
          {/* Cart (يظهر فقط للمستخدمين role_id = 3 أو الزائرين) */}
          {(isGuest || (user && user.role_id === 3)) && (
          <Link href="/cart" className="relative flex items-center">
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -left-2 bg-white text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                {cartItems.length}
              </span>
            )}
            <AiOutlineShoppingCart size={30} />
            <span className="mr-2 hidden md:inline-block">السلة</span>
          </Link>
        )}
      
        {user ? (
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex items-center justify-center w-full rounded-md bg-red-600 px-4 py-2 text-sm font-medium hover:bg-red-700 focus:outline-none">
              {user.name}
              <ChevronDownIcon className="mr-2 -ml-1 h-5 w-5 text-white hover:text-gray-300" aria-hidden="true" />
            </Menu.Button>
            <Transition as={Fragment}>
              <Menu.Items className="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {/* Profile */}
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/profile" className={`${active ? "bg-red-500 text-white" : "text-gray-700"} group flex items-center px-4 py-2 text-sm`}>
                        ملفي الشخصي
                      </Link>
                    )}
                  </Menu.Item>

                  {/* Logout */}
                  <Menu.Item>
                    {({ active }) => (
                      <button onClick={handleLogout} className={`${active ? "bg-red-500 text-white" : "text-gray-700"} group flex items-center px-4 py-2 text-sm w-full`}>
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
            <Link href="/login" className="font-semibold flex items-center">
              <AiOutlineLogin size={25} className="ml-2" />
              دخول
            </Link>
            <Link href="/register" className="font-semibold flex items-center">
              <AiOutlineUser size={25} className="ml-2" />
              تسجيل
            </Link>
          </>
        )}
  {/* "حولنا" يظهر فقط للمستخدمين role_id = 3 أو الزائرين */}
  {(isGuest || (user && user.role_id === 3)) && (
          <Link href="/about" className="font-semibold flex items-center">
            <AiOutlineInfoCircle size={25} className="ml-2" />
            حولنا
          </Link>
        )}

      
      </div>
    </nav>
  );
};

export default Nav;
