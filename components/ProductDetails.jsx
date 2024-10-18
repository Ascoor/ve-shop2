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
    <div className="text-[var(--text-color)] dark:text-[var(--dark-text-primary)] body-font mb-10 w-full h-full bg-[var(--background-color)] dark:bg-[var(--dark-background)]">
      <div className="container px-5 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* عرض صورة المنتج */}
          <div className="lg:w-1/2 w-full mb-6">
            <Image
              alt={product?.title}
              className="lg:h-auto w-full object-cover object-center rounded"
              src={product?.image}
              width={500}
              height={500}
              priority
            />
          </div>

          {/* تفاصيل المنتج */}
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-[var(--muted-text-color)] dark:text-[var(--dark-muted-text)] tracking-widest">
              {product?.category}
            </h2>
            <h1 className="text-[var(--text-color)] dark:text-[var(--dark-text-primary)] text-3xl title-font font-medium mb-1">
              {product?.title}
            </h1>
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
                <span className="text-[var(--muted-text-color)] dark:text-[var(--dark-muted-text)] ml-2">
                  {product?.rating.count} تقييم
                </span>
              </span>
            </div>
            <p className="leading-relaxed text-[var(--text-color)] dark:text-[var(--dark-text-primary)] mb-4">
              {product?.description}
            </p>

            {/* سعر المنتج وأزرار التحكم */}
            <div className="flex items-center mt-6">
              <span className="title-font font-medium text-2xl text-[var(--text-color)] dark:text-[var(--dark-text-primary)]">
                ${product?.price}
              </span>
              <button
                onClick={addToCartHandler}
                className="app-button"
              >
                أضف إلى السلة
              </button>
              <button
                onClick={addToFavoritesHandler}
                className="rounded-full w-10 h-10 bg-[var(--button-background-color)] dark:bg-[var(--dark-button-background)] p-0 border-0 inline-flex items-center justify-center text-[var(--muted-text-color)] dark:text-[var(--dark-muted-text)] ml-4 hover:bg-[var(--primary-color)] dark:hover:bg-[var(--dark-primary)] hover:text-white focus:outline-none"
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
