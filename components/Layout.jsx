import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  const router = useRouter();
  const user = useSelector((state) => state.auth.user); // Get user data from Redux
  const [hasRedirected, setHasRedirected] = useState(false); // Track redirection state

  useEffect(() => {
    if (!user || user.role_id === 3) {
      if (!hasRedirected) {
        setHasRedirected(true); // Prevent further redirects
        router.push('/'); // Redirect to home if not authorized
      }
    } else if (user.role_id === 1 || user.role_id === 2) {
      // Allow access to children
      setHasRedirected(false); // Reset the state if user is valid
    }
  }, [user, router, hasRedirected]);

  return (
    <div className="flex flex-col min-h-screen"> {/* Ensure full page height */}
      <Navbar />
      <main className="flex-grow"> {/* Main content takes the remaining space */}
        {children} {/* Render the children components */}
      </main>
      <Footer className="mt-auto" /> {/* Footer stays at the bottom */}
    </div>
  );
};

export default Layout;
