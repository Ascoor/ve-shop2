import Head from "next/head";
import BestSeller from "../components/Home/BestSeller";
import Brands from "../components/Home/Brands";
import Loading from "../components/Loading";
import Slider from "../components/Home/Slider";
import Collection from "../components/Home/Collection";
 
import { bestSellers, womenProducts, brands } from "../data"; 
export default function Home() {
  // البيانات التجريبية
  const DemoBestSellers = bestSellers;  // تعيين البيانات التجريبية لقائمة الأكثر مبيعًا
  const DemoWomenProducts = womenProducts;  // تعيين البيانات التجريبية لقائمة منتجات المرأة
  const isLoading = false;  // تعيين حالة التحميل إلى false لتفادي مشاكل العرض
  const womenLoading = false;

  return (
    <div dir='rtl' className='font-cairo'>
      <Head>
        <title>VE-Shop</title>
        <meta
          name='keywords'
          content='
          التجارة الإلكترونية, التسوق, شراء, بيع, منتجات
          '
        />
      </Head>
      {/* عرض شعار العلامات التجارية */}
      <Brands loading={isLoading} brands={brands} />
      
      {/* عرض شريط التمرير */}
      <Slider loading={isLoading} />

      {/* التحقق من حالة التحميل */}
      {isLoading || womenLoading ? (
        <Loading />
      ) : (
        <>
          {/* عرض قائمة الأكثر مبيعًا */}
          <BestSeller loading={isLoading} bestSellers={DemoBestSellers} />

          {/* عرض مجموعة منتجات المرأة */}
          <Collection loading={womenLoading} womenProducts={DemoWomenProducts } />
        </>
      )}
    </div>
  );
}
