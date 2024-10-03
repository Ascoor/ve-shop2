import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from  '../Auth/Authentication/AuthUser';

const UserPage = () => {
  
  const navigate = useNavigate();
  const { logout } = useAuth(); // Destructure the logout function

  const handleLogout = () => {
    logout(); // Call the logout function from useAuth
    navigate('/'); // Redirect user to login page
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-purple-400 via-violet-600 to-pink-500">
      <div className="bg-white rounded-lg shadow-lg p-10 text-center">
        <h1 className="text-3xl font-bold mb-4 text-red-600">تم رفض الوصول</h1>
        <p className="text-gray-700 mb-2">ليس لديك أى صلاحية.</p>
        <p className="text-gray-700 mb-4">يرجى الاتصال بالمسؤول لتحديد الصلاحيات.</p>
        <button 
          onClick={handleLogout} 
          className="text-white bg-red-600 hover:bg-red-700 font-bold py-2 px-4 rounded">
          تسجيل الخروج
        </button>
      </div>
    </div>
  );
};

export default UserPage;
