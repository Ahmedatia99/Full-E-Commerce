import { useState } from "react";
import { Heart, ShoppingCart, Menu, X } from "lucide-react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm my-5 ">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-bold text-xl sm:text-2xl">EXCLUSIVE</h1>
          </div>

          {/* Menu - Desktop */}
          <ul className="hidden md:flex gap-10  items-center text-black font-medium">
            <li>
              <a href="#home" className="hover:text-gray-900 hover:font-bold">
                Home
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-gray-900 hover:font-bold"
              >
                Contact
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-900 hover:font-bold">
                About
              </a>
            </li>
            <li>
              <a href="#signup" className="hover:text-gray-900 hover:font-bold">
                Sign Up
              </a>
            </li>
          </ul>

          {/* Search + Icons - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <input
              type="search"
              placeholder="What Are You Looking For?"
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F5F5F5]"
            />
            <Heart className="cursor-pointer" />
            <ShoppingCart className="cursor-pointer" />
          </div>

          {/* Burger Icon - Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <ul className="flex flex-col gap-3 text-gray-700 font-medium mb-3">
            <li>
              <a href="#home" className="hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-900">
                Contact
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="#signup" className="hover:text-gray-900">
                Sign Up
              </a>
            </li>
          </ul>
          <div className="flex flex-col gap-3">
            <div className="flex gap-4 mt-2 flex-col">
              <div className="icons flex flex-row gap-3">
                <Heart className="cursor-pointer" />
                <ShoppingCart className="cursor-pointer" />
              </div>

              <input
                type="search"
                placeholder="What Are You Looking For?"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
