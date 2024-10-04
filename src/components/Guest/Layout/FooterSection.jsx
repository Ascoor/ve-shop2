import React from 'react';

const FooterSection = () => {
  return (
    <footer className="relative py-20 neon-shadow flex flex-col items-center bg-gradientColorStart to-cyan-500 overflow-hidden md:py-40" dir="rtl">
      <div className="relative z-[1] container mx-auto px-6 md:px-12">
        <div className="mx-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
          <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
            {/* القائمة */}
            <div className="w-full flex justify-center text-gray-300 sm:w-7/12 md:justify-start">
              <ul className="list-disc list-inside space-y-4">
                <li><a href="#" className="hover:text-sky-400 transition">الرئيسية</a></li>
                <li><a href="#" className="hover:text-sky-400 transition">من نحن</a></li>
                <li><a href="#" className="hover:text-sky-400 transition">الدليل</a></li>
                <li><a href="#" className="hover:text-sky-400 transition">الأقسام</a></li>
                <li><a href="#" className="hover:text-sky-400 transition">اتصل بنا</a></li>
                <li><a href="#" className="hover:text-sky-400 transition">الشروط والأحكام</a></li>
              </ul>
            </div>
            {/* وسائل التواصل الاجتماعي والمعلومات */}
            <div className="w-full mt-16 space-y-6 text-center sm:text-left sm:w-5/12 sm:mt-0">
              <p className="text-gray-300">نحن نغير طريقة استخدام مكتبات مكونات واجهة المستخدم</p>
              <p className="text-gray-300">جميع الحقوق محفوظة Ask-ar.net &copy; {new Date().getFullYear()}</p>
              <div className="flex justify-center sm:justify-start space-x-4">
                <a href="#" className="text-gray-300 hover:text-sky-400 transition">
                  <span className="sr-only">فيسبوك</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05S0 3.603 0 8.049c0 4.017 2.926 7.347 6.75 7.951V10.3H4.72V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258V8.05h2.218l-.354 2.249H9.25v5.7c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
                {/* إضافة أيقونات وسائل التواصل الاجتماعي الأخرى هنا */}
              </div>
              <div className="flex justify-between text-white mt-4">
                <a href="#" className="font-semibold">الشروط والأحكام</a>
                <a href="#" className="font-semibold">سياسة الخصوصية</a>
              </div>
              <p className="text-gray-300">تحتاج إلى مساعدة؟ <a href="#" className="font-semibold text-white">اتصل بنا</a></p>
            </div>
          </div>
        </div>
      </div>
      {/* خلفية متحركة */}
      <div aria-hidden="true" className="absolute h-full inset-0 flex items-center">
        <div aria-hidden="true" className="bg-layers bg-scale w-56 h-56 mx-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"></div>
      </div>
      <div aria-hidden="true" className="absolute inset-0 w-full h-full bg-[#020314] opacity-80"></div>
    </footer>
  );
};

export default FooterSection;
