import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Head from "next/head";
import dynamic from 'next/dynamic';
import Loading from "../components/Loading";
import Slider from "../components/Home/Slider";
import { bestSellers, womenProducts, brands } from "../data";

// Dynamically import components
const BestSeller = dynamic(() => import('../components/Home/BestSeller'), {
  loading: () => <Loading />,
  ssr: false
});

const Collection = dynamic(() => import('../components/Home/Collection'), {
  loading: () => <Loading />,
  ssr: false
});

const Brands = dynamic(() => import('../components/Home/Brands'), {
  ssr: false
});

export default function Home() {
  const DemoBestSellers = bestSellers;
  const DemoWomenProducts = womenProducts;
  const isLoading = false;
  const womenLoading = false;

  // Use useRouter for navigation
  const router = useRouter();

  // Get user data from Redux
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    // If user is logged in, redirect to dashboard if they have the right role
    if (user) {
      if (user.role_id === 1 || user.role_id === 2) {
        router.push('/dashboard');
      }
    }
  }, [user, router]);

  return (
    <div className="font-noto">
      <Head>
        <title>VE-SHOP | متجر VE</title>
        <meta name="description" content="احصل على أفضل العروض والمنتجات من VE-Shop، بما في ذلك الإلكترونيات، الملابس، والمزيد." />
        <meta name="keywords" content="متجر, شراء, منتجات, تسوق, إلكترونيات, ملابس, VE-Shop" />
        <meta property="og:title" content="VE-SHOP | أفضل المنتجات والعروض" />
        <meta property="og:description" content="اكتشف تشكيلة واسعة من المنتجات بأفضل الأسعار على VE-Shop." />
        <meta property="og:url" content="https://ve-shop.co" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex items-center mb-4 text-red-500 justify-center">
        <h1 className="text-5xl font-bold text-center">VE-SHOP</h1>
      </div>

      {/* Load components dynamically */}
      <Brands loading={isLoading} brands={brands} />
      <Slider loading={isLoading} lazyLoad={true} />

      {isLoading || womenLoading ? (
        <Loading />
      ) : (
        <>
          <BestSeller loading={isLoading} bestSellers={DemoBestSellers} />
          <Collection loading={womenLoading} womenProducts={DemoWomenProducts} />
        </>
      )}
    </div>
  );
}
