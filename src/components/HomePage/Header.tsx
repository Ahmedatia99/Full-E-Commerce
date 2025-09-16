import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react"; // ⬅️ استدعاء الأيقونة
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black text-white py-2">
      <div className="container mx-auto flex flex-col gap-3 items-center justify-between px-4 md:flex-row">
        {/* Left / Centered Text */}
        <h2 className="text-sm sm:text-base text-center flex-1">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link
            to={"/"}
            className="underline font-bold hover:text-gray-200 transition-colors ml-3"
          >
            Shop Now
          </Link>
        </h2>

        {/* Right Side: Language Selector */}
        <div className="flex items-center gap-4 ml-4">
          <DropdownMenu onOpenChange={(isOpen) => setOpen(isOpen)}>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center text-sm font-semibold cursor-pointer hover:text-gray-200 transition-colors">
                English
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-28">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>العربية</DropdownMenuItem>
              <DropdownMenuItem>Français</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

export default Header;
