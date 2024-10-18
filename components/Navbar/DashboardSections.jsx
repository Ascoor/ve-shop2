import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";
import { selectUser } from '../../store/slices/authSlice';

const DashboardSections = () => {
  const router = useRouter();
  const user = useSelector(selectUser);

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
    // بقية الأقسام...
  ];

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
                <p className="cursor-pointer text-sm font-semibold hover:underline hover:text-[var(--primary-color)] dark:text-[var(--dark-secondary)] decoration-[var(--primary-color)] dark:decoration-[var(--dark-primary)]">
                  {section.name}
                </p>
              </div>
            </div>

            {showSubSections && selectedSection?.id === section.id && (
              <div className="absolute top-7 right-0 w-36 h-full z-10">
                <div className="flex flex-col items-center bg-[var(--background-color)] dark:bg-[var(--dark-background)] gap-4 text-right shadow p-2">
                  {section.dropdown.map((subSection) => (
                    <div key={subSection.id} className="flex flex-col w-full text-right p-2 border-b border-[var(--primary-color)] dark:border-[var(--dark-primary)]">
                      <Link href={subSection.link}>
                        <p className="text-sm font-semibold hover:text-[var(--primary-color)] dark:hover:text-[var(--dark-primary)] cursor-pointer">
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

export default DashboardSections;
