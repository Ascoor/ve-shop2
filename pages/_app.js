import Layout from "../components/Layout";
import "../styles/globals.css";
import 'swiper/css';
import { Provider } from "react-redux";
import store from "../store";
import ReduxToastr from "react-redux-toastr/lib/ReduxToastr";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../store";
import Head from "next/head"; // إضافة Head هنا

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        getState={(state) => state.toastr}
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
