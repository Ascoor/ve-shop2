import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { SidebarProvider, useSidebar } from '../hooks/SidbarContext';
import AdminNavbar from '../components/AdminDashboard/Navbar/AdminNavbar';
import AdminFooter from '../components/AdminDashboard/Footer/AdminFooter';
import AdminSidebar from '../components/AdminDashboard/SideBar/AdminSidebar';
import { renderActiveSection } from '../pages/admin/dashboard/renderActiveSection';
import { onAuthStateChange } from '../store/services/authService';

const AdminLayout = () => {
  const [activeSection, setActiveSection] = useState('/');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkUserRole = async () => {
      const user = await onAuthStateChange();
      const userRole = user ? user.role_id : null;

      // تحقق من الدور
      if (userRole === 1 || userRole === 2) {
        setIsAuthorized(true);
      } else {
        router.replace('/'); // إعادة توجيه إلى المتجر إذا لم يكن لديه الدور المناسب
      }
    };

    checkUserRole();
  }, [router]);

  // إذا لم يكن المستخدم مخولاً، لا تعرض المحتوى
  if (!isAuthorized) {
    return null; // يمكنك أيضًا عرض مكون تحميل هنا
  }

  return (
    <SidebarProvider>
      <AdminContent activeSection={activeSection} setActiveSection={setActiveSection} />
    </SidebarProvider>
  );
};

const AdminContent = ({ activeSection, setActiveSection }) => {
  const { isSidebarOpen } = useSidebar();

  return (
    <>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        {/* Sidebar */}
        <AdminSidebar onSectionChange={setActiveSection} />

        {/* Main content area */}
        <div className="flex flex-col flex-1 w-full transition-all duration-300">
          <AdminNavbar />
          <main
            className={`flex-1 h-full overflow-y-auto transition-all duration-300 ${
              isSidebarOpen ? 'md:mr-64' : 'mr-0'
            }`}
          >
            {renderActiveSection(activeSection)}
          </main>
        </div>
      </div>
      <AdminFooter />
    </>
  );
};

export default AdminLayout;
