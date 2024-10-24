import React from 'react';
import { useRouter } from 'next/router';
import DashboardCharts from './charts';

const Dashboard = () => {
  const router = useRouter();
  const { section } = router.query; // Get the section from the URL

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background-day)] dark:bg-[var(--color-background-night)]"> 
      <main className="flex-1 flex items-center justify-center p-4">
        {/* قالب يتوسط الشاشة ويكون متجاوب مع الوضع الليلي والنهاري */}
        <div className="border border-[var(--color-component-border-day)] dark:border-[var(--color-component-border-night)] 
          rounded-lg shadow-lg h-full max-w-4xl p-6 bg-[var(--color-component-background-day)] dark:bg-[var(--color-component-background-night)] min-h-[700px]">
          {/* Render default content or charts */}
          {!section && <DashboardCharts />} {/* عرض المخططات الافتراضية */}

          {/* Render section content based on the selected section */}
          {section === 'products' && <ProductsComponent />}
          {section === 'orders' && <OrdersComponent />}
          {section === 'users' && <UsersComponent />}
          {section === 'reports' && <ReportsComponent />}
          {/* Add more sections as needed */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
