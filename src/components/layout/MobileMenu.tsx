import { Heart, Menu, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/languageStore";
import { AccountDropdown } from "./AccountDropdown";
import { NotificationCenter } from "@/components/notifications/NotificationCenter";

export const MobileMenu = () => {
  const cartCount = useCartStore((s) => s.getItemCount());
  const wishlistCount = useWishlistStore((s) => s.getItemCount());
  const navigate = useNavigate();
  const { t } = useTranslation("common");
  const { direction } = useLanguageStore();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={direction === "rtl" ? "right" : "left"}
        className="flex flex-col gap-6 pt-10"
      >
        <nav className="flex flex-col gap-2">
          <Button variant="ghost" className="justify-start" onClick={() => navigate("/")}>{t('categories.electronics')}</Button>
          <Button variant="ghost" className="justify-start">{t('categories.fashion')}</Button>
          <Button variant="ghost" className="justify-start">{t('categories.home')}</Button>
          <Button variant="ghost" className="justify-start">{t('categories.sports')}</Button>
          <Button variant="ghost" className="justify-start">{t('categories.books')}</Button>
          <Button variant="ghost" className="justify-start">{t('categories.beauty')}</Button>
          <Button variant="ghost" className="justify-start text-sale">🔥 {t('navigation.deals')}</Button>
        </nav>
        <Separator />
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative" onClick={() => navigate('/wishlist')} aria-label="Wishlist">
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <Badge variant="secondary" className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs flex items-center justify-center">
                {wishlistCount}
              </Badge>
            )}
          </Button>
          <Button variant="ghost" size="icon" className="relative" onClick={() => navigate('/checkout')} aria-label="Cart">
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <Badge variant="secondary" className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs flex items-center justify-center">
                {cartCount}
              </Badge>
            )}
          </Button>
          <NotificationCenter />
        </div>
        <AccountDropdown />
        <div className="mt-auto flex items-center justify-between">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
};
