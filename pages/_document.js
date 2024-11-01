import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ar" dir="rtl">
        <Head>
      
          <meta name="description" content="VE-Shop - أفضل المنتجات والعروض" />
          <meta
            name="keywords"
            content="متجر, شراء, منتجات, تسوق, إلكترونيات, ملابس"
          />
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
