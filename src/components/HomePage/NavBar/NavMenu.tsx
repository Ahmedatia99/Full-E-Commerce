import React from "react";
import { Link } from "react-router-dom";
type NavMenuProps = {
  className?: string;
};
function NavMenu({ className }: NavMenuProps) {
  return (
    <>
      <ul className={`flex gap-8  ${className}`}>
        <li>
          <Link to={"/"} className="underline">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/Contact"} className="">
            Contact
          </Link>
        </li>
        <li>
          <Link to={"/About"} className="">
            About
          </Link>
        </li>
        <li>
          <Link to={"/SignUp"} className="">
            Sign Up
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavMenu;
