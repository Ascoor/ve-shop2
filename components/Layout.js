// components/Layout.js
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import AdminLayout from './AdminDashboard/Layout/AdminLayout';

const Layout = ({ children }) => {
  const router = useRouter();
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    if (user) {
      const isAdmin = user.role_id === 1 || user.role_id === 2;
      const isCustomer = user.role_id === 3;

      // توجيه المستخدمين بناءً على نوع المستخدم
      if (isAdmin) {
        router.replace('/'); // توجيه إلى لوحة التحكم
      } else if (isCustomer) {
        router.replace('/'); // توجيه إلى الصفحة الرئيسية (المتجر)
      }
    }
  }, [user,router]);

  // عرض AdminLayout إذا كان المستخدم إداري
  if (user && (user.role_id === 1 || user.role_id === 2)) {
    return <AdminLayout />;
  }

  // عرض Layout العادي إذا كان المستخدم زائر أو من الدور 3
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer className="mt-auto" />
    </div>
    
  );
};

export default Layout;
