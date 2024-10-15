import { Fragment, useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { categories } from "../../data";
import { AiOutlineInfoCircle, AiOutlineLogout, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { logoutUserThunk, selectUser } from "../../store/slices/authSlice";
import { Disclosure } from "@headlessui/react";

const ResponsiveNavbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector(selectUser); // جلب بيانات المستخدم من Redux
  const [openNav, setOpenNav] = useState(false);
  const dispatch = useDispatch();

  const handleNav = () => setOpenNav(!openNav);
  const logoutUser = () => dispatch(logoutUserThunk());

  // Handle page scroll behavior when the nav is open/closed
  useEffect(() => {
    if (openNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openNav]);

  // التحقق من حالة المستخدم
  const isGuest = !user || !user.role_id; // التحقق إذا كان المستخدم زائرًا أو ليس لديه role_id
  const isUser = user && user.role_id === 3; // التحقق إذا كان المستخدم عادي
  const isAdminOrEmployee = user && (user.role_id === 1 || user.role_id === 2); // التحقق إذا كان المستخدم Admin أو Employee

  return (
    <Fragment>
      <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
        <div className="flex items-center w-full justify-between">
          <Link href="/">
            <div className="relative w-[75px] h-[50px]">
              <Image
                src="/assets/logo.png"
                alt="logo"
                fill
                sizes="(max-width: 768px) 100vw, 
                       (max-width: 1200px) 50vw, 
                       33vw"
                className="cursor-pointer rounded-full"
                priority
              />
            </div>
          </Link>
          <div onClick={handleNav} className="md:hidden text-gray-700">
            <Bars3Icon className="h-8 w-8" />
          </div>
        </div>

        {openNav && (
          <div
            id="nav"
            className="md:hidden z-50 fixed right-0 top-0 w-full h-screen bg-black/70"
            onClick={(e) => {
              if (e.target.id === "nav") setOpenNav(false);
            }}
          >
            <div
              className={`fixed z-50 right-0 top-0 w-[85%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-6 transition-all duration-700 ease-in-out overflow-y-auto`}
            >
              <div className="flex w-full items-center justify-between">
                <Link href="/" onClick={() => setOpenNav(false)}>
                  <div className="relative w-[75px] h-[50px]">
                    <Image
                      src="/assets/logo.png"
                      alt="logo"
                      fill
                      sizes="(max-width: 768px) 100vw, 
                             (max-width: 1200px) 50vw, 
                             33vw"
                      className="cursor-pointer rounded-full"
                      priority
                    />
                  </div>
                </Link>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer"
                >
                  <XMarkIcon className="h-4 w-4 text-gray-500" />
                </div>
              </div>

              {/* Search Bar, Cart, and Categories: Only for role_id = 3 (User) */}
              {(isGuest || isUser) && (
                <>
                  {/* Search Bar */}
                  <div className='border-gray-300 my-4'>
                    <input
                      type='text'
                      placeholder='Search'
                      className='px-8 w-full border-none rounded-lg py-2 text-gray-700 focus:outline-none'
                    />
                  </div>

                  {/* Cart */}
                  <Link href="/cart" className="relative flex items-center" onClick={() => setOpenNav(false)}>
                    <AiOutlineShoppingCart size={30} />
                    {cartItems.length > 0 && (
                      <span className="absolute -top-2 -left-2 bg-white text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                        {cartItems.length}
                      </span>
                    )}
                    <span className="mr-2 hidden md:inline-block">السلة</span>
                  </Link>

                  {/* Categories */}
                  <div className="py-4 flex flex-col border-b">
                    <h1 className="text-xl font-semibold">الأقسام والمنتجات</h1>
                    <div className="flex flex-col gap-4 mt-4">
                      {categories.map((category) => (
                        <Disclosure as='div' key={category.id}>
                          {({ open }) => (
                            <>
                              <Disclosure.Button className='flex items-center w-full py-2 text-gray-700 hover:text-[#E43038] focus:outline-none'>
                                <span className='text-sm font-semibold'>{category.name}</span>
                                <ChevronRightIcon className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${open ? "rotate-90" : ""}`} />
                              </Disclosure.Button>
                              <Disclosure.Panel className='p-2 text-md font-semibold grid grid-cols-2 gap-4 text-gray-500'>
                                {category.dropdown.map((subCategory) => (
                                  <Link key={subCategory.id} href='#' onClick={() => setOpenNav(false)}>
                                    <p className='cursor-pointer hover:text-[#E43038]'>{subCategory.name}</p>
                                  </Link>
                                ))}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* About and User Actions */}
              <div className="flex flex-col gap-4 mt-4">
                <Link href="/about" onClick={() => setOpenNav(false)} className="text-sm font-semibold text-gray-700 hover:text-red-600 flex items-center gap-2">
                  <AiOutlineInfoCircle />
                  حولنا
                </Link>

                {user ? (
                  <div className='flex flex-col items-center ml-4'>
                    <div className='flex items-center'>
                      <AiOutlineUser className='text-2xl text-gray-700' />
                      <span className='text-gray-700 font-semibold text-lg ml-2'>{user.name}</span>
                    </div>
                    <button
                      onClick={logoutUser}
                      className='ml-4 text-gray-700 font-semibold text-lg'>
                      تسجيل الخروج
                    </button>
                  </div>
                ) : (
                  <div className='flex flex-col items-center w-full ml-4'>
                    <Link href='/login' onClick={() => setOpenNav(false)}>
                      <button className='w-full bg-red-600 text-white font-semibold text-sm py-2 rounded-md hover:bg-red-700'>
                        تسجيل الدخول
                      </button>
                    </Link>
                    <Link href='/register' onClick={() => setOpenNav(false)}>
                      <button className='w-full bg-red-600 text-white font-semibold text-sm py-2 rounded-md mt-4 hover:bg-red-700'>
                        تسجيل مستخدم جديد
                      </button>
                    </Link>     
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ResponsiveNavbar;
