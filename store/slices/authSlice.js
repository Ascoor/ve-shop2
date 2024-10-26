import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from '../reducers/messageSlice';
import {
  createUser,
  loginUser,
  onAuthStateChange,
} from '../services/authService';

const initialState = {
  user: null,
  status: 'idle',
  error: null,
};

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (payload, { dispatch }) => {
    const { email, password, name } = payload;
    try {
      const user = await createUser(email, password, name);
      dispatch(setMessage({ message: 'تم تسجيل المستخدم بنجاح' }));
      return user;
    } catch (error) {
      dispatch(setMessage({ message: error.message, error: true }));
      throw error;
    }
  },
);

export const loginUserThunk = createAsyncThunk(
  'auth/loginUser',
  async (payload, { dispatch }) => {
    const { email, password } = payload;
    try {
      const user = await loginUser(email, password);
      dispatch(setMessage({ message: 'تم تسجيل الدخول بنجاح' }));
      return user;
    } catch (error) {
      let errorMessage = 'حدث خطأ أثناء محاولة تسجيل الدخول';
      if (error.response && error.response.status === 401) {
        errorMessage = 'البريد الإلكتروني أو كلمة المرور غير صحيحة';
      } else if (error.response && error.response.status === 404) {
        errorMessage = 'البريد الإلكتروني غير مسجل';
      } else if (error.message) {
        errorMessage = error.message;
      }
      dispatch(setMessage({ message: errorMessage, error: true }));
      throw error;
    }
  },
);

export const logoutUserThunk = createAsyncThunk(
  'auth/logoutUser',
  async (_, { dispatch }) => {
    try {
      localStorage.removeItem('token');
      dispatch(setMessage({ message: 'تم تسجيل الخروج بنجاح' }));
      return null;
    } catch (error) {
      dispatch(setMessage({ message: error.message, error: true }));
      throw error;
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(loginUserThunk.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(logoutUserThunk.fulfilled, state => {
        state.status = 'idle';
        state.user = null;
      })
      .addCase(logoutUserThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectUser = state => state.auth.user;
export const selectStatus = state => state.auth.status;
export const selectError = state => state.auth.error;
export const { setUser } = authSlice.actions;
export default authSlice.reducer;
