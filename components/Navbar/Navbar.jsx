import { useSelector } from 'react-redux';
import Categories from './Categories';
import Nav from './Nav';
import ResponsiveNavbar from './ResponsiveNavbar';
import { selectUser } from '../../store/slices/authSlice';

const Navbar = () => {
  const user = useSelector(selectUser); // Get user data from Redux

  return (
    <>
      <div className="hidden md:flex border-b justify-between w-full ">
        <div className="container-custom flex flex-col">
          <Nav isGuest={!user} />
          {/* عرض Categories إذا كان المستخدم زائر أو دوره 3 */}
          {(!user || user?.role_id === 3) && <Categories />}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        <ResponsiveNavbar isGuest={!user} />
      </div>
    </>
  );
};

export default Navbar;
