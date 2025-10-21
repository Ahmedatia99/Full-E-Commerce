import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

type BurgerMenuProps = {
  className?: string;
};

function BurgerNavMenu({ className }: BurgerMenuProps) {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isArabic = i18n.language === "ar";

  const navLinks = [
    { to: "/", label: t("home") },
    { to: "/Contact", label: t("contact") },
    { to: "/About", label: t("about") },
    { to: "/SignUp", label: t("signUp") },
  ];

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        asChild
        className={`cursor-pointer p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition ${className}`}
        aria-label={t("openMenu")}
      >
        <button>
          <Menu size={24} aria-hidden="true" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align={isArabic ? "end" : "start"}
        sideOffset={8}
        className={`max-sm:w-70 w-110 bg-white border border-gray-200 
          rounded-2xl shadow-xl p-4 flex flex-col gap-3 
          ${isArabic ? "text-right" : "text-left"}`}
      >
        {navLinks.map((item) => {
          const active = isActive(item.to);
          return (
            <DropdownMenuItem
              key={item.to}
              asChild
              className="cursor-pointer rounded-md px-3 py-2 capitalize transition hover:bg-gray-50"
            >
              <Link
                to={item.to}
                className={`block w-full text-lg link-underline ${
                  active ? "link-underline-active" : ""
                }`}
              >
                {item.label}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default BurgerNavMenu;
