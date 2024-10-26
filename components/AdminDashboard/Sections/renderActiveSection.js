import Home from '../Home';
import ProductListings from './Products/productListings'; // تأكد من المسار الصحيح
import Users from './Users/userList'; // تأكد من المسار الصحيح
import SaleList from './Sales/salesList'; // تأكد من المسار الصحيح
import Inventory from './Inventory'; // تأكد من المسار الصحيح
import Reports from './ReportsActivities'; // تأكد من المسار الصحيح
import Settings from './Settings'; // تأكد من المسار الصحيح
export const renderActiveSection = (activeSection) => {
  switch (activeSection) {
    case 'home':
      return <Home />;
    case 'products':
      return <ProductListings />;
    case 'product-add':
      return <AddProduct />; // صفحة إضافة منتج
    case 'manage-offers':
      return <ManageOffers />; // صفحة إدارة العروض
    case 'product-reports':
      return <ProductReports />; // صفحة تقارير المنتجات
    // باقي الأقسام الفرعية بناءً على الحاجة
    default:
      return <Home />;
  }
};
