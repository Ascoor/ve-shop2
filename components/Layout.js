import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import AdminLayout from './AdminDashboard/Layout/AdminLayout';

const Layout = ({ children }) => {
  const router = useRouter();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      // تحقق من نوع المستخدم
      const isAdmin = user.role_id === 1 || user.role_id === 2;
      const isCustomer = user.role_id === 3;

      // إذا كان المستخدم إداري، يتم التوجيه إلى لوحة التحكم
      if (isAdmin) {
        router.replace('/'); // توجيه للوحة التحكم
      }

      // إذا كان المستخدم من الدور 3 (مستخدم عادي)، يتم التوجيه إلى الصفحة الرئيسية
      if (isCustomer) {
        router.replace('/'); // توجيه إلى الصفحة الرئيسية (المتجر)
      }
    }
  }, [user]);

  // إذا كان المستخدم إداري، عرض AdminLayout
  if (user && (user.role_id === 1 || user.role_id === 2)) {
    return <AdminLayout>{children}</AdminLayout>;
  }

  // إذا كان المستخدم زائر أو من الدور 3، عرض Layout العادي
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer className="mt-auto" />
    </div>
  );
};

export default Layout;
