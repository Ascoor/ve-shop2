import axios from 'axios';

// تعيين الرابط الأساسي للـ API الخاص بـ Laravel
const apiBaseURL = 'https://store.ve-shop.co/api';

// إنشاء مستخدم جديد عبر إرسال طلب POST إلى واجهة التسجيل
export const createUser = async (email, password, name) => {
  try {
    const response = await axios.post(`${apiBaseURL}/register`, {
      name,
      email,
      password,
    });
    // استجابة تتضمن معلومات المستخدم والتوكن
    return response.data.user;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

// تسجيل دخول المستخدم باستخدام البريد الإلكتروني وكلمة المرور
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${apiBaseURL}/login`, {
      email,
      password,
    });
    return response.data.user;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

// تسجيل خروج المستخدم الحالي من خلال إرسال طلب POST إلى واجهة تسجيل الخروج
export const logoutUser = async (token) => {
  try {
    await axios.post(`${apiBaseURL}/logout`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

// التحقق من حالة المصادقة للمستخدم الحالي
export const onAuthStateChange = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const response = await axios.get(`${apiBaseURL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};
