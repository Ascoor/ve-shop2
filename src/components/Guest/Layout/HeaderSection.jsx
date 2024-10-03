import React, { useState } from 'react';
import { LogoArt, ToggleIcon, BannerBackground, ShoppingBagIcon, SearchIcon, Img1, Img2 } from '../../../assets/images/index';
import ImageSlider from './ImageSlider';

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    
    <div className="w-full h-screen bg-cover bg-no-repeat pt-4" style={{ backgroundImage: `url(${BannerBackground})`, backgroundPosition: 'center bottom' }}>
      <div className="container mx-auto font-cairo">
        <nav className="flex justify-between items-center py-6">
          <a href="index.html">
            <img src={LogoArt} alt="شعار المتجر" className="mr-2 w-18 h-16" />
          </a>
          <div className="hidden lg:flex justify-between items-between space-x-8">
            <a href="index.html" className="text-white text-lg mx-6 hover:text-yellow-400 transition duration-300">الرئيسية</a>
            <a href="category.html" className="text-white text-lg hover:text-yellow-400 transition duration-300">الأقسام</a>
            <a href="products.html" className="text-white text-lg hover:text-yellow-400 transition duration-300">المنتجات</a>
            <a href="clients.html" className="text-white text-lg hover:text-yellow-400 transition duration-300">من نحن</a>
            <a href="contact.html" className="text-white text-lg hover:text-yellow-400 transition duration-300">أتصل بنا</a>
          </div>
          <div className="flex items-center space-x-8 lg:space-x-0">
           <a href="#" className="hidden lg:block">
              <img src={ShoppingBagIcon} alt="عربة التسوق" className="h-6 ml-4 hover:shadow-lg transition duration-300" />
            </a>
            <div className="relative hidden lg:block">
              <a href="#">
                <img src={SearchIcon} alt="أيقونة البحث" className="absolute top-2 right-2 h-6 hover:shadow-lg transition duration-300" />
              </a>
              <input type="text" className="w-48 p-2 rounded-full text-gray-700 shadow-inner" placeholder="......بحث" />
            </div>
            <button
              className="text-white focus:outline-none lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <img src={ToggleIcon} alt="قائمة التنقل" className="h-8" />
            </button>
          </div>
        </nav>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} bg-white text-black py-2 lg:hidden`}>
          <ul className="flex flex-col bg-gradient-to-t from-purple-500 to-purple-700 items-center space-y-2">
            <li><a href="index.html" className="text-lg text-white hover:text-yellow-500 transition duration-300">الرئيسية</a></li>
            <li><a href="category.html" className="text-lg text-white hover:text-yellow-500 transition duration-300">الأقسام</a></li>
            <li><a href="products.html" className="text-lg text-white hover:text-yellow-500 transition duration-300">المنتجات</a></li>
            <li><a href="clients.html" className="text-lg text-white hover:text-yellow-500 transition duration-300">من نحن</a></li>
            <li><a href="contact.html" className="text-lg text-white hover:text-yellow-500 transition duration-300">أتصل بنا</a></li>
          </ul>
        </div>
      </div>
        <ImageSlider />
    </div>
  );
};

export default HeaderSection;
