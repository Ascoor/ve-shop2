import { useEffect, useState } from "react"; 
import { useRouter } from "next/router"; 
import { useSelector } from "react-redux"; 
import Link from "next/link"; 
import { selectUser } from '../../store/slices/authSlice'; 

const DashboardSections = () => {
  const router = useRouter();
  const user = useSelector(selectUser); 

  // Ensure user is allowed to access dashboard sections
  useEffect(() => {
    if (!user || user.role_id === 3) {
      router.push('/'); // Redirect to home if not authorized
    }
  }, [user, router]);

  const [showSubSections, setShowSubSections] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const sections = [
    {
      id: 1,
      name: "المنتجات",
      dropdown: [
        { id: 11, name: "قائمة المنتجات", link: "/dashboard/products/productListings" }, 
        { id: 12, name: "إضافة منتج", link: "/dashboard/products/addProduct" },     
        { id: 13, name: "إدارة التصنيفات", link: "/dashboard/products/manageCategories" }, 
        { id: 14, name: "إدارة التاجات", link: "/dashboard/products/manageTags" },   
        { id: 15, name: "إدارة العروض", link: "/dashboard/products/manageOffers" },   
      ],
    },
    {
      id: 2,
      name: "المخزون",
      dropdown: [
        { id: 21, name: "إدارة المخزون", link: "/dashboard/inventory/inventoryManagement" },
        { id: 22, name: "إدارة المخازن", link: "/dashboard/inventory/warehouseManagement" }, 
        { id: 23, name: "إضافة مخزون", link: "/dashboard/inventory/addStock" },     
        { id: 24, name: "تقارير المخزون", link: "/dashboard/inventory/inventoryReports" },  
      ],
    },
    {
      id: 3,
      name: "المبيعات",
      dropdown: [
        { id: 31, name: "قائمة الطلبات", link: "/dashboard/sales/ordersList" },        
        { id: 32, name: "إدارة الطلبات", link: "/dashboard/sales/orderManagement" },        
        { id: 33, name: "طرق الدفع", link: "/dashboard/sales/paymentMethods" },            
        { id: 34, name: "تقارير المبيعات", link: "/dashboard/sales/salesReports" },      
      ],
    },
    {
      id: 4,
      name: "المستخدمين",
      dropdown: [
        { id: 41, name: "قائمة المستخدمين", link: "/dashboard/users/userList" },     
        { id: 42, name: "إضافة مستخدم", link: "/dashboard/users/addUser" },         
        { id: 43, name: "قائمة التقييمات", link: "/dashboard/users/reviewsList" },      
        { id: 44, name: "إدارة التقييمات", link: "/dashboard/users/manageReviews" },      
        { id: 45, name: "قائمة الرغبات", link: "/dashboard/users/wishlists" },        
        { id: 46, name: "إدارة سلة التسوق", link: "/dashboard/users/shoppingCartsManagement" },     
      ],
    },
    {
      id: 5,
      name: "المحتوى",
      dropdown: [
        { id: 51, name: "الصفحات", link: "/dashboard/content/pages" },              
        { id: 52, name: "المدونات", link: "/dashboard/content/blogs" },             
        { id: 53, name: "البنرات", link: "/dashboard/content/banners" },             
        { id: 54, name: "السلايدر", link: "/dashboard/content/sliders" },            
        { id: 55, name: "الأسئلة الشائعة", link: "/dashboard/content/faqs" },      
      ],
    },
    {
      id: 6,
      name: "الإعدادات",
      dropdown: [
        { id: 61, name: "إعدادات عامة", link: "/dashboard/settings/generalSettings" },        
        { id: 62, name: "إدارة الدول", link: "/dashboard/settings/manageCountries" },          
        { id: 63, name: "إدارة الولايات", link: "/dashboard/settings/manageStates" },       
        { id: 64, name: "إدارة المدن", link: "/dashboard/settings/manageCities" },          
        { id: 65, name: "إعدادات العملة", link: "/dashboard/settings/currencySettings" },       
        { id: 66, name: "إدارة طرق الشحن", link: "/dashboard/settings/shippingProvidersManagement" },      
      ],
    },
    {
      id: 7,
      name: "التقارير والأنشطة",
      dropdown: [
        { id: 71, name: "تقارير الشحنات", link: "/dashboard/reportsActivities/shipmentReports" },       
        { id: 72, name: "تقارير الأنشطة", link: "/dashboard/reportsActivities/activityReports" },       
        { id: 73, name: "إدارة التعليقات", link: "/dashboard/reportsActivities/commentsManagement" },      
        { id: 74, name: "إدارة الإشعارات", link: "/dashboard/reportsActivities/notificationsManagement" },      
        { id: 75, name: "سجلات النظام", link: "/dashboard/reportsActivities/systemLogs" },         
      ],
    },
  ];
  // Handle showing and hiding of subsections
  const handleHoverSubSections = (section) => {
    setShowSubSections(true);
    setSelectedSection(section);
  };

  const handleLeaveSubSections = () => {
    setTimeout(() => {
      setShowSubSections(false);
    }, 200);
  };

  return (
    <div className="categories hidden md:flex flex-wrap items-center md:justify-center" style={{ direction: "rtl" }}>
      <div className="group inline-block relative x-space-4">
        {sections.map((section) => (
          <div
            key={section.id}
            className="inline-block relative"
            onMouseEnter={() => handleHoverSubSections(section)}
            onMouseLeave={handleLeaveSubSections}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-row p-2 rounded-full gap-4 justify-center items-center">
                <p className="cursor-pointer text-sm font-semibold hover:underline hover:text-[#E43038] decoration-[#E43038]">
                  {section.name}
                </p>
              </div>
            </div>

            {/* Subsections dropdown */}
            {showSubSections && selectedSection?.id === section.id && (
              <div className="absolute top-7 right-0 w-36 h-full z-10">
                <div className="flex flex-col items-center bg-slate-50 gap-4 text-right shadow p-2">
                  {section.dropdown.map((subSection) => (
                    <div key={subSection.id} className="flex flex-col w-full text-right p-2 border-b border-[#f77279cb]">
                      <Link href={subSection.link}>
                        <p className="text-sm font-semibold hover:text-[#E43038] cursor-pointer">
                          {subSection.name}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export  default DashboardSections; 