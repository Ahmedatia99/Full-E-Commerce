import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

type BurgerMenuProps = {
  className?: string;
};

function BurgerNavMenu({ className }: BurgerMenuProps) {
  const [open, setOpen] = useState(false);
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
    <Dialog modal={false} open={open} onOpenChange={setOpen} >
      {/*  Accessible Trigger Button */}
      <DialogTrigger asChild>
        <button
          className={`cursor-pointer p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition   ${className}`}
          aria-label={open ? t("closeMenu") : t("openMenu")}
        >
          {open ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>
      </DialogTrigger>

      {/*  Accessible Content */}
      <DialogContent
        aria-describedby={undefined}
        className="sm:max-w-[300px] bg-white rounded-lg p-4 flex flex-col gap-4 backdrop-blur-md focus:outline-none"
        aria-label="Main navigation"
        onEscapeKeyDown={() => setOpen(false)}
      >
        {/* Hidden title for screen readers (accessibility compliance) */}
        <VisuallyHidden>
          <DialogTitle>{t("navigationMenu")}</DialogTitle>
        </VisuallyHidden>

        {/*  Nav menu with proper semantics */}
        <nav aria-label={t("mainNavigation")}>
          <ul className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2 rounded-md w-full text-center capitalize transition ${
                    isActive(item.to)
                      ? "bg-gray-200 font-medium text-gray-900"
                      : "hover:bg-gray-100 text-gray-700"
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </DialogContent>
    </Dialog>
  );
}

export default BurgerNavMenu;
