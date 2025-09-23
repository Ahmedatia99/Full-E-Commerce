import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

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
    <nav className={`relative ${className}`} aria-label="Mobile navigation">
      {/* Burger Button */}
      <button
        onClick={() => setOpen(!open)}
        className=" cursor-pointer p-2 rounded-md border border-gray-300 hover:bg-gray-100  transition"
        aria-label="Toggle menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Side Menu with smooth animation */}
      <ul
        id="mobile-menu"
        role="menu"
        hidden={!open}
        className={`
          absolute ltr:left-0 rtl:right-0 mt-2 w-70  sm:w-100 pb-8 max-[320px]:w-50 max-[230px]:w-40 bg-white shadow-lg rounded-md flex flex-col gap-2 p-2 z-50
          transform transition-all duration-300 ease-in-out
          ${
            open
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }
        `}
      >
        {navLinks.map((item) => (
          <li key={item.to} role="none">
            <Link
              to={item.to}
              onClick={() => setOpen(false)}
              aria-current={isActive(item.to) ? "page" : undefined}
              role="menuitem"
              className={`block px-3 py-2 rounded-md link-underline w-full capitalize ${
                isActive(item.to) ? "link-underline-active" : ""
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default BurgerNavMenu;
