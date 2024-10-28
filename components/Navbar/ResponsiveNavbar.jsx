import { Fragment, useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { categories } from '../../data';
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { logoutUserThunk, selectUser } from '../../store/slices/authSlice';
import { Disclosure } from '@headlessui/react';

const ResponsiveNavbar = () => {
  const cartItems = useSelector(state => state.cart.items);
  const user = useSelector(selectUser);
  const [openNav, setOpenNav] = useState(false);
  const dispatch = useDispatch();

  const handleNav = () => setOpenNav(!openNav);
  const logoutUser = () => {
    dispatch(logoutUserThunk());
    setOpenNav(false);
  };

  useEffect(() => {
    if (openNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openNav]);


  const handleLinkClick = () => {
    setOpenNav(false);
  };

  return (
    
      <Fragment>
        <div className="flex items-center justify-between px-4 py-2 bg-[var(--color-primary-day)] text-[var(--color-secondary-day)] shadow-md">
          <div className="flex items-center w-full justify-between">
            <Link href="/">
              <div
                className="relative w-[75px] h-[50px]"
                onClick={handleLinkClick}
              >
                <Image
                  src="/assets/logo.png"
                  alt="logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </Link>
  
            <div onClick={handleNav} className="md:hidden text-[var(--color-text-day)]">
              <Bars3Icon className="h-8 w-8" />
            </div>
  
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/cart"
                className="relative flex items-center text-[var(--color-primary-day)]"
                onClick={handleLinkClick}
              >
                <AiOutlineShoppingCart size={25} />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -left-2 bg-[var(--color-background-day)] text-[var(--color-primary-day)] rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {cartItems.length}
                  </span>
                )}
              </Link>
  
              {user ? (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">{user.name}</span>
                  <button
                    onClick={logoutUser}
                    className="bg-[var(--color-primary-day)] text-[var(--color-secondary-day)] font-semibold py-2 px-4 rounded-md hover:bg-[var(--color-button-hover-day)]"
                  >
                    تسجيل الخروج
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <Link href="/login" onClick={handleLinkClick}>
                    <button className="bg-[var(--color-primary-day)] text-[var(--color-secondary-day)] font-semibold py-2 px-4 rounded-md hover:bg-[var(--color-button-hover-day)]">
                      تسجيل الدخول
                    </button>
                  </Link>
                  <Link href="/register" onClick={handleLinkClick}>
                    <button className="bg-[var(--color-primary-day)] text-[var(--color-secondary-day)] font-semibold py-2 px-4 rounded-md hover:bg-[var(--color-button-hover-day)]">
                      تسجيل
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
  
          {openNav && (
            <div
              id="nav"
              className="md:hidden z-50 fixed right-0 top-0 w-full h-screen bg-black/70"
              onClick={e => {
                if (e.target.id === 'nav') setOpenNav(false);
              }}
            >
              <div className="fixed z-50 right-0 top-0 w-[85%] sm:w-[60%] md:w-[45%] h-screen bg-[var(--color-background-day)] p-6 transition-all duration-700 ease-in-out overflow-y-auto">
                <div className="flex w-full items-center justify-between">
                  <Link href="/" onClick={handleLinkClick}>
                    <div className="relative w-[75px] h-[50px]">
                      <Image
                        src="/assets/logo.png"
                        alt="logo"
                        layout="fill"
                        objectFit="contain"
                        priority
                      />
                    </div>
                  </Link>
                  <div
                    onClick={handleNav}
                    className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer"
                  >
                    <XMarkIcon className="h-4 w-4 text-[var(--color-text-day)]" />
                  </div>
                </div>
  
                <Link
                  href="/cart"
                  className="relative flex items-center justify-between bg-[var(--color-primary-day)] text-[var(--color-secondary-day)] font-semibold text-sm py-2 px-4 rounded-md mt-4 hover:bg-[var(--color-button-hover-day)]"
                  onClick={handleLinkClick}
                >
                  <AiOutlineShoppingCart size={30} />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-2 -left-2 bg-[var(--color-secondary-day)] text-[var(--color-primary-day)] rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      {cartItems.length}
                    </span>
                  )}
                  <span>السلة</span>
                </Link>
  
                <div className="py-4 flex flex-col border-b border-[var(--color-primary-day)]">
                  <h1 className="text-xl font-semibold">الأقسام والمنتجات</h1>
                  <div className="flex flex-col gap-4 mt-4">
                    {categories.map(category => (
                      <Disclosure as="div" key={category.id}>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex items-center w-full py-2 text-[var(--color-text-day)] hover:text-[var(--color-primary-day)] focus:outline-none">
                              <span className="text-sm font-semibold">
                                {category.name}
                              </span>
                              <ChevronRightIcon
                                className={`w-5 h-5 text-[var(--color-text-day)] transform transition-transform duration-300 ${open ? 'rotate-90' : ''}`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="p-2 text-md font-semibold grid grid-cols-2 gap-4 text-[var(--color-text-day)]">
                              {category.dropdown.map(subCategory => (
                                <Link
                                  key={subCategory.id}
                                  href="#"
                                  onClick={handleLinkClick}
                                >
                                  <p className="cursor-pointer hover:text-[var(--color-primary-day)]">
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
                </div>
  
                <div className="flex flex-col items-center mt-4">
                  {user ? (
                    <div className="flex flex-col items-center">
                      <AiOutlineUser className="text-2xl text-[var(--color-text-day)]" />
                      <span className="text-lg font-semibold text-[var(--color-text-day)] mt-2">
                        {user.name}
                      </span>
                      <button
                        onClick={logoutUser}
                        className="bg-[var(--color-primary-day)] text-[var(--color-secondary-day)] font-semibold text-sm py-2 px-4 rounded-md mt-4 hover:bg-[var(--color-button-hover-day)]"
                      >
                        تسجيل الخروج
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <Link href="/login" onClick={handleLinkClick}>
                        <button className="bg-[var(--color-primary-day)] text-[var(--color-secondary-day)] font-semibold text-sm py-2 px-4 rounded-md hover:bg-[var(--color-button-hover-day)]">
                          تسجيل الدخول
                        </button>
                      </Link>
                      <Link href="/register" onClick={handleLinkClick}>
                        <button className="bg-[var(--color-primary-day)] text-[var(--color-secondary-day)] font-semibold text-sm py-2 px-4 rounded-md mt-4 hover:bg-[var(--color-button-hover-day)]">
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
