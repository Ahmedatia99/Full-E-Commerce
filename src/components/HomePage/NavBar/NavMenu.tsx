import React from "react";
import { Link, useLocation } from "react-router-dom";

type NavMenuProps = {
  className?: string;
};

function NavMenu({ className }: NavMenuProps) {
  // Get current path
  const location = useLocation();

  // Function to check if link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    // Semantic <nav> element for SEO + accessibility
    <nav aria-label="Main navigation">
      <ul className={`flex gap-8 ${className}`}>
        {/* Home Link */}
        <li>
          <Link
            to="/"
            className={`text-gray-700 transition-colors
              ${
                isActive("/")
                  ? "text-black underline"
                  : "hover:text-black hover:underline"
              }`}
          >
            Home
          </Link>
        </li>

        {/* Contact Link */}
        <li>
          <Link
            to="/Contact"
            className={`text-gray-700 transition-colors
              ${
                isActive("/Contact")
                  ? "text-black underline"
                  : "hover:text-black hover:underline"
              }`}
          >
            Contact
          </Link>
        </li>

        {/* About Link */}
        <li>
          <Link
            to="/About"
            className={`text-gray-700 transition-colors
              ${
                isActive("/About")
                  ? "text-black underline"
                  : "hover:text-black hover:underline"
              }`}
          >
            About
          </Link>
        </li>

        {/* Sign Up Link */}
        <li>
          <Link
            to="/SignUp"
            className={`text-gray-700 transition-colors
              ${
                isActive("/SignUp")
                  ? "text-black underline"
                  : "hover:text-black hover:underline"
              }`}
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
