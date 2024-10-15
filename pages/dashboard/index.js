import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/slices/authSlice';
import { useRouter } from 'next/router';
import Link from 'next/link';
import DashboardCharts from './charts';

const Dashboard = () => {
  const user = useSelector(selectUser);
  const router = useRouter(); // لاستخدام التوجيه

  useEffect(() => {
    // إذا لم يكن المستخدم موجودًا أو كان role_id = 3، يتم إعادة توجيهه إلى الصفحة الرئيسية
    if (!user || user.role_id === 3) {
      router.push('/');
    }
  }, [user, router]);

  // إذا كان المستخدم Admin (role_id = 1)
  if (user?.role_id === 1) {
    return (
    
    
      <div className="h-screen flex flex-col">
        <main className="flex-1">
        {/* المحتوى الرئيسي */}
      <DashboardCharts />
        </main>
      </div>
    );
  }

  // إذا كان المستخدم Employee (role_id = 2)
  if (user?.role_id === 2) {
    return (
      <div>
        <h1>Welcome {user.name}! You are an Employee.</h1>
        <nav>
          <ul>
            <li><Link href="/dashboard/products">Manage Products</Link></li>
            <li><Link href="/dashboard/orders">Manage Orders</Link></li>
          </ul>
        </nav>
      </div>
    );
  }

  // في حالة عدم توافر البيانات المناسبة، لا يتم عرض أي شيء
  return null;
};

export default Dashboard;
