import { useSelector } from 'react-redux';
import Categories from "./Categories";
import Nav from "./Nav";
import ResponsiveNavbar from "./ResponsiveNavbar";
import DashboardSections from "./DashboardSections"; // استيراد DashboardSections
import { selectUser } from '../../store/slices/authSlice'; // استيراد بيانات المستخدم من Redux

const Navbar = () => {
  // الحصول على بيانات المستخدم من Redux
  const user = useSelector(selectUser);

  return (
    <>
      <div className='hidden md:flex border-b bg-white justify-between w-full'>
        <div className='container-custom flex flex-col'>
          <Nav />

          {/* عرض Categories إذا كان المستخدم غير مسجل أو role_id = 3 */}
          {(!user || user?.role_id === 3) && <Categories />}

          {/* عرض DashboardSections إذا كان role_id = 1 أو 2 */}
          {(user?.role_id === 1 || user?.role_id === 2) && <DashboardSections />}
        </div>
      </div>

      {/* Navbar للجوال */}
      <div className='md:hidden'>
        <ResponsiveNavbar />
      </div>
    </>
  );
};

export default Navbar;
