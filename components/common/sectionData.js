import {  FiBox, FiTag, FiUsers, FiLayers, FiPackage, FiTruck, FiBarChart, FiDollarSign } from 'react-icons/fi';

export const sections = [

  {
    id: 1,
    name: 'إدارة المنتجات',
    icon: FiBox,
    dropdown: [
      { id: 11, name: 'قائمة المنتجات', link: '/products' },
      { id: 12, name: 'إضافة منتج', link: '/product-add' },
      { id: 13, name: 'إدارة العروض', link: '/products/manageOffers' },
      { id: 14, name: 'تقارير المنتجات', link: '/products/reports' },
    ],
  },
  {
    id: 2,
    name: 'إدارة التصنيفات',
    icon: FiTag,
    dropdown: [
      { id: 21, name: 'قائمة التصنيفات', link: '/categories/list' },
      { id: 22, name: 'إضافة تصنيف', link: '/categories/add' },
      { id: 23, name: 'إدارة التصنيفات الفرعية', link: '/categories/manageSubcategories' },
    ],
  },
  {
    id: 3,
    name: 'إدارة المستخدمين',
    icon: FiUsers,
    dropdown: [
      { id: 31, name: 'قائمة المستخدمين', link: '/users/list' },
      { id: 32, name: 'إدارة الأدوار', link: '/users/roles' },
      { id: 33, name: 'إعدادات الأمان', link: '/users/securitySettings' },
    ],
  },
  {
    id: 4,
    name: 'إدارة المخازن',
    icon: FiLayers,
    dropdown: [
      { id: 41, name: 'قائمة المخازن', link: '/stores/list' },
      { id: 42, name: 'إضافة مخزن جديد', link: '/stores/add' },
      { id: 43, name: 'تقارير المخازن', link: '/stores/reports' },
    ],
  },
  {
    id: 5,
    name: 'إدارة الطلبات',
    icon: FiPackage,
    dropdown: [
      { id: 51, name: 'قائمة الطلبات', link: '/orders/list' },
      { id: 52, name: 'إدارة المرتجعات', link: '/orders/returns' },
      { id: 53, name: 'تتبع الطلبات', link: '/orders/track' },
    ],
  },
  {
    id: 6,
    name: 'إدارة الشحن',
    icon: FiTruck,
    dropdown: [
      { id: 61, name: 'إدارة الشحن', link: '/shipping/list' },
      { id: 62, name: 'مزودي الشحن', link: '/shipping/provide' },
      { id: 63, name: 'تتبع الشحنات', link: '/shipping/track' },
    ],
  },
  {
    id: 7,
    name: 'التقارير والإحصائيات',
    icon: FiBarChart,
    dropdown: [
      { id: 71, name: 'تقارير المبيعات', link: '/reports/sales' },
      { id: 72, name: 'تقارير المخزون', link: '/reports/inventory' },
      { id: 73, name: 'تحليلات العملاء', link: '/reports/customers' },
      { id: 74, name: 'تحليل الأداء', link: '/reports/performance' },
    ],
  },
  {
    id: 8,
    name: 'الإعدادات المالية',
    icon: FiDollarSign,
    dropdown: [
      { id: 81, name: 'إعدادات الدفع', link: '/settings/payment' },
      { id: 82, name: 'إدارة العروض الترويجية', link: '/settings/promotions' },
      { id: 83, name: 'إعدادات الضرائب', link: '/settings/taxes' },
    ],
  },
];
