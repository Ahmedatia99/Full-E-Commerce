import React from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { User } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Search_Input from "./Search_Input";
import NavMenu from "./NavMenu";

function NavActions() {
  return (
    <div className="NavActions flex items-center gap-5">
      <Search_Input className="sm:block hidden ml-5" />
      <div className="icons flex gap-4">
        <Link to={"/"}>
          <ShoppingCart className="transition-transform duration-300 hover:scale-110" />
        </Link>
        <Link to={"/"}>
          <Heart className="transition-transform duration-300 hover:scale-110" />
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className=" rounded-fulltransition-transform duration-300 hover:scale-110 cursor-pointer">
              <User />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" sideOffset={5} className="w-40 ">
            <DropdownMenuItem>Login</DropdownMenuItem>
            <DropdownMenuItem>Sign Up</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default NavActions;
