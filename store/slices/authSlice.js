import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "../reducers/messageSlice";
import { createUser, loginUser, logoutUser, onAuthStateChange } from '../services/authService';

const initialState = {
  user: null,
  status: "idle",
  error: null,
};

// Define async thunks for authentication operations
export const registerUser = createAsyncThunk("auth/registerUser", async (payload, { dispatch }) => {
  const { email, password, name } = payload;
  try {
    const user = await createUser(email, password, name);
    dispatch(setMessage({ message: "User registered successfully" }));
    return user;
  } catch (error) {
    dispatch(setMessage({ message: error.message, error: true }));
    throw error;
  }
});

export const loginUserThunk = createAsyncThunk("auth/loginUser", async (payload, { dispatch }) => {
  const { email, password } = payload;
  try {
    const user = await loginUser(email, password);
    dispatch(setMessage({ message: "User logged in successfully" }));
    return user;
  } catch (error) {
    dispatch(setMessage({ message: error.message, error: true }));
    throw error;
  }
});

// تعديل دالة تسجيل الخروج
export const logoutUserThunk = createAsyncThunk("auth/logoutUser", async (_, { dispatch }) => {
  try {
    // حذف التوكن من LocalStorage بدون إرسال أي طلب إلى الخادم
    localStorage.removeItem('token');
    dispatch(setMessage({ message: "User logged out successfully" }));
    return null;  // تعيين حالة المستخدم إلى null
  } catch (error) {
    dispatch(setMessage({ message: error.message, error: true }));
    throw error;
  }
});

export const trackAuthState = createAsyncThunk("auth/trackAuthState", async (_, { dispatch }) => {
  try {
    const user = await onAuthStateChange();
    return user;
  } catch (error) {
    dispatch(setMessage({ message: error.message, error: true }));
    throw error;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => { state.status = "loading"; })
      .addCase(registerUser.fulfilled, (state, action) => { state.status = "succeeded"; state.user = action.payload; })
      .addCase(registerUser.rejected, (state, action) => { state.status = "failed"; state.error = action.error.message; })
      .addCase(loginUserThunk.pending, (state) => { state.status = "loading"; })
      .addCase(loginUserThunk.fulfilled, (state, action) => { state.status = "succeeded"; state.user = action.payload; })
      .addCase(loginUserThunk.rejected, (state, action) => { state.status = "failed"; state.error = action.error.message; })
      .addCase(logoutUserThunk.pending, (state) => { state.status = "loading"; })
      .addCase(logoutUserThunk.fulfilled, (state) => { state.status = "idle"; state.user = null; })  // تعيين null عند تسجيل الخروج
      .addCase(logoutUserThunk.rejected, (state, action) => { state.status = "failed"; state.error = action.error.message; })
      .addCase(trackAuthState.pending, (state) => { state.status = "loading"; })
      .addCase(trackAuthState.fulfilled, (state, action) => { state.status = "idle"; state.user = action.payload; })
      .addCase(trackAuthState.rejected, (state, action) => { state.status = "idle"; state.error = action.error.message; });
  },
});

export const selectUser = (state) => state.auth.user;
export const selectStatus = (state) => state.auth.status;
export const selectError = (state) => state.auth.error;

export const { setUser } = authSlice.actions;
export default authSlice.reducer;