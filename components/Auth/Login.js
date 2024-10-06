
import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/slices/authSlice';

const Login = () => {
  const dispatch = useDispatch();

  // Simple demo login
  const handleLogin = () => {
    dispatch({ type: 'auth/loginUser/fulfilled', payload: { user: { name: 'Demo User', email: 'demo@example.com' }, token: 'demoToken' } });
  };

  return (
    <div className="login-container">
      <h2>الوضع التجريبي: تسجيل الدخول</h2>
      <button onClick={handleLogin}>تسجيل الدخول كمستخدم تجريبي</button>
    </div>
  );
};

export default Login;
