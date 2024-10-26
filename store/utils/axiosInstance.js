// store/utils/axiosInstance.js
import axios from 'axios';


const axiosInstance = axios.create({
  baseURL:  process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add Authorization header automatically
axiosInstance.interceptors.request.use(
  (config) => {
    // Check if running on the client side
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('access_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
