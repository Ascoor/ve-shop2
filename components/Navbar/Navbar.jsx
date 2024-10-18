import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Categories from "./Categories";
import Nav from "./Nav";
import ResponsiveNavbar from "./ResponsiveNavbar";
import DashboardSections from "./DashboardSections"; 
import { selectUser } from '../../store/slices/authSlice'; 

const Navbar = () => {
  const user = useSelector(selectUser); // Get user data from Redux

  // Add the isDarkMode state
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  return (
    <>
      <div className='hidden md:flex border-b bg-white justify-between w-full'>
        <div className='container-custom flex flex-col'>
          <Nav />
          
          {/* Show Categories for guests or users with role_id 3 */}
          {(!user || user?.role_id === 3) && <Categories />}
          
          {/* Show DashboardSections for users with role_id 1 or 2 */}
          {(user?.role_id === 1 || user?.role_id === 2) && <DashboardSections />}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className='md:hidden'>
        <ResponsiveNavbar />
      </div>
    </>
  );
};

export default Navbar;
