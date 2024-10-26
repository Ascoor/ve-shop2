import { createContext, useContext, useState } from 'react';

// Create the Sidebar context
const SidebarContext = createContext();

// SidebarProvider component to provide context to the app
export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Toggle desktop sidebar
  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  // Toggle mobile sidebar
  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(prev => !prev);
  };

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        isMobileSidebarOpen,
        toggleMobileSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook to use the Sidebar context
export const useSidebar = () => {
  return useContext(SidebarContext);
};
