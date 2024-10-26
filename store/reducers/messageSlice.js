import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  type: 'info', // تمثل نوع الرسالة، مثل 'info', 'success', 'warning', 'error'، وهو افتراضيا 'info'
};

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type || 'info';
    },
    clearMessage: state => {
      state.message = '';
      state.type = 'info';
    },
  },
});

export const { setMessage, clearMessage } = messageSlice.actions;

export const selectMessage = state => state.message;

export default messageSlice.reducer;
