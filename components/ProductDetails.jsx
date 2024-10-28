import React from 'react';
import StarRatings from 'react-star-ratings';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/reducers/cartSlice';
import { addToFavorite } from '../store/reducers/favoriteSlice';
import { AiOutlineHeart } from 'react-icons/ai';
import { toastr } from 'react-redux-toastr';

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const rating = Math.round(product?.rating.rate);

  // دالة لإضافة المنتج إلى سلة المشتريات
  const addToCartHandler = () => {
    dispatch(addToCart(product));
    toastr.success('تمت إضافة المنتج إلى السلة');
  };

  // دالة لإضافة المنتج إلى المفضلة
  const addToFavoritesHandler = () => {
    if (user) {
      dispatch(addToFavorite(product));
      toastr.success('تمت إضافة المنتج إلى المفضلة');
    } else {
      toastr.error('يرجى تسجيل الدخول لإضافة المنتج إلى المفضلة');
    }
  };

  return (
    <div className="text-gray-800 body-font mb-10 w-full bg-gray-100">
      <div className="container px-4 md:px-5 mx-auto">
        <div className="flex flex-col lg:flex-row mx-auto lg:w-4/5">
          {/* عرض صورة المنتج بتصميم متجاوب */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
            <Image
              alt={product?.title}
              className="rounded object-cover"
              src={product?.image}
              width={500}
              height={500}
              layout="responsive"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>

          {/* تفاصيل المنتج */}
          <div className="w-full lg:w-1/2 lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm text-gray-600 tracking-widest">
              {product?.category}
            </h2>
            <h1 className="text-3xl font-medium mb-1">{product?.title}</h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <StarRatings
                  rating={rating}
                  starRatedColor="#ffd700"
                  numberOfStars={5}
                  name="rating"
                  starDimension="24px"
                  starSpacing="2px"
                />
                <span className="text-gray-600 ml-2">
                  {product?.rating.count} تقييم
                </span>
              </span>
            </div>
            <p className="leading-relaxed text-gray-800 mb-4">
              {product?.description}
            </p>

            {/* سعر المنتج وأزرار التحكم */}
            <div className="flex items-center space-x-6 mt-6">
  <span className="title-font font-medium text-2xl ml-4 text-gray-800">
    {product?.price} ج.م
  </span>
  <button
    onClick={addToCartHandler}
    className="px-5 py-2 rounded-md transition duration-300"
    style={{
      backgroundColor: 'var(--color-feature-button-day)',
      color: 'var(--color-feature-text-day)',
    }}
    onMouseOver={(e) =>
      (e.currentTarget.style.backgroundColor = 'var(--color-feature-button-hover-day)')
    }
    onMouseOut={(e) =>
      (e.currentTarget.style.backgroundColor = 'var(--color-feature-button-day)')
    }
  >
    أضف إلى السلة
  </button>
  <button
    onClick={addToFavoritesHandler}
    className="rounded-full w-10 h-10 p-0 border-0 inline-flex items-center justify-center transition duration-300"
    style={{
      backgroundColor: 'var(--color-feature-button-day)',
      color: 'var(--color-feature-text-day)',
    }}
    onMouseOver={(e) =>
      (e.currentTarget.style.backgroundColor = 'var(--color-feature-button-hover-day)')
    }
    onMouseOut={(e) =>
      (e.currentTarget.style.backgroundColor = 'var(--color-feature-button-day)')
    }
  >
    <AiOutlineHeart size={24} />
  </button>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
