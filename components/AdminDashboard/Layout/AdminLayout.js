import { SidebarProvider } from '../../../hooks/SidbarContext';
import AdminNavbar from './Navbar/AdminNavbar';
import AdminFooter from './Footer/AdminFooter';
import AdminSidebar from './SideBar/AdminSideBar';
import Home from '../Home';

const AdminLayout = () => {
  return (
    <>
      <SidebarProvider>
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
          {/* Sidebar */}
          <AdminSidebar />

          {/* Main content area */}
          <div className="flex flex-col flex-1 w-full transition-all duration-300">
            <AdminNavbar />
            <Home />
          </div>
        </div>
        <AdminFooter />
      </SidebarProvider>
    </>
  );
};

export default AdminLayout;
