// pages/detail/[id].js
import Head from 'next/head';
import { useRouter } from 'next/router';
import ProductDetails from '../../components/ProductDetails';
import { bestSellers,womenProducts } from '../../data'; // تأكد من مسار الاستيراد الصحيح

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // تحقق من أن الـ id متوفر
  if (!id) {
    return <div>Loading...</div>;
  }

  // تحويل id إلى رقم (لأن id يأتي كسلسلة نصية من الـ URL)
  const productId = parseInt(id, 10);

  // البحث عن المنتج في قائمة bestSellers and womenProducts
  const product = bestSellers.find(item => item.id === productId) || womenProducts.find(item => item.id === productId);

  // إذا لم يتم العثور على المنتج
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main className='container mx-auto mt-[72px]'>
      <Head>
        <title>{product.title}</title>
      </Head>
      <ProductDetails product={product} />
    </main>
  );
};

export default ProductDetail;
