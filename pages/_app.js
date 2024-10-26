import Layout from '../components/Layout';
import '../styles/globals.css';
import 'swiper/css';
import { Provider } from 'react-redux';
import store from '../store';
import ReduxToastr from 'react-redux-toastr/lib/ReduxToastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../store';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>VE-SHOP | أفضل المنتجات والعروض في متجر VE</title>
        <meta
          name="description"
          content="احصل على أفضل العروض والمنتجات من VE-Shop، بما في ذلك الإلكترونيات، الملابس، والمزيد."
        />
        <meta
          name="keywords"
          content="متجر, شراء, منتجات, تسوق, إلكترونيات, ملابس, VE-Shop"
        />
        <meta property="og:title" content="VE-SHOP | أفضل المنتجات والعروض" />
        <meta
          property="og:description"
          content="اكتشف تشكيلة واسعة من المنتجات بأفضل الأسعار على VE-Shop."
        />
        <meta property="og:url" content="https://ve-shop.co" />
      </Head>
      <ReduxToastr
        timeOut={3000} // مدة العرض
        newestOnTop={false}
        preventDuplicates
        position="center-top" // مكان ظهور الرسالة
        getState={state => state.toastr}
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />

      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
