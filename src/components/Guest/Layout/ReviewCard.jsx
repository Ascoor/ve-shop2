import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const ReviewCard = ({ username, reviewText, rating, date, userImage }) => {
  return (
    <div className="w-full neon-shadow rounded-xl shadow-md bg-gradient-to-t from-violet-600 to-violet-800 text-white overflow-hidden m-4 transition-transform hover:scale-105 duration-300 bg-transparent backdrop-blur-lg backdrop-filter bg-opacity-80">
      <div className="flex flex-col p-4 items-center">
        {/* User Avatar */}
        <div className="flex-shrink-0 mb-4">
          <img
            className="w-24 h-24 object-cover rounded-full"
            src={userImage}
            alt={`Profile of ${username}`}
          />
        </div>

        {/* Username */}
        <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{username}</h3>

        {/* Star Rating */}
        <div className="flex justify-center items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i}>
              {i < rating ? (
                <FaStar className="text-yellow-500" />
              ) : (
                <FaRegStar className="text-yellow-500" />
              )}
            </span>
          ))}
        </div>

        {/* Review Text */}
        <p className="mt-2 text-gray-200 text-sm md:text-base lg:text-lg text-center">{reviewText}</p>

        {/* Review Date */}
        <span className="text-gray-300 text-xs mt-1">{date}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
