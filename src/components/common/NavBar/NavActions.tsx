import { useContext } from "react";
import { Heart, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Search_Input from "./Search_Input";
import { useWishlist } from "@/hooks/WishListContext/useWishlist";
import { CartContext } from "@/hooks/CartContext";

function NavActions() {
  const cartContext = useContext(CartContext);
  const totalItems = cartContext?.cartCount() || 0;
  const { wishlistCount } = useWishlist();
  const { t } = useTranslation();
  return (
    <div className="NavActions flex items-center gap-5">
      <Search_Input className="sm:block hidden ml-5" />
      <div className="icons flex gap-4">
        {/* Cart */}
        <Link to={"/Cart"} className="relative inline-block">
          <ShoppingCart className="transition-transform duration-300 hover:scale-110" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {totalItems > 99 ? "99+" : totalItems}
            </span>
          )}
        </Link>

        {/* Favourites */}
        <Link to={"/Favourites"} className="relative inline-block">
          <Heart className="transition-transform duration-300 hover:scale-110 text-black" />
          {wishlistCount > 0 && (
            <span
              className="absolute -top-2 -right-2 
                 bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 
                 text-white text-xs font-bold 
                 rounded-full w-6 h-6 flex items-center justify-center
                "
            >
              {wishlistCount > 99 ? "99+" : wishlistCount}
            </span>
          )}
        </Link>

        {/* User Dropdown */}
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <button className="rounded-full transition-transform duration-300 hover:scale-110 cursor-pointer">
              <User />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            sideOffset={6}
            className="w-44 py-2 px-2 
               backdrop-blur-md bg-white/50 text-start dark:bg-neutral-900/60 
               border border-white/20 dark:border-neutral-800/40 
               shadow-lg rounded-xl 
               animate-in fade-in-0 zoom-in-95 
               transition-all duration-300"
          >
            <Link to={"/Login"}>
              <DropdownMenuItem
                className="cursor-pointer capitalize text-sm font-medium 
        text-neutral-800 dark:text-neutral-100
        hover:text-red-400 hover:bg-transparent 
        rounded-md transition-all duration-200"
              >
                {t("login")}
              </DropdownMenuItem>
            </Link>

            <Link to={"/SignUp"}>
              <DropdownMenuItem
                className="cursor-pointer capitalize text-sm font-medium 
        text-neutral-800 dark:text-neutral-100
        hover:text-red-400 hover:bg-transparent 
        rounded-md transition-all duration-200"
              >
                {t("signup")}
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default NavActions;
