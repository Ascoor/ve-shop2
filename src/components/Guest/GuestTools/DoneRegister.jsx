import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {Triangle} from '../../../assets/img'
const DoneRegister = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const toggleLoginForm = () => {
    // use navigate to redirect to login page by link /
    navigate('/');


    
  }

  const isActivationPage = location.pathname === '/done-activation';
  return (
    <div
    className='relative w-full h-screen overflow-hidden bg-cover bg-center'
    style={{ backgroundImage: 'url("/background-image.jpg")' }}
  >
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <div className='absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-600 opacity-90'></div>
      

      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-600 opacity-90"></div>
        <div className="relative z-50 p-4 w-full max-w-lg md:max-w-2xl bg-white bg-opacity-90 rounded-xl shadow-xl">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-xl font-bold text-pink-600 text-shadow-sm">   {isActivationPage ? 'تم تفعيل حسابك بنجاح!' : 'تم التسجيل بنجاح!'}
        </h1>
        <p className="mt-4 text-gray-600">
          {isActivationPage
            ? 'تم تفعيل بريدك الإلكتروني، يمكنك الآن تسجيل الدخول.'
            : 'تم إرسال رابط التفعيل إلى بريدك الإلكتروني،'}
        </p>
        {isActivationPage ? (
          <>          <p className="text-gray-600">يمكنك تسجيل الدخول ببريدك الإلكتروني الآن.</p>
          <button
          onClick={toggleLoginForm}
          className="mt-5 bg-cyan-600 hover:bg-cyan-800 text-white font-medium rounded-lg text-md px-4 py-2 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-cyan-300 shadow-lg"
        >
          سجل الدخول
        </button>
        </>

        ) : (
          <p className="text-gray-600">يرجى التحقق من بريدك لتفعيل حسابك.</p>

        )}
                        </div>

        </div>
        </div>
    <div className='hidden md:block rectangle-2'></div>
    <div className='hidden lg:block rectangle-1'></div>
    <div className='hidden sm:block rectangle-transparent-1'></div>
    <div className='rectangle-transparent-2'></div>
    <div className='circle-1'></div>
    <div className='hidden sm:block circle-2'></div>
    <div className='circle-3'></div>
    <div className='hidden md:block triangle triangle-1'>
      <img src={Triangle} alt='Triangle 1' />
    </div>
    <div className='hidden lg:block triangle triangle-2'>
      <img src={Triangle} alt='Triangle 2' />
    </div>
    <div className='triangle triangle-3'></div>
    <div className='hidden xl:block triangle triangle-4'>
      <img src={Triangle} alt='Triangle 4' />
    </div>
  </div>
</div>
  );
};

export default DoneRegister;
