<<<<<<< HEAD
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 text-right">
      {/* حاوية المحتوى الرئيسي */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* قسم الفئات */}
        <div>
          <h4 className="text-xl font-bold mb-2">الأقسام</h4>
          <p className="text-sm text-gray-400">
            استمتع بأفضل المنتجات من الفئات المتنوعة التي تناسب احتياجاتك.
          </p>
        </div>

        {/* قسم الروابط المفيدة */}
        <div>
          <h4 className="text-xl font-bold mb-2">روابط مفيدة</h4>
          <ul className="text-sm text-gray-400">
            <li className="mb-2"><a href="#" className="hover:text-yellow-400 transition duration-300">سياسة الخصوصية</a></li>
            <li className="mb-2"><a href="#" className="hover:text-yellow-400 transition duration-300">الشروط والأحكام</a></li>
            <li className="mb-2"><a href="#" className="hover:text-yellow-400 transition duration-300">الأسئلة المتكررة</a></li>
            <li className="mb-2"><a href="#" className="hover:text-yellow-400 transition duration-300">الدعم الفني</a></li>
          </ul>
        </div>

        {/* قسم الاتصال بنا */}
        <div>
          <h4 className="text-xl font-bold mb-2">تواصل معنا</h4>
          <p className="text-sm text-gray-400 mb-2">
            <a href="tel:+011234567890" className="hover:text-yellow-400 transition duration-300">+01 1234567890</a>
          </p>
          <p className="text-sm text-gray-400 mb-2">
            <a href="tel:+019876543210" className="hover:text-yellow-400 transition duration-300">+01 9876543210</a>
          </p>
          <p className="text-sm text-gray-400 mb-4">
            <a href="mailto:demo@gmail.com" className="hover:text-yellow-400 transition duration-300">demo@gmail.com</a>
          </p>

          {/* أيقونات التواصل الاجتماعي */}
          <div className="flex space-x-4 justify-start">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>



      {/* حقوق الملكية */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm text-gray-500">
          جميع الحقوق محفوظة 2024 &copy; <a href="https://html.design" className="text-yellow-400 hover:underline">نماذج HTML مجانية</a>
        </p>
      </div>
      </div>
    </footer>
  );
}

export default FooterSection;
=======
  const FooterSection = () => {
    return (
        
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="text-xl font-bold">Category</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold">Useful Links</h4>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold">Contact Us</h4>
            <p><a href="tel:+011234567890">+01 1234567890</a></p>
            <p><a href="tel:+019876543210">+01 9876543210</a></p>
            <p><a href="mailto:demo@gmail.com">demo@gmail.com</a></p>
            <div className="flex space-x-4 mt-4">
              <a href="#"><img src="images/fb-icon.png" alt="Facebook" /></a>
              <a href="#"><img src="images/twitter-icon.png" alt="Twitter" /></a>
              <a href="#"><img src="images/linkedin-icon.png" alt="LinkedIn" /></a>
              <a href="#"><img src="images/instagram-icon.png" alt="Instagram" /></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>Copyright 2020 All Right Reserved <a href="https://html.design" className="text-blue-500">Free Html Templates</a></p>
        </div>
      </footer>

    );

}

export default FooterSection

      
>>>>>>> 61437aadda136a5787ad4ffec00cbd22c916e3eb
