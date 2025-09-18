import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
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
  return (
    <aside
      className="w-full md:w-60 border-1 md:border-0 md:border-r "
      aria-label="Product categories"
    >
      {/* Mobile Dropdown (collapsible) */}
      <div className="md:hidden border-b">
        <details>
          <summary
            className="p-4 cursor-pointer flex justify-between items-center font-semibold"
            aria-label="Toggle categories menu"
          >
            {t("categories")}
            <ChevronRight size={16} aria-hidden="true" />
          </summary>

          <ul className="flex flex-col gap-3 p-4 text-sm text-gray-700">
            {categoriesKeys.map((key, index) =>
              ["womansFashion", "mensFashion"].includes(key) ? (
                <li key={index}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-100 text-left">
                        {t(key)}
                        <ChevronRight size={16} aria-hidden="true" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      sideOffset={6}
                      className="w-40"
                    >
                      <DropdownMenuItem asChild>
                        <a href="/subcategory/option-1">{t("option1")}</a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="/subcategory/option-2">{t("option2")}</a>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              ) : (
                <li
                  key={index}
                  className="cursor-pointer hover:text-black"
                  role="menuitem"
                >
                  <a
                    href={`/category/${key}`}
                    aria-label={`Browse ${t(key)}`}
                    className="block w-full p-2 rounded hover:bg-gray-100"
                  >
                    {t(key)}
                  </a>
                </li>
              )
            )}
          </ul>
        </details>
      </div>

      {/* Desktop Sidebar */}
      <ul className="hidden md:flex md:flex-col gap-4 p-4 pt-8 text-sm text-gray-700">
        {categoriesKeys.map((key, index) =>
          ["womansFashion", "mensFashion"].includes(key) ? (
            <li key={index}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-100 text-left">
                    {t(key)}
                    <ChevronRight size={16} aria-hidden="true" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  sideOffset={6}
                  className="w-40"
                >
                  <DropdownMenuItem asChild>
                    <a href="/subcategory/option-1">{t("option1")}</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/subcategory/option-2">{t("option2")}</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          ) : (
            <li
              key={index}
              className="cursor-pointer hover:text-black"
              role="menuitem"
            >
              <a
                href={`/category/${key}`}
                aria-label={`Browse ${t(key)}`}
                className="block w-full p-2 rounded hover:bg-gray-100"
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
