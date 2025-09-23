import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

  return (
    <aside
      className="w-full md:mt-0 mt-5 md:w-60 md:border-0 md:border-r"
      aria-label={t("categories")}
      role="navigation"
    >
      {/* Heading for screen readers */}
      <h2 className="sr-only">{t("categories")}</h2>

      {/* Mobile Dropdown */}
      <div className="md:hidden border-b">
        <button
          onClick={() => setOpen(!open)}
          className="p-4 w-40 bg-black  rounded-t-xl max-[650px]:rounded-t-none rtl:max-[650px]:rounded-tl-xl ltr:max-[650px]:rounded-tr-xl text-white cursor-pointer flex justify-between items-center font-semibold"
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
          <ul className="flex flex-col gap-3 border-3 ltr:rounded-tr-3xl rtl:rounded-tl-3xl p-4 text-sm text-gray-700">
            {categoriesKeys.map((key, index) =>
              ["womansFashion", "mensFashion"].includes(key) ? (
                <li key={index} role="none">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className="cursor-pointer relative flex items-center font-medium justify-between w-full p-2 rounded hover:bg-gray-100 text-left group"
                        aria-haspopup="menu"
                        aria-expanded="false"
                      >
                        {t(key)}
                        <ChevronRight size={16} aria-hidden="true" />
                        <span className="absolute bottom-0 start-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      sideOffset={6}
                      className="w-40"
                      role="menu"
                    >
                      <DropdownMenuItem asChild>
                        <a
                          href="/subcategory/option-1"
                          role="menuitem"
                          title={t("option1")}
                        >
                          {t("option1")}
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a
                          href="/subcategory/option-2"
                          role="menuitem"
                          title={t("option2")}
                        >
                          {t("option2")}
                        </a>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              ) : (
                <li key={index} role="none">
                  <a
                    href={`/category/${key}`}
                    aria-label={`Browse ${t(key)}`}
                    title={t(key)}
                    role="menuitem"
                    className="block w-full p-2 rounded hover:bg-gray-100 font-medium link-underline"
                  >
                    {t(key)}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <ul
        className="hidden md:flex md:flex-col gap-4 p-2 pt-8 text-sm text-gray-700"
        role="menu"
      >
        {categoriesKeys.map((key, index) =>
          ["womansFashion", "mensFashion"].includes(key) ? (
            <li key={index} role="none">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="cursor-pointer relative flex items-center font-medium justify-between w-full p-2 rounded hover:bg-gray-100 text-left group"
                    aria-haspopup="menu"
                    aria-expanded="false"
                  >
                    {t(key)}
                    <ChevronRight size={16} aria-hidden="true" />
                    <span className="absolute bottom-0 start-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  sideOffset={6}
                  className="w-40"
                  role="menu"
                >
                  <DropdownMenuItem asChild>
                    <a
                      href="/subcategory/option-1"
                      role="menuitem"
                      title={t("option1")}
                    >
                      {t("option1")}
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="/subcategory/option-2"
                      role="menuitem"
                      title={t("option2")}
                    >
                      {t("option2")}
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          ) : (
            <li key={index} role="none">
              <a
                href={`/category/${key}`}
                aria-label={`Browse ${t(key)}`}
                title={t(key)}
                role="menuitem"
                className="block w-full p-2 rounded font-medium link-underline hover:bg-gray-100"
              >
                {t(key)}
              </a>
            </li>
          )
        )}
      </ul>
    </aside>
  );
}
