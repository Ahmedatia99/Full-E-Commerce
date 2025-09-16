import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

type BurgerMenuProps = {
  className?: string;
};

function BurgerNavMenu({ className }: BurgerMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {/* Burger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Side Menu*/}
      {open && (
        <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md flex flex-col gap-2 p-2 z-50">
          {[
            { to: "/", label: "Home" },
            { to: "/Contact", label: "Contact" },
            { to: "/About", label: "About" },
            { to: "/SignUp", label: "Sign Up" },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-black transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BurgerNavMenu;
