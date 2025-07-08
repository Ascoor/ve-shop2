import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut, Package, Settings, User, UserCircle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const AccountDropdown = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation("common");

  if (!isAuthenticated || !user) {
    return (
      <Button
        variant="ghost"
        onClick={() => navigate("/auth")}
        className="flex items-center gap-2"
        aria-label={t("actions.sign_in", "Sign In")}
      >
        <User className="w-5 h-5" />
        <span className="hidden sm:inline">{t("actions.sign_in", "Sign In")}</span>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative h-9 w-9 rounded-full"
          aria-label={t("navigation.account", "Account")}
        >
          <Avatar className="h-9 w-9">
            <AvatarImage src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
            <AvatarFallback>
              {user.firstName[0]}
              {user.lastName[0]}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <div className="flex items-center gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            <p className="font-medium">
              {user.firstName} {user.lastName}
            </p>
            <p className="w-[200px] truncate text-sm text-muted-foreground">
              {user.email}
            </p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate("/profile")}
          className="cursor-pointer">
          <UserCircle className="mr-2 h-4 w-4" />
          <span>{t("navigation.profile", "Profile")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigate("/profile?tab=orders")}
          className="cursor-pointer">
          <Package className="mr-2 h-4 w-4" />
          <span>{t("navigation.orders", "Orders")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigate("/profile?tab=settings")}
          className="cursor-pointer">
          <Settings className="mr-2 h-4 w-4" />
          <span>{t("navigation.settings", "Settings")}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            logout();
            navigate("/");
          }}
          className="cursor-pointer text-destructive"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>{t("actions.logout", "Logout")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
