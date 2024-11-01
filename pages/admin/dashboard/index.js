import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ChartsComponent from './Charts/ChartsComponent';
import { onAuthStateChange } from '../../../store/services/authService'; // تأكد من استيراد هذه الدالة

const Home = () => {
  return (
    <div className="container px-6 mx-auto grid">
      <div className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple" dir="rtl">
        <h2 className="my-6 text-2xl font-semibold text-gray-200 text-right">لوحة التحكم</h2>
      </div>

      <div className="grid gap-6 mb-8 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4">
        {/* باقي محتوى لوحة التحكم ... */}
      </div>

      <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-2">
        <ChartsComponent />
      </div>

      {/* جدول البيانات هنا ... */}
    </div>
  );
};

export default Home;
