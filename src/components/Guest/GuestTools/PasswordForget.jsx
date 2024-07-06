import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import useAuth from  '../../Auth/Authentication/AuthUser';
import {PasswordResetIcon} from '../../../assets/img/icons/index';

const PasswordForget = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const { http } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const response = await http.post(`/api/password/email`, { email });
      setMessage('تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.');
    } catch (error) {
      setError(error.response?.data?.message || 'حدث خطأ. يرجى المحاولة مرة أخرى.');
    }
  };

  return (
    <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
      <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
        <FaTimes />
      </button>
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold text-pink-500 mb-4">نسيت كلمة المرور</h2>
        {message && <p className="text-green-500">{message}</p>}
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
          <div className='flex items-center justify-center'>
            <img src={PasswordResetIcon} alt="project-section" className="w-40 h-40" />
          </div>
          <div className='space-y-6'>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="أدخل بريدك الإلكتروني"
              required
              className="py-3 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent w-full"
            />
            <button type="submit" className="button-auth w-full py-3 px-4 bg-violet-500 text-white rounded-md hover:bg-violet-600 transition">
              <span>تعيين كلمة المرور</span>
            </button>
          </div>
        </form>
      </div>
      <div className='flex items-center justify-center mt-6'>
        <button onClick={onClose} className='cssbuttons-home-io-button'>
          الرئيسية
          <div className='icon'>
            <svg
              height='24'
              width='24'
              viewBox='0 0 24 24'
              xmlnsXlink='http://www.w3.org/1999/xlink'
            >
              <path d='M0 0h24v24H0z' fill='none'></path>
              <path
                d='M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z'
                fill='currentColor'
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PasswordForget;