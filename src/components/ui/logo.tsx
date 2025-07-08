import { useEffect, useState } from "react";
import { useTheme } from "@/components/ui/theme-provider";
import { useLanguageStore } from "@/store/languageStore";
import { cn } from "@/lib/utils";

export const Logo = ({ className = "" }) => {
  const { theme } = useTheme();
  const getCurrentTheme = () => {
    if (theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return theme || "light";
  };
  const { direction } = useLanguageStore();

  // حدد الشعار المناسب
  const [logoSrc, setLogoSrc] = useState(() =>
    getCurrentTheme() === "dark" ? "/ve-logo-dark.png" : "/ve-logo-day.png"
  );

  useEffect(() => {
    setLogoSrc(
      getCurrentTheme() === "dark" ? "/ve-logo-dark.png" : "/ve-logo-day.png"
    );
    // فقط يحدث عند تغيير الثيم
    // eslint-disable-next-line
  }, [theme]);

  return (
    <img
      src={logoSrc}
      alt="Ve-Shop Logo"
      key={logoSrc}
      className={cn(
        // متجاوب (عرض أكبر بوضوح من الطول)
        "h-10 w-28 sm:h-12 sm:w-36 md:h-14 md:w-44 object-contain transition-all duration-300",
        direction === "rtl" ? "ml-2" : "mr-2",
        className
      )}
      draggable={false}
    />
  );
};
