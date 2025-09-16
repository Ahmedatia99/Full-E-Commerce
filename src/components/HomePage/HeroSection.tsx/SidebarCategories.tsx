import { ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Categories list (better to fetch from API if dynamic)
const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

export default function SidebarCategories() {
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
            Categories
            <ChevronRight size={16} aria-hidden="true" />
          </summary>

          <ul className="flex flex-col gap-3 p-4 text-sm text-gray-700">
            {categories.map((category, index) =>
              ["Woman's Fashion", "Men's Fashion"].includes(category) ? (
                <li key={index}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-100 text-left">
                        {category}
                        <ChevronRight size={16} aria-hidden="true" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      sideOffset={6}
                      className="w-40"
                    >
                      <DropdownMenuItem asChild>
                        <a href="/subcategory/option-1">Option 1</a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="/subcategory/option-2">Option 2</a>
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
                    href={`/category/${category
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    aria-label={`Browse ${category}`}
                    className="block w-full p-2 rounded hover:bg-gray-100"
                  >
                    {category}
                  </a>
                </li>
              )
            )}
          </ul>
        </details>
      </div>

      {/* Desktop Sidebar */}
      <ul
        className="hidden md:flex md:flex-col gap-4 py-4 pt-8 text-sm text-gray-700"
        role="menu"
      >
        {categories.map((category, index) => (
          <li
            key={index}
            className="flex items-center justify-between"
            role="none"
          >
            {["Woman's Fashion", "Men's Fashion"].includes(category) ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-100 text-left"
                    aria-haspopup="menu"
                  >
                    {category}
                    <ChevronRight size={16} aria-hidden="true" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  sideOffset={6}
                  className="w-40 -translate-x-3"
                >
                  <DropdownMenuItem asChild>
                    <a href="/subcategory/option-1">Option 1</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/subcategory/option-2">Option 2</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <a
                href={`/category/${category
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                aria-label={`Browse ${category}`}
                className="block w-full p-2 hover:bg-gray-100 rounded"
              >
                {category}
              </a>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
