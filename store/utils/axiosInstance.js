// store/utils/axiosInstance.js
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://127.0.0.1:8000/api";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// إضافة Interceptor لإضافة Authorization header تلقائيًا
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
