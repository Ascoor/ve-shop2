import { useSelector } from "react-redux";
import Categories from "./Categories";
import Nav from "./Nav";
import ResponsiveNavbar from "./ResponsiveNavbar";
import DashboardSections from "./DashboardSections"; 
import { selectUser } from '../../store/slices/authSlice'; 

const Navbar = () => {
  const user = useSelector(selectUser); // Get user data from Redux

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
  