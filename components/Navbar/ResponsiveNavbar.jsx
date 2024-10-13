import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLogout, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { logoutUserThunk, selectUser } from "../../store/slices/authSlice";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";
import { categories } from "../../data";

const ResponsiveNavbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector(selectUser);
  const [openNav, setOpenNav] = useState(false);
  const dispatch = useDispatch();

  const handleNav = () => setOpenNav(!openNav);

  const logoutUser = () => dispatch(logoutUserThunk());

  // استخدام useEffect للإغلاق عند الضغط خارج الشريط
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (openNav && !e.target.closest('.nav-container')) {
        setOpenNav(false); // إغلاق الشريط إذا تم الضغط خارج الشريط
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [openNav]);

  return (
    <Fragment>
      <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md" style={{ direction: 'rtl' }}>
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer rounded-full"
          />
        </Link>
        <div onClick={handleNav} className="md:hidden text-gray-700">
          <Bars3Icon className="h-8 w-8" />
        </div>
      </div>

      {openNav && (
        <div className="md:hidden z-50 fixed left-0 top-0 w-full h-screen bg-black/70">
          <div className="fixed z-50 left-0 top-0 w-[85%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-6 ease-in duration-500 nav-container">
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src="/assets/logo.png"
                  alt="logo"
                  width={75}
                  height={50}
                  className="cursor-pointer rounded-full"
                  onClick={() => setOpenNav(false)} // إغلاق الشريط عند الضغط على الرابط
                />
              </Link>
              <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer">
                <XMarkIcon className="h-4 w-4 text-gray-500" />
              </div>
            </div>
            <div className="border-gray-300 my-4">
              <input
                type="text"
                placeholder="ابحث..."
                className="px-8 w-full border-none rounded-lg py-2 text-gray-700 focus:outline-none"
              />
            </div>
            <div className="py-4 flex flex-col border-b">
              <h1 className="text-xl font-semibold">التصنيفات</h1>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
              {categories.map((category) => (
                <Disclosure as="div" key={category.id}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center w-full py-2 text-gray-700 hover:text-[#E43038]">
                        <span className="text-sm font-semibold">{category.name}</span>
                        <ChevronDownIcon className={`w-5 h-5 text-gray-500 ${open ? "transform rotate-180" : ""}`} />
                      </Disclosure.Button>
                      <Disclosure.Panel className="p-2 text-md font-semibold grid grid-cols-2 gap-4 text-gray-500">
                        {category.dropdown.map((subCategory) => (
                          <Link key={subCategory.id} href="#">
                            <p className="cursor-pointer hover:text-[#E43038]" onClick={() => setOpenNav(false)}> {/* إغلاق الشريط عند الضغط على رابط */}
                              {subCategory.name}
                            </p>
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
            <div className="flex mt-7 w-full items-center justify-between">
              {user ? (
                <div className="flex flex-col items-center">
                  <div className="flex items-center">
                    <AiOutlineUser className="text-2xl text-gray-700" />
                    <span className="text-gray-700 font-semibold text-lg ml-2">{user.displayName}</span>
                  </div>
                  <button onClick={logoutUser} className="ml-4 text-gray-700 font-semibold text-lg">
                    تسجيل الخروج
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center w-full">
                  <Link href="/login" className="bg-red-600 text-white py-2 px-4 rounded-md mt-4 w-full text-center" onClick={() => setOpenNav(false)}>
                    تسجيل الدخول
                  </Link>
                  <Link href="/register" className="bg-red-600 text-white py-2 px-4 rounded-md mt-4 w-full text-center" onClick={() => setOpenNav(false)}>
                    تسجيل
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ResponsiveNavbar;
