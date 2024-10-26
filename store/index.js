import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import cartSlice from './reducers/cartSlice';
import authSlice from './slices/authSlice';
import favoriteSlice from './reducers/favoriteSlice';
import messageSlice from './reducers/messageSlice';
import { productApi } from './services/productApi';
import { reducer as toastrReducer } from 'react-redux-toastr';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from './sync_storage';

// Root reducer configuration
const combinedReducer = combineReducers({
  [productApi.reducerPath]: productApi.reducer,
  cart: cartSlice,
  favorite: favoriteSlice,
  auth: authSlice,
  message: messageSlice,
  toastr: toastrReducer,
});

// Handling `HYDRATE` action for Next.js
const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // retain the existing state
      ...action.payload, // apply the hydrated state
    };
    // Preserve states that should not be overwritten by server state
    if (state.auth) nextState.auth = state.auth;
    if (state.cart) nextState.cart = state.cart;
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

// Persist configuration
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['cart', 'auth', 'favorite'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store configuration
const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [
            HYDRATE,
            FLUSH,
            REHYDRATE,
            PAUSE,
            PERSIST,
            PURGE,
            REGISTER,
          ],
        },
      }).concat(productApi.middleware),
  });

export const store = makeStore();
export const persistor = persistStore(store);
export const wrapper = createWrapper(makeStore);

export default store;
