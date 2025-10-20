import { GrRestroomWomen } from "react-icons/gr";
import { GiClothes } from "react-icons/gi";
import { LaptopMinimal } from "lucide-react";
import { IoHome } from "react-icons/io5";
import { BsPcDisplay } from "react-icons/bs";
import { MdPets } from "react-icons/md";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { FaBabyCarriage } from "react-icons/fa";
import { TbSpray } from "react-icons/tb";
import { RiMentalHealthLine } from "react-icons/ri";

export const categoriesData = [
  {
    id: 1,
    key: "All Product",
    name: "All Product",
    icon: <HiMiniShoppingCart className="category-icon" />,
    url: "/AllProducts",
  },
  {
    id: 2,
    key: "womenfashion",
    name: "Womans Fashion",
    icon: <GrRestroomWomen className="category-icon" />,
    url: "/category/womenfashion",
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
    name: "Home",
    icon: <IoHome className="category-icon" />,
    url: "/category/home",
  },
  {
    id: 5,
    key: "menfashion",
    name: "Mens Fashion",
    icon: <GiClothes className="category-icon" />,
    url: "/category/menfashion",
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
  {
    id: 7,
    key: "sports",
    name: "Sports",
    icon: <MdOutlineSportsSoccer className="category-icon" />,
    url: "/category/sports",
  },
  {
    id: 8,
    key: "babytoys",
    name: "Baby Toys",
    icon: <FaBabyCarriage className="category-icon" />,
    url: "/category/babytoys",
  },
  {
    id: 9,
    key: "healthbeauty",
    name: "Health Beauty",
    icon: <RiMentalHealthLine className="category-icon" />,
    url: "/category/healthbeauty",
  },
  {
    id: 10,
    key: "perfumes",
    name: "Perfumes",
    icon: <TbSpray className="category-icon" />,
    url: "/category/perfumes",
  },
];
