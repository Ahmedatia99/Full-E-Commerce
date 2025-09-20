import React, { useContext } from "react";
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
import { CartContext } from "../../hooks/CartContext";

function NavActions() {
  const cartContext = useContext(CartContext);
  const totalItems = cartContext?.cartCount() || 0;
  const { t } = useTranslation();

  return (
    <div className="NavActions flex items-center gap-5">
      <Search_Input className="sm:block hidden ml-5" />
      <div className="icons flex gap-4">
        {/* Cart */}
        <Link to={"/Cart"} className="relative inline-block">
          <ShoppingCart className="transition-transform duration-300 hover:scale-110" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems > 99 ? "99+" : totalItems}
            </span>
          )}
        </Link>

        {/* Favourites */}
        <Link to={"/Favourites"}>
          <Heart className="transition-transform duration-300 hover:scale-110" />
        </Link>

        {/* User Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="rounded-full transition-transform duration-300 hover:scale-110 cursor-pointer">
              <User />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" sideOffset={5} className="w-40">
            <Link to={"/Login"}>
              <DropdownMenuItem className="cursor-pointer">
                {t("login")}
              </DropdownMenuItem>
            </Link>

            <Link to={"/SignUp"}>
              <DropdownMenuItem className="cursor-pointer">
                {t("signUp")}
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default NavActions;
