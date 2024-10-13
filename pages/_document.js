import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ar" dir="rtl">
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;700&display=swap&font-display=swap" rel="stylesheet" />
  <meta name="description" content="VE-Shop - أفضل المنتجات والعروض" />
          <meta name="keywords" content="متجر, شراء, منتجات, تسوق, إلكترونيات, ملابس" />
        </Head>
        <body className="font-noto bg-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
