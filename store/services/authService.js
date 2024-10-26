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
    return response.data.user;
  } catch (error) {
    throw new Error(error.response?.data?.error || error.message);
  }
};

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
    throw new Error(error.response?.data?.error || error.message);
  }
};
