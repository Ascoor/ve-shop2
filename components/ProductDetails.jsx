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
  const { user } = useSelector((state) => state.auth);
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
    <div className="text-gray-600 body-font mb-10 w-full h-full">
      <div className="container px-5 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* عرض صورة المنتج */}
          <Image
            alt={product?.title}
            className="lg:w-1/2 w-full lg:h-auto object-cover object-center rounded"
            src={product?.image}
            width={500}
            height={500}
            priority
          />

          {/* تفاصيل المنتج */}
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product?.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product?.title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <StarRatings
                  rating={rating}
                  starRatedColor="#ffd700"
                  numberOfStars={5}
                  name='rating'
                  starDimension="24px"
                  starSpacing="2px"
                />
                <span className="text-gray-600 mr-3">
                  {product?.rating.count} تقييم
                </span>
              </span>
            </div>
            <p className="leading-relaxed">{product?.description}</p>

            {/* سعر المنتج وأزرار التحكم */}
            <div className="flex mt-4">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product?.price}
              </span>
              <button
                onClick={addToCartHandler}
                className="flex mr-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
              >
                أضف إلى السلة
              </button>
              <button
                onClick={addToFavoritesHandler}
                className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 mr-4 active:bg-red-500 hover:bg-red-500 hover:text-white focus:outline-none"
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
