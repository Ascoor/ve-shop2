import { useState } from 'react';
import { SidebarProvider, useSidebar } from '../../../hooks/SidbarContext';
import AdminNavbar from './Navbar/AdminNavbar';
import AdminFooter from './Footer/AdminFooter';
import AdminSidebar from './SideBar/AdminSideBar';
import { renderActiveSection } from '../Sections/renderActiveSection';

const AdminLayout = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <SidebarProvider>
      <AdminContent activeSection={activeSection} setActiveSection={setActiveSection} />
    </SidebarProvider>
  );
};

// المكون الداخلي الذي يستدعي useSidebar
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
            className={`flex-1 h-full overflow-y-auto p-4 transition-all duration-300 ${
              isSidebarOpen ? 'md:mr-64' : 'md:mr-16' // Adjust margin based on sidebar state
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
