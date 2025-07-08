import { Search, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { Logo } from "@/components/ui/logo";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { NotificationCenter } from "@/components/notifications/NotificationCenter";
import { AccountDropdown } from "./AccountDropdown";
import { MobileMenu } from "./MobileMenu";
import { MobileSearch } from "./MobileSearch";
import { useLanguageStore } from "@/store/languageStore";
import { cn } from "@/lib/utils";

export const Header = () => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const cartCount = useCartStore((state) => state.getItemCount());
  const wishlistCount = useWishlistStore((state) => state.getItemCount());
  const { direction } = useLanguageStore();
  const isRTL = direction === "rtl";

  // ترتيب المناطق (zones) حسب اللغة
  const zones = isRTL
    ? ['actions', 'search', 'logo']
    : ['logo', 'search', 'actions'];

  return (
    <header
      dir={direction}
      className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
    >
      {/* Top bar with promotions */}
      <div className="bg-gradient-primary text-primary-foreground py-2">
        <div className="container mx-auto px-2 sm:px-4 text-center">
          <p className="text-xs sm:text-sm font-medium flex justify-center items-center gap-2">
            <span role="img" aria-label="party">🎉</span>
            {t('hero.free_shipping_badge')}
            <span className="hidden sm:inline">|</span>
            {t('hero.discount_badge')}
          </p>
        </div>
      </div>

      {/* Main header: ثلاث مناطق مرنة فقط */}
      <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4">
        <div className={cn(
          "flex items-center justify-between gap-2 sm:gap-4 w-full"
        )}>
          {zones.map((zone) => {
            if (zone === 'logo') {
              return (
                <div key="logo" className={cn(
                  "flex items-center gap-2 min-w-[110px] sm:min-w-[140px]",
                  isRTL ? "flex-row-reverse" : "flex-row"
                )}>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto w-auto"
                    onClick={() => navigate('/')}
                    aria-label={t('actions.home')}
                  >
                    <Logo />
                  </Button>
                </div>
              );
            }
            if (zone === 'search') {
              return (
                <div key="search" className="flex-1 max-w-2xl mx-2 hidden md:block">
                  <div className="relative">
                    <Search
                      className={cn(
                        "absolute top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5",
                        isRTL ? "right-3" : "left-3"
                      )}
                    />
                    <Input
                      placeholder={t('actions.search') + "..."}
                      dir={direction}
                      className={cn(
                        "py-3 w-full bg-muted/50 border-none focus:bg-background focus:ring-2 focus:ring-primary/20 text-base sm:text-lg",
                        isRTL ? "pr-10 pl-4" : "pl-10 pr-4"
                      )}
                    />
                  </div>
                </div>
              );
            }
            if (zone === 'actions') {
              return (
      // داخل منطقة actions:
<div
  key="actions"
  className={cn(
    "flex items-center gap-1 sm:gap-2 min-w-[100px]",
    isRTL ? "order-1 justify-start" : "order-3 justify-end"
  )}
>
  {/* MobileMenu: المكان حسب الاتجاه */}
  {isRTL ? (
    <>
      <div className="flex md:hidden order-1">
        <MobileMenu />
      </div>
    </>
  ) : null}

  {/* باقي الأزرار */}
  <Button variant="ghost" size="icon" className="relative" aria-label="Wishlist">
    <Heart className="w-5 h-5" />
    {wishlistCount > 0 && (
      <Badge variant="secondary" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
        {wishlistCount}
      </Badge>
    )}
  </Button>
  <NotificationCenter />
  <Button
    variant="ghost"
    size="icon"
    className="relative"
    onClick={() => navigate('/checkout')}
    aria-label="Cart"
  >
    <ShoppingCart className="w-5 h-5" />
    {cartCount > 0 && (
      <Badge variant="secondary" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
        {cartCount}
      </Badge>
    )}
  </Button>
  <div className="md:hidden">
    <MobileSearch />
  </div>
  <AccountDropdown />
  <ThemeToggle />
  <LanguageSwitcher />

  {/* MobileMenu: النهاية إذا LTR */}
  {!isRTL ? (
    <div className="flex md:hidden order-last">
      <MobileMenu />
    </div>
  ) : null}
</div>

              );
            }
            return null;
          })}
        </div>

        {/* Navigation Bar */}
        <nav className={cn(
          "hidden md:flex items-center gap-4 sm:gap-6 mt-4 pt-4 border-t border-border text-base",
          isRTL ? "justify-end" : "justify-start"
        )}>
          <Button variant="ghost" className="font-medium">{t('categories.electronics')}</Button>
          <Button variant="ghost" className="font-medium">{t('categories.fashion')}</Button>
          <Button variant="ghost" className="font-medium">{t('categories.home')}</Button>
          <Button variant="ghost" className="font-medium">{t('categories.sports')}</Button>
          <Button variant="ghost" className="font-medium">{t('categories.books')}</Button>
          <Button variant="ghost" className="font-medium">{t('categories.beauty')}</Button>
          <Button variant="ghost" className="font-medium text-sale">
            🔥 {t('navigation.deals')}
          </Button>
        </nav>
      </div>
    </header>
  );
};
