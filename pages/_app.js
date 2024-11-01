import '../styles/globals.css';
import 'swiper/css';
import { Provider } from 'react-redux';
import { useEffect, useState } from 'react';
import store from '../store';
import PublicLayout from '../layouts/PublicLayout';
import AdminStaffLayout from '../layouts/AdminStaffLayout';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../store';
import '../styles/globals.css';
import { selectUser } from '../store/slices/authSlice';
import { useSelector } from 'react-redux';

function AppContent({ Component, pageProps }) {
  const user = useSelector(selectUser);
  const userRole = user?.role_id;

  // اختيار Layout بناءً على role_id
  const Layout = userRole === 1 || userRole === 2 ? AdminStaffLayout : PublicLayout;

  return (
    <Layout userRole={userRole}>
      <Component {...pageProps} />
    </Layout>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContent Component={Component} pageProps={pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
