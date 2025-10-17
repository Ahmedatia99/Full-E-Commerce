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
  const { t } = useTranslation();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

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
        align="start"
        sideOffset={8}
        className="max-sm:w-70 w-110 bg-white border justify-start items-start border-gray-200 rounded-2xl shadow-xl p-4 flex flex-col gap-3"
      >
        {navLinks.map((item) => (
          <DropdownMenuItem
            key={item.to}
            asChild
            className="cursor-pointer rounded-md px-3 py-3 capitalize transition hover:bg-gray-50"
          >
            <Link
              to={item.to}
              className={`link-underline block w-full  text-lg ${
                isActive(item.to) ? "font-semibold text-black" : "text-gray-700"
              }`}
            >
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default BurgerNavMenu;
