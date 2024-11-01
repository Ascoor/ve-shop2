import axios from 'axios';

const apiBaseURL = process.env.NEXT_PUBLIC_API_URL;

export const createUser = async (name, email, password) => {
  try {
    const response = await axios.post(`${apiBaseURL}/register`, {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || error.message);
  }
};
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${apiBaseURL}/login`, {
      email,
      password,
    });
    const { token, user } = response.data;

    // تخزين التوكن في localStorage
    localStorage.setItem('token', token);

    return { ...user, token }; // إضافة token و role_id إلى بيانات المستخدم
  } catch (error) {
    throw new Error(error.response?.data?.error || error.message);
  }
};
export const onAuthStateChange = async () => {
  try {
    // تحقق من أن البيئة هي المتصفح قبل محاولة الوصول إلى `localStorage`
    if (typeof window === 'undefined') return null;

    const token = localStorage.getItem('token');
    if (!token) return null;

    const response = await axios.get(`${apiBaseURL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { role_id, ...userData } = response.data;
    return { role_id, ...userData };
  } catch (error) {
    throw new Error(error.response?.data?.error || error.message);
  }
};
