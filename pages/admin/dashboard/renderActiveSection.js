import dynamic from 'next/dynamic';
import Home from './index';
import ManageCategories from './categories';
import ProductListings from './products';
import { useSidebar } from '../../../hooks/SidbarContext';

export const renderActiveSection = (activeSection) => {
  const sectionsMap = {
    '/': Home,
    '/categories': ManageCategories,
    '/products': ProductListings,
  };

  const Component = sectionsMap[activeSection] ? dynamic(() => Promise.resolve(sectionsMap[activeSection])) : Home;
  
  return (
  <>
    <Component />
  </>
  );
};
