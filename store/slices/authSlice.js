import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { setMessage } from "./messageSlice";

// حالة أولية مع بيانات افتراضية
const initialState = {
  user: { name: "Demo User", email: "demo@example.com" }, // مستخدم تجريبي
  status: "idle",
  error: null,
};

// تسجيل مستخدم تجريبي
export const registerUser = createAsyncThunk("auth/registerUser", async (_, { dispatch }) => {
  const demoUser = { name: "Demo User", email: "demo@example.com" };
  dispatch(setMessage({ message: "Demo: User registered successfully" }));
  return demoUser; // إرجاع بيانات المستخدم التجريبي
});

// تسجيل دخول مستخدم تجريبي
export const loginUserThunk = createAsyncThunk("auth/loginUser", async (_, { dispatch }) => {
  const demoUser = { name: "Demo User", email: "demo@example.com" };
  dispatch(setMessage({ message: "Demo: User logged in successfully" }));
  return demoUser; // إرجاع بيانات المستخدم التجريبي
});

// تسجيل خروج المستخدم
export const logoutUserThunk = createAsyncThunk("auth/logoutUser", async (_, { dispatch }) => {
  dispatch(setMessage({ message: "Demo: User logged out successfully" }));
  return null; // تعيين مستخدم null عند تسجيل الخروج
});

// تتبع حالة المصادقة (في وضع الديمو)
export const trackAuthState = createAsyncThunk("auth/trackAuthState", async () => {
  return { name: "Demo User", email: "demo@example.com" }; // إرجاع بيانات المستخدم التجريبي
});

// إنشاء Slice لإدارة حالة المصادقة في وضع العرض
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extractRehydrationInfo: (action) => {
    if (action.type === HYDRATE) {
      return action.payload.auth;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(loginUserThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(logoutUserThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logoutUserThunk.fulfilled, (state) => {
        state.status = "idle";
        state.user = null;
      })
      .addCase(logoutUserThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(trackAuthState.pending, (state) => {
        state.status = "loading";
      })
      .addCase(trackAuthState.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(trackAuthState.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      });
  },
});

// إجراءات `authSlice`
export const { setUser } = authSlice.actions;

// محددات الاختيار (Selectors) لحالة المصادقة
export const selectUser = (state) => state.auth.user;
export const selectStatus = (state) => state.auth.status;
export const selectError = (state) => state.auth.error;

export default authSlice.reducer;
