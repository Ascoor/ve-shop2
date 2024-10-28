import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/slices/authSlice';

const Footer = () => {
  const user = useSelector(selectUser);
  const isAdminOrEmployee = user && (user.role_id === 1 || user.role_id === 2);

  return (
    <footer className="bg-[var(--color-primary-day)] text-[var(--color-secondary-day)] py-8">
  {!isAdminOrEmployee && (
    <div className="w-full">
      <div className="grid gap-10 row-gap-6 sm:grid-cols-2 lg:grid-cols-4 px-6">
        <div className="sm:col-span-2">
          <p className="text-sm leading-relaxed">
            متجر VE-SHOP هو منصة تسوق إلكترونية تقدم أفضل المنتجات والعروض
            في مكان واحد. هدفنا هو توفير تجربة تسوق مميزة تلبي احتياجاتك.
          </p>
          <p className="mt-4 text-sm leading-relaxed">
            نحن نقدم مجموعة واسعة من المنتجات التي تشمل الأزياء، الأجهزة
            الإلكترونية، الكتب، والكثير غيرها.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide">تواصل معنا</p>
          <div className="flex">
            <p className="mr-1">هاتف:</p>
            <Link
              href="tel:850-123-5021"
              aria-label="رقم الهاتف"
              title="رقم الهاتف"
              className="transition-colors duration-300 hover:text-[var(--button-hover-background-color)]"
            >
              850-123-5021
            </Link>
          </div>
          <div className="flex">
            <p className="mr-1">البريد الإلكتروني:</p>
            <Link
              href="mailto:info@veshop.co"
              aria-label="البريد الإلكتروني"
              title="البريد الإلكتروني"
              className="transition-colors duration-300 hover:text-[var(--button-hover-background-color)]"
            >
              info@veshop.co
            </Link>
          </div>
          <div className="flex">
            <p className="mr-1">العنوان:</p>
            <Link
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="العنوان"
              title="العنوان"
              className="transition-colors duration-300 hover:text-[var(--button-hover-background-color)]"
            >
              شارع الجمهورية - مصر
            </Link>
          </div>
        </div>
        <div>
          <p className="text-base font-bold tracking-wide">
            تابعنا على وسائل التواصل
          </p>
          <div className="flex items-center mt-2 space-x-3 rtl:space-x-reverse">
            <Link
              href="/"
              className="text-[var(--color-secondary-day)] transition-colors duration-300 hover:text-[var(--button-hover-background-color)]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </Link>
            <Link
              href="/"
              className="text-[var(--color-secondary-day)] transition-colors duration-300 hover:text-[var(--button-hover-background-color)]"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10 C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1 c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </Link>
            <Link
              href="/"
              className="text-[var(--color-secondary-day)] transition-colors duration-300 hover:text-[var(--button-hover-background-color)]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </Link>
          </div>
          <p className="mt-4 text-sm">
            تابعنا للحصول على أحدث العروض والمنتجات المميزة.
          </p>
        </div>
      </div>
    </div>
  )}
  <div className="flex flex-col items-center justify-center px-4 pt-6 mx-auto text-center sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <Link
      href="/"
      aria-label="Go home"
      title="Company"
      className="inline-flex items-center"
    >
      <div className="relative w-[100px] h-[50px]">
        <Image
          src="/assets/logo2.png"
          alt="logo"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'contain' }}
          className="rounded-full"
        />
      </div>
      <span className="mr-2 text-xl font-bold tracking-wide uppercase">
        VE-SHOP
      </span>
    </Link>

    <p className="mt-4 text-sm">
      © حقوق الطبع والنشر 2024 VE-SHOP جميع الحقوق محفوظة.
    </p>
  </div>
</footer>


  );
};

export default Footer;
