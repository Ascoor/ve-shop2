import React, { useState } from 'react';
import useAuth from  '../../Auth/Authentication/AuthUser';
import { useNavigate } from 'react-router-dom';
import ShowSpinner from '../../Tools/ShowSpinner';

const Login = ({
  togglePasswordForgot,
  toggleRegisterForm,
  handleFormClose,
  setIsLoading,
}) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // State for loading animation

  const navigate = useNavigate();
  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true); // Start the loading animation

    try {
      const result = await login(email, password);

      if (result.success) {
        // If login is successful
        setIsLoading(true); // Start the loading process for subsequent actions
        navigate('/'); // Navigate to the home page on successful login
      } else {
        setError(result.message); // Display the error message if login fails
        setLoading(false); // Stop the loading animation
        setIsLoading(false); // Stop the loading process for subsequent actions
      }
    } catch (error) {
      setError('حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.'); // Display the default error message in Arabic
      setLoading(false); // Stop the loading animation
      setIsLoading(false); // Stop the loading process for subsequent actions
    }
  };

  // تعريف الدالة handleForgotPassword

  return (
    <form
      onSubmit={onSubmit}
      className='mx-auto my-6 p-8 rounded-xl shadow-md max-w-md sm:max-w-lg md:max-w-xl'
    >
      <div className='space-y-6'>
        {loading ? (
          <ShowSpinner /> // Display the loading spinner
        ) : (
          <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-bold text-pink-600 text-shadow-[0px_2px_4px_rgba(0,0,0,0.5)]'>
            تسجيل الدخول
          </h1>
        )}

        {error && (
          <p className='text-center text-red-500' aria-live='assertive'>
            {error}
          </p>
        )}
        <hr />
        <div className='flex flex-col space-y-4'>
          <input
            className='input-auth-style'
            type='email'
            name='email'
            placeholder='البريد الإلكتروني'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            className='input-auth-style'
            type='password'
            name='password'
            placeholder='كلمة المرور'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>

        <button type='submit' className='button-auth'>
          <span>تسجيل الدخول</span>
        </button>
      </div>

      <div className='flex flex-col items-center mt-6 space-y-2'>
        <p className='text-gray-700 font-medium'>
          ليس لديك حساب؟
          <a
            onClick={toggleRegisterForm}
            className='font-bold text-pink-500  hover:text-yellow-600 cursor-pointer transition duration-300 ease-in-out mr-2'
          >
            سجل الآن
          </a>
        </p>

          <a
            onClick={togglePasswordForgot}
            className='font-bold text-pink-500  hover:text-yellow-600 cursor-pointer transition duration-300 ease-in-out mr-2'
          >         نسيت كلمة المرور؟
          </a>
      </div>
      <div className='items-center justify-center mt-6'>
        <button onClick={handleFormClose} className='cssbuttons-home-io-button'>
          الرئيسية
          <div className='icon'>
            <svg
              height='24'
              width='24'
              viewBox='0 0 24 24'
              xmlnsXlink='http://www.w3.org/1999/xlink' // This is already correct!
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
    </form>
  );
};

export default Login;
