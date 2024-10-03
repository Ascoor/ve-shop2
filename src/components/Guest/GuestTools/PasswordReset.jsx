import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Triangle } from '../../../assets/img';
import useAuth from  '../../Auth/Authentication/AuthUser';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const { http } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (password !== confirmPassword) {
      setError('كلمات المرور لا تتطابق.');
      return;
    }

    try {
      const response = await http.post(`/api/password/reset`, {
        token,
        password,
        password_confirmation: confirmPassword,
      });
      setMessage(response.data.message);
      navigate('/login');
    } catch (error) {
      setError(error.response?.data?.message || 'حدث خطأ. يرجى المحاولة مرة أخرى.');
    }
  };

  return (
    <div
      className='relative w-full h-screen overflow-hidden bg-cover bg-center'
      style={{ backgroundImage: 'url("/background-image.jpg")' }}
    >
      <div className='min-h-screen flex flex-col items-center justify-center'>
        <div className='absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-600 opacity-90'></div>
        
        <div className="relative z-50 p-4 w-full max-w-lg md:max-w-2xl bg-white bg-opacity-90 rounded-xl shadow-xl">
          <div className="flex flex-col items-center justify-center text-center">
            <h2>إعادة تعيين كلمة المرور</h2>
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="كلمة المرور الجديدة"
                required
                className='py-3 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="تأكيد كلمة المرور الجديدة"
                required
                className='py-3 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
              <button type="submit" className='button-auth'>
                <span>إعادة تعيين كلمة المرور</span>
              </button>
            </form>
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

export default ResetPassword;
