import { Fragment, useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useDarkMode } from "../../hooks/useDarkMode"; // Import the custom hook
import Link from "next/link";
import { AiOutlineInfoCircle, AiOutlineLogout, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { ChevronRightIcon, SunIcon, MoonIcon } from "@heroicons/react/20/solid";
import { logoutUserThunk, selectUser } from "../../store/slices/authSlice";
import { Disclosure } from "@headlessui/react";
import { sections } from '../common/sectionData'; // استيراد بيانات الأقسام

const ResponsiveNavbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector(selectUser);
  const [openNav, setOpenNav] = useState(false);
  const dispatch = useDispatch();

  const handleNav = () => setOpenNav(!openNav);
  const logoutUser = () => dispatch(logoutUserThunk());

  useEffect(() => {
    if (openNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openNav]);

  const { isDarkMode, toggleDarkMode } = useDarkMode(); // Use the custom hook
  const isGuest = !user || !user.role_id;
  const isAdminOrStaff = user && (user.role_id === 1 || user.role_id === 2);

  return (
    <Fragment>
      <div className="flex items-center justify-between px-4 py-2 bg-[var(--color-background-day)] dark:bg-[var(--color-background-night)] text-[var(--color-text-day)] dark:text-[var(--color-text-night)] shadow-md">
        <div className="flex items-center w-full justify-between">
          <Link href="/">
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
          <div onClick={handleNav} className="md:hidden text-[var(--color-text-day)] dark:text-[var(--color-text-night)]">
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
            <div className="fixed z-50 right-0 top-0 w-[85%] sm:w-[60%] md:w-[45%] h-screen bg-[var(--color-background-day)] dark:bg-[var(--color-background-night)] p-6 transition-all duration-700 ease-in-out overflow-y-auto">
              <div className="flex w-full items-center justify-between">
                <Link href="/" onClick={() => setOpenNav(false)}>
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
                  <XMarkIcon className="h-4 w-4 text-[var(--color-text-day)] dark:text-[var(--color-text-night)]" />
                </div>
              </div>

              {/* Conditional Rendering Based on Role */}
              {isAdminOrStaff && (
                <>
                  {/* Display dashboard sections */}
                  <div className="py-4 flex flex-col border-b border-[var(--color-primary-day)] dark:border-[var(--color-primary-night)]">
                    <h1 className="text-xl font-semibold">أقسام لوحة التحكم</h1>
                    <div className="flex flex-col gap-4 mt-4">
                      {sections.map((section) => (
                        <Disclosure as="div" key={section.id}>
                          {({ open }) => (
                            <>
                              <Disclosure.Button className="flex items-center w-full py-2 text-[var(--color-text-day)] dark:text-[var(--color-text-night)] hover:text-[var(--color-primary-day)] dark:hover:text-[var(--color-primary-night)] focus:outline-none">
                                <span className="text-sm font-semibold">{section.name}</span>
                                <ChevronRightIcon className={`w-5 h-5 text-[var(--color-text-day)] dark:text-[var(--color-text-night)] transform transition-transform duration-300 ${open ? "rotate-90" : ""}`} />
                              </Disclosure.Button>
                              <Disclosure.Panel className="p-2 text-md font-semibold grid grid-cols-2 gap-4 text-[var(--color-text-day)] dark:text-[var(--color-text-night)]">
                                {section.dropdown.map((subSection) => (
                                  <Link key={subSection.id} href={subSection.link} onClick={() => setOpenNav(false)}>
                                    <p className="cursor-pointer hover:text-[var(--color-primary-day)] dark:hover:text-[var(--color-primary-night)]">
                                      {subSection.name}
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
                </>
              )}

              {/* About and User Actions */}
              {/* ... */}
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ResponsiveNavbar;
