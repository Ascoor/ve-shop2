import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const PublicLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main> {/* عرض محتوى الصفحة هنا */}
      <Footer className="mt-auto" />
    </div>
  );
};

export default PublicLayout;
