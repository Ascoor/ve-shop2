import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/reducers/cartSlice';
import { addToFavorite } from '../../store/reducers/favoriteSlice';
import { AiOutlineHeart } from 'react-icons/ai';
import { toastr } from 'react-redux-toastr';

const BestSeller = ({ bestSellers, loading, user }) => {
  const dispatch = useDispatch();

  // دالة لإضافة المنتج إلى سلة المشتريات
  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
    toastr.success('تمت إضافة المنتج إلى السلة');
  };

  // دالة لإضافة المنتج إلى المفضلة
  const addToFavoritesHandler = (product) => {
    if (user) {
      dispatch(addToFavorite(product));
      toastr.success('تمت إضافة المنتج إلى المفضلة');
    } else {
      toastr.error('يرجى تسجيل الدخول لإضافة المنتج إلى المفضلة');
    }
  };

  return (
    <div className="mt-5 w-full">
      {/* عنوان الأكثر مبيعاً */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mt-5 text-[var(--color-primary-day)] dark:text-[var(--color-primary-night)]">
          الأكثر مبيعاً
        </h1>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-[var(--color-secondary-day)] dark:text-[var(--color-secondary-night)]">
          منتجاتنا الأكثر شعبية
        </p>
      </div>

      {/* عرض المنتجات */}
      <div className="py-10 px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {bestSellers.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-[var(--color-background-day)] dark:bg-[var(--color-background-night)] h-full border-2 rounded-md hover:shadow-md hover:scale-105 transition-all"
            >
              {loading ? (
                <div className="animate-pulse">
                  <div className="bg-gray-200 h-64 w-full dark:bg-gray-700"></div>
                  <div className="bg-gray-200 h-4 w-1/2 mt-2 dark:bg-gray-700"></div>
                  <div className="bg-gray-200 h-4 w-1/4 mt-2 dark:bg-gray-700"></div>
                  <div className="bg-gray-200 h-4 w-1/4 mt-2 dark:bg-gray-700"></div>
                </div>
              ) : (
                <div className="flex flex-col items-center h-full">
                  {/* صورة المنتج */}
                  <Link
                    href={`/detail/${item.id}`}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={300}
                      className="w-full h-auto object-contain"
                      placeholder="blur"
                      blurDataURL={item.image}
                      loading="lazy"
                      priority={item.isTopSeller}
                      quality={75}
                    />
                  </Link>

                  {/* تفاصيل المنتج */}
                  <div className="flex-grow flex flex-col items-center justify-center bg-[var(--color-component-background-day)] dark:bg-[var(--color-component-background-night)] gap-2 text-center w-full p-2">
                    <h1 className="text-sm md:text-md font-semibold text-[var(--color-text-day)] dark:text-[var(--color-text-night)]">
                      {item.title}
                    </h1>
                    <p className="text-sm text-[var(--color-text-day)] dark:text-[var(--color-text-night)]">
                      ${item.price}
                    </p>
                  </div>

                  {/* أزرار الإضافة للسلة والمفضلة */}
                  <div className="flex items-center mt-4 gap-2">
                  <button
  onClick={() => addToCartHandler(item)}
  className="bg-[var(--color-feature-button-day)] text-[var(--color-feature-text-day)] dark:bg-[var(--color-feature-button-night)] dark:text-[var(--color-feature-text-night)] font-semibold text-sm px-4 py-2 rounded hover:bg-[var(--color-feature-button-hover-day)] dark:hover:bg-[var(--color-feature-button-hover-night)] transition-colors"
>
  أضف إلى السلة
</button>
<button
  onClick={() => addToFavoritesHandler(item)}
  className="rounded-full w-10 h-10 bg-[var(--color-feature-button-day)] dark:bg-[var(--color-feature-button-night)] p-0 border-0 inline-flex items-center justify-center text-[var(--color-feature-text-day)] dark:text-[var(--color-feature-text-night)] ml-2 hover:bg-[var(--color-feature-button-hover-day)] dark:hover:bg-[var(--color-feature-button-hover-night)] hover:text-white focus:outline-none"
>
  <AiOutlineHeart size={24} />
</button>

                  </div>

                  {/* زر التفاصيل */}
                  <Link
                    className="flex items-center justify-end w-full h-12 mt-4"
                    href={`/detail/${item.id}`}
                  >
                    <button className="bg-[var(--color-primary-day)] text-[var(--color-secondary-day)] dark:bg-[var(--color-primary-night)] dark:text-[var(--color-secondary-night)] w-full font-semibold text-sm px-4 py-2 hover:bg-[var(--color-button-hover-day)] dark:hover:bg-[var(--color-button-hover-night)]">
                      تفاصيل
                    </button>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
