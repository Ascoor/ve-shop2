import { useState } from 'react';
import { useRouter } from 'next/router';
import { sections } from '../common/sectionData'; // استيراد بيانات الأقسام

const DashboardSections = () => {
  const router = useRouter();
  const [showSubSections, setShowSubSections] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const handleHoverSubSections = section => {
    setShowSubSections(true);
    setSelectedSection(section);
  };

  const handleLeaveSubSections = () => {
    setTimeout(() => {
      setShowSubSections(false);
    }, 200);
  };

  const handleSectionClick = sectionId => {
    // تحديث الرابط بناءً على القسم المختار
    router.push(`/dashboard?section=${sectionId}`);
  };

  return (
    <div
      className="categories hidden md:flex flex-wrap items-center md:justify-center"
      style={{ direction: 'rtl' }}
    >
      <div className="group inline-block relative x-space-4">
        {sections.map(section => (
          <div
            key={section.id}
            className="inline-block relative"
            onMouseEnter={() => handleHoverSubSections(section)}
            onMouseLeave={handleLeaveSubSections}
          >
            <div className="flex flex-col items-center gap-2">
              <div
                className="flex flex-row p-2 rounded-full gap-4 justify-center items-center cursor-pointer"
                onClick={() => handleSectionClick(section.id)}
              >
                <p className="text-sm font-semibold hover:underline hover:text-[var(--primary-color)]">
                  {section.name}
                </p>
              </div>
            </div>

            {showSubSections && selectedSection?.id === section.id && (
              <div className="absolute top-7 right-0 w-36 h-full z-10">
                <div className="flex flex-col items-center bg-[var(--background-color)] gap-4 text-right shadow p-2">
                  {section.dropdown.map(subSection => (
                    <div
                      key={subSection.id}
                      className="flex flex-col w-full text-right p-2 border-b border-[var(--primary-color)]"
                    >
                      <a
                        href={subSection.link}
                        className="text-sm font-semibold hover:text-[var(--primary-color)] cursor-pointer"
                      >
                        {subSection.name}
                      </a>
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
};

export default DashboardSections;
