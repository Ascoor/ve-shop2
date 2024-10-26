import Image from 'next/image';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const UserMenu = ({ user, handleLogout }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex items-center justify-center w-full rounded-md bg-white px-4 py-2">
  
<Image
  src={user?.avatar || '/default-avatar.png'}
  alt="User Avatar"
  className="rounded-full object-cover"
  width={32}  // Set the width as appropriate for your design
  height={32} // Set the height as appropriate for your design
  priority={false} // Enable lazy loading for improved performance
/>

      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-50 mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg">
          <div className="py-1">
            <Menu.Item>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700"
              >
                تسجيل الخروج
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserMenu;
