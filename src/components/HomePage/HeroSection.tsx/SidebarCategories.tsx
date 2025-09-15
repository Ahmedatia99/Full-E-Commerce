import { ChevronRight } from "lucide-react";

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
    <aside className="w-full md:w-60 border-3 md:border-0 md:border-r  ">
      {/* Mobile Dropdown */}
      <div className="md:hidden border-b">
        <details>
          <summary className="p-4 cursor-pointer flex justify-between items-center font-semibold ">
            Categories
            <ChevronRight size={16} />
          </summary>
          <ul className="flex flex-col gap-3 p-4 text-sm text-gray-700">
            {categories.map((category, index) => (
              <li key={index} className="cursor-pointer hover:text-black">
                {category}
              </li>
            ))}
          </ul>
        </details>
      </div>

      {/* Desktop Sidebar */}
      <ul className="hidden md:flex md:flex-col gap-4 p-4 pt-8 text-sm text-gray-700">
        {categories.map((category, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-black flex items-center justify-between"
          >
            <span>{category}</span>
            {["Woman's Fashion", "Men's Fashion"].includes(category) && (
              <ChevronRight size={16} />
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
