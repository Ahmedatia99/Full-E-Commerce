import { GrRestroomWomen } from "react-icons/gr";
import { GiClothes } from "react-icons/gi";
import { LaptopMinimal } from "lucide-react";
import { IoHome } from "react-icons/io5";
import { BsPcDisplay } from "react-icons/bs";
import { MdPets } from "react-icons/md";
import { HiMiniShoppingCart } from "react-icons/hi2";

export const categoriesData = [
  {
    id: 1,
    key: "All Product",
    name: "All Product",
    icon: <HiMiniShoppingCart className="category-icon" />,
    url: "/product",
  },
  {
    id: 2,
    key: "womansFashion",
    name: "womansFashion",
    icon: <GrRestroomWomen className="category-icon" />,
    url: "/category/womansFashion",
  },
  {
    id: 3,
    key: "electronics",
    name: "Electronics",
    icon: <LaptopMinimal className="category-icon" />,
    url: "/category/electronics",
  },
  {
    id: 4,
    key: "home",
    name: "home",
    icon: <IoHome className="category-icon" />,
    url: "/category/home",
  },
  {
    id: 5,
    key: "mensFashion",
    name: "mensFashion",
    icon: <GiClothes className="category-icon" />,
    url: "/category/mensFashion",
  },
  {
    id: 6,
    key: "computer",
    name: "Computer",
    icon: <BsPcDisplay className="category-icon" />,
    url: "/category/computer",
  },
  {
    id: 7,
    key: "pets",
    name: "Pets",
    icon: <MdPets className="category-icon" />,
    url: "/category/pets",
  },
];
