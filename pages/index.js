import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { logoutUserThunk } from '../store/slices/authSlice';
import { onAuthStateChange } from '../store/services/authService';
import LoadingBalls from '../components/common/LoadingBalls';
import StoreContent from '../components/Home/StoreContent';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserRole = async () => {
      const user = await onAuthStateChange();
      const userRole = user ? user.role_id : null;

      // Navigate based on `role_id`
      if (userRole === 1 || userRole === 2) {
        // Redirect to admin dashboard
        router.replace('/admin/dashboard');
      } else {
        // If user does not have the right role, redirect to store
        router.replace('/'); // توجيه المستخدم إلى واجهة المتجر
      }

      setLoading(false); // Stop loading after checking user role
    };

    fetchUserRole();
  }, [router]);

  if (loading) {
    return <LoadingBalls />; // Show loading component while fetching data
  }

  // If the user is not redirected, show store content
  return <StoreContent />;
};

export default HomePage;
