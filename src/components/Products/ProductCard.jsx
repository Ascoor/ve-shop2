import React from 'react';

// دالة إعادة تنسيق الصورة لتوحيد حجم العرض
const resizeImage = (src, width, height) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();
  canvas.width = width;
  canvas.height = height;

  return new Promise((resolve) => {
    img.onload = () => {
      // رسم الصورة على الحجم الموحد
      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL());
    };
    img.src = src;
  });
};

const ProductCard = ({ title, price, description, imageSrc, brand, rating, reviews }) => {
  const [resizedImage, setResizedImage] = React.useState(imageSrc);

  React.useEffect(() => {
    // إعادة تنسيق الصورة لتوحيد حجم العرض
    resizeImage(imageSrc, 300, 300).then((resized) => setResizedImage(resized));
  }, [imageSrc]);

  return (
    <div className="relative w-full max-w-xs bg-gradient-to-b from-blue-900 to-black rounded-2xl shadow-xl transition-transform hover:scale-105 hover:shadow-2xl ease-in-out duration-300 m-4 p-6 flex-shrink-0">
      {/* حاوية الصورة */}
      <div className="relative w-full h-56 overflow-hidden rounded-xl mb-4">
        <img
          src={resizedImage}
          alt={title}
          className="w-full h-full object-cover rounded-xl transition-transform duration-300 transform hover:scale-110"
        />
        {/* السعر */}
        <div className="absolute right-3 bottom-3 bg-white text-yellow-600 font-extrabold text-sm lg:text-base px-3 py-1 rounded-full shadow-lg">
          ${price}
        </div>
      </div>

      {/* الأزرار العلوية */}
      <label className="absolute top-3 right-3 cursor-pointer">
        <input type="checkbox" className="hidden" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-gray-400 hover:fill-red-500 transition-colors duration-300"
        >
          <path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"></path>
        </svg>
      </label>

      {/* محتوى الكارت */}
      <div className="px-2 mb-4">
        <div className="font-bold text-gray-300 text-sm lg:text-base">{brand}</div>
        <div className="font-bold text-white text-lg lg:text-xl mb-2">{title}</div>
        <div className="flex justify-between text-xs lg:text-sm font-bold text-gray-500 mb-4">
          {/* الألوان */}
          <div className="flex items-center gap-2">
            اللون:
            <div className="flex gap-1">
              <span className="w-5 h-5 rounded-full bg-yellow-500 border border-black"></span>
              <span className="w-5 h-5 rounded-full bg-blue-700"></span>
              <span className="w-5 h-5 rounded-full border border-blue-400"></span>
              <span className="w-5 h-5 rounded-full border border-pink-500"></span>
            </div>
          </div>
          {/* المقاسات */}
          <div>
            المقاس:
            <select className="ml-2 border border-gray-500 rounded px-1 text-gray-800">
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
        </div>
      </div>

      {/* تقييم المنتج */}
      <div className="flex items-center text-gray-300 text-sm mb-4">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              viewBox="0 0 24 24"
              className={`w-5 h-5 ${i < rating ? 'fill-yellow-400' : 'fill-gray-500'}`}
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
        <span className="ml-2 lg:text-base">({reviews} تقييمات)</span>
      </div>

      {/* أزرار الشراء والإضافة للسلة */}
      <div className="flex gap-2">
        <button className="flex-auto font-bold bg-white text-black py-2 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300">
        شراء        </button>
        <button className="w-12 bg-white text-black py-2 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 flex justify-center items-center">
          <svg
            viewBox="0 0 27.97 25.074"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
          >
            <path d="M0,1.175A1.173,1.173,0,0,1,1.175,0H3.4A2.743,2.743,0,0,1,5.882,1.567H26.01A1.958,1.958,0,0,1,27.9,4.035l-2.008,7.459a3.532,3.532,0,0,1-3.4,2.61H8.36l.264,1.4a1.18,1.18,0,0,0,1.156.955H23.9a1.175,1.175,0,0,1,0,2.351H9.78a3.522,3.522,0,0,1-3.462-2.865L3.791,2.669A.39.39,0,0,0,3.4,2.351H1.175A1.173,1.173,0,0,1,0,1.175ZM6.269,22.724a2.351,2.351,0,1,1,2.351,2.351A2.351,2.351,0,0,1,6.269,22.724Zm16.455-2.351a2.351,2.351,0,1,1-2.351,2.351A2.351,2.351,0,0,1,22.724,20.373Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
