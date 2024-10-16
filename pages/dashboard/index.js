import React from 'react';
import { useRouter } from 'next/router';
import DashboardCharts from './charts';

const Dashboard = () => {
  const router = useRouter();
  const { section } = router.query; // Get the section from the URL

  return (
    <div className="h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center p-4"> {/* Center the content */}
        <div className="border border-gray-300 rounded-lg shadow-lg w-full max-w-4xl p-6"> {/* Responsive border and padding */}
          <DashboardCharts /> {/* Display the charts here */}

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
