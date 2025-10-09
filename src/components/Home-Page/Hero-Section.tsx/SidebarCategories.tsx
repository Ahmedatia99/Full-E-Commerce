import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const categoriesKeys = [
  "womansFashion",
  "mensFashion",
  "electronics",
  "homeLifestyle",
  "medicine",
  "sportsOutdoor",
  "babysToys",
  "groceriesPets",
  "healthBeauty",
];

export default function SidebarCategories() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const currentCategory = location.pathname.split("/").pop();

  return (
    <aside
      className="w-full md:mt-0 mt-5 md:w-60 md:border-0 rtl:md:border-l   ltr:md:border-r"
      aria-label={t("categories")}
      role="navigation"
    >
      <h2 className="sr-only">{t("categories")}</h2>

      {/* Mobile Dropdown */}
      <div className="md:hidden border-b">
        <button
          onClick={() => setOpen(!open)}
          className="p-4 w-40 bg-black rounded-t-xl max-[650px]:rounded-t-none rtl:max-[650px]:rounded-tl-xl 
          ltr:max-[650px]:rounded-tr-xl text-white 
          cursor-pointer flex justify-between items-center font-semibold"
          aria-expanded={open ? "true" : "false"}
        >
          {t("categories")}
          <ChevronRight
            size={20}
            aria-hidden="true"
            className={`transition-transform duration-300 ${
              open ? "rotate-90" : ""
            }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-3 p-4 text-sm text-gray-700">
            {categoriesKeys.map((key, index) => (
              <li key={index}>
                <Link
                  to={`/category/${key}`}
                  onClick={() => setOpen(false)}
                  className={`block w-full p-2 rounded font-medium link-underline 
                    hover:bg-gray-100 
                    ${
                      currentCategory === key
                        ? "bg-gray-200 text-black link-underline-active "
                        : ""
                    }`}
                >
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <ul className="hidden md:flex md:flex-col gap-4 p-2 pt-8 text-sm text-gray-700">
        {categoriesKeys.map((key, index) => (
          <li key={index}>
            <Link
              to={`/category/${key}`}
              className={`block w-full p-2 rounded font-medium link-underline 
                hover:bg-gray-100 
                ${
                  currentCategory === key
                    ? "bg-gray-200 text-black link-underline-active"
                    : ""
                }`}
            >
              {t(key)}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
