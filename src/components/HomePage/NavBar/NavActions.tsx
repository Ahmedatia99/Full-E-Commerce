import React from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

import Search_Input from "./Search_Input";
import NavMenu from "./NavMenu";

function NavActions() {
  return (
    <div className="NavActions flex items-center gap-5">
      <Search_Input className="sm:block hidden ml-5" />
      <div className="icons flex gap-4">
        <Link to={"/"}>
          <ShoppingCart />
        </Link>
        <Link to={"/"}>
          <Heart />
        </Link>
        <User />
      </div>
    </div>
  );
}

export default NavActions;
