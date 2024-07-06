import React from 'react';

const ProductCard = ({ title, price, description, imageSrc, altText, linkHref, colors, sizes }) => {
    return (
        <div className="relative w-60 bg-white rounded-lg p-2 shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105">
            <div className="relative w-full h-32 rounded-t-lg mb-4">
                <svg viewBox="0 0 1921 1081" xmlns="http://www.w3.org/2000/svg" className="w-full h-full rounded-lg">
                    <defs>
                        <radialGradient id="radial-gradient" cx="0.5" cy="0.5" r="1.204" gradientTransform="translate(0.219) scale(0.563 1)" gradientUnits="objectBoundingBox">
                            <stop offset="0" stopColor="#fff" />
                            <stop offset="1" stopColor="#bcbcbc" />
                        </radialGradient>
                    </defs>
                    <rect fill="url(#radial-gradient)" x="0" y="0" width="100%" height="100%" />
                    <image href={imageSrc} x="0" y="0" width="100%" height="100%" />
                </svg>
                <div className="absolute right-3 bottom-3 bg-white text-yellow-500 font-bold text-sm px-2 py-1 rounded-full shadow-md">${price}</div>
            </div>
            <label className="absolute top-3 right-3 cursor-pointer">
                <input type="checkbox" className="hidden peer" />
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-400 peer-checked:text-red-500">
                    <path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z" />
                </svg>
            </label>
            <div className="px-2 mb-4">
                <div className="text-gray-500 font-bold">{title}</div>
                <div className="text-gray-700 font-semibold text-sm mb-2">{description}</div>
                {colors && colors.length > 0 && (
                    <div className="flex justify-between text-xs text-gray-500 font-semibold mb-4">
                        <div>
                            Color
                            <ul className="flex space-x-2 mt-1">
                                {colors.map((color, index) => (
                                    <li key={index} className={`w-4 h-4 rounded-full border border-black`} style={{ backgroundColor: color }}></li>
                                ))}
                                {colors.length > 3 && <li className="text-xs">+{colors.length - 3}</li>}
                            </ul>
                        </div>
                    </div>
                )}
                {sizes && sizes.length > 0 && (
                    <div className="flex justify-between text-xs text-gray-500 font-semibold mb-4">
                        <div>
                            Size
                            <ul className="flex space-x-1 mt-1">
                                {sizes.map((size, index) => (
                                    <li key={index} className="border rounded-full px-2 py-1 cursor-pointer hover:bg-yellow-500 hover:text-white">{size}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
                <div className="flex items-center text-gray-500 text-xs font-semibold">
                    <svg viewBox="0 0 99.498 16.286" className="w-3 h-3 text-yellow-500">
                        <path d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" />
                        <path d="M20.607,1.558,22.532,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L11.529,8.14A.916.916,0,0,1,12.039,6.576l4.3-.624a.919.919,0,0,0,.692-.5L19.557,1.558A.92.92,0,0,1,20.607,1.558Z" />
                        <path d="M41.215,1.558,43.14,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L32.423,8.14A.916.916,0,0,1,32.933,6.576l4.3-.624a.919.919,0,0,0,.692-.5L40.161,1.558A.92.92,0,0,1,41.215,1.558Z" />
                        <path d="M61.823,1.558,63.748,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L51.231,8.14A.916.916,0,0,1,51.741,6.576l4.3-.624a.919.919,0,0,0,.692-.5L60.551,1.558A.92.92,0,0,1,61.823,1.558Z" />
                        <path fill="#e9e9e9" d="M82.431,1.558,84.356,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L72.839,8.14A.916.916,0,0,1,73.349,6.576l4.3-.624a.919.919,0,0,0,.692-.5L80.97,1.558A.92.92,0,0,1,82.431,1.558Z" />
                    </svg>
                    (29,062)
                </div>
            </div>
            <div className="flex justify-between gap-2">
                <button className="flex-1 bg-yellow-500 text-white font-bold py-2 rounded-lg hover:bg-yellow-600 transition duration-300">أضف للسلة</button>
                <button className="w-12 bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600 transition duration-300">
                    <svg viewBox="0 0 27.97 25.074" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                        <path d="M0,1.175A1.173,1.173,0,0,1,1.175,0H3.4A2.743,2.743,0,0,1,5.882,1.567H26.01A1.958,1.958,0,0,1,27.9,4.035l-2.008,7.459a3.532,3.532,0,0,1-3.4,2.61H8.36l.264,1.4a1.18,1.18,0,0,0,1.156.955H23.9a1.175,1.175,0,0,1,0,2.351H9.78a3.522,3.522,0,0,1-3.462-2.865L3.791,2.669A.39.39,0,0,0,3.4,2.351H1.175A1.173,1.173,0,0,1,0,1.175ZM6.269,22.724a2.351,2.351,0,1,1,2.351,2.351A2.351,2.351,0,0,1,6.269,22.724Zm16.455-2.351a2.351,2.351,0,1,1-2.351,2.351A2.351,2.351,0,0,1,22.724,20.373Z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
