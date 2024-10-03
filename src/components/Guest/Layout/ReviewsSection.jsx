import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import ReviewCard from './ReviewCard';
import DemoData from '../../../tools/DemoData';

const ReviewsSection = () => {
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const data = DemoData('reviews');
      setReviewsData(data);
    };
    fetchData();
  }, []);

  const slidesCount = reviewsData.length;
  const shouldLoop = slidesCount > 2;

  return (
    <section className="py-8">
      <h2 className="text-4xl font-bold text-center text-white mb-8">آراء العملاء</h2>

      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          spaceBetween={30}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
          loop={shouldLoop}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            480: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1280: { slidesPerView: 4, spaceBetween: 30 },
          }}
          className="mx-auto"
        >
          {reviewsData.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard
                username={review.username}
                reviewText={review.reviewText}
                rating={review.rating}
                date={review.date}
                userImage={review.userImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-pagination-custom mt-8 flex justify-center items-center space-x-2"></div>
      </div>
    </section>
  );
};

export default ReviewsSection;
