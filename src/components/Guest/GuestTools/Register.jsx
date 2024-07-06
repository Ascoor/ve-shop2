import React, { useState } from 'react';
import useAuth from  '../../Auth/Authentication/AuthUser';
import { useNavigate } from 'react-router-dom';

const Register = ({ toggleLoginForm, handleFormClose, setIsLoading }) => {
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const onSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('كلمات المرور لا تتطابق.');
      return;
    }
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('جميع الحقول مطلوبة.');
      return;
    }
    setIsLoading(true);
  
    const result = await register({ name, email, password });
    setIsLoading(false);
    if (result.success) {
      navigate('/done-register'); // Navigate to DoneRegister on success
    } else {
      setError(result.message || 'فشل في إنشاء الحساب. يرجى المحاولة مرة أخرى لاحقًا.');
    }
  };


  return (
    <form
      onSubmit={onSubmit}
      className='mx-auto my-6 p-8 rounded-xl shadow-md max-w-md sm:max-w-lg md:max-w-xl'
    >
      <div className='space-y-6'>
        <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-bold text-pink-600 text-shadow-[0px_2px_4px_rgba(0,0,0,0.5)]'>
          إنشاء حساب
        </h1>
        {error && <p className='text-center text-red-500'>{error}</p>}

        <hr />
        <div className='flex flex-col space-y-4'>
          <input
            className='py-3 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            type='text'
            name='name'
            placeholder='الاسم الكامل'
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            className='py-3 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            type='email'
            name='email'
            placeholder='البريد الإلكتروني'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            className='py-3 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            type='password'
            name='password'
            placeholder='كلمة المرور'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <input
            className='py-3 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            type='password'
            name='confirmPassword'
            placeholder='تأكيد كلمة المرور'
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type='submit' className='button-auth'>
          <span>تسجيل</span>
        </button>
      </div>

      <div className='flex flex-col items-center mt-6 space-y-2'>
        <p className='text-gray-700 font-medium'>
          هل لديك حساب؟
          <a
            onClick={toggleLoginForm}
            className='font-bold text-pink-600 hover:text-pink-400 cursor-pointer transition duration-300 ease-in-out mr-2'
          >
            سجل الدخول
          </a>
        </p>
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

export default Register;