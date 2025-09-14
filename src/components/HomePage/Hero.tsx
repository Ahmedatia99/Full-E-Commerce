import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "iPhone 14 Series",
    desc: "Up to 10% off Voucher",
    img: "https://res.cloudinary.com/dscw58bgh/image/upload/v1757780555/ideapad-gaming-3i-01-500x500_1_n52azx.png",
  },
  {
    id: 2,
    title: "MacBook Air M2",
    desc: "Save up to 15% on laptops",
    img: "https://res.cloudinary.com/dscw58bgh/image/upload/v1757780555/ideapad-gaming-3i-01-500x500_1_n52azx.png",
  },
  {
    id: 3,
    title: "Apple Watch Ultra",
    desc: "Flat 20% off Limited Time",
    img: "https://res.cloudinary.com/dscw58bgh/image/upload/v1757780555/ak-900-01-500x500_1_i0mjb8.png",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex container mx-auto flex-col md:flex-row ">
      {/* Sidebar Categories */}
      <aside className="w-full md:w-60 border-r">
        {/* Mobile Dropdown */}
        <div className="md:hidden border-b">
          <details>
            <summary className="p-4 cursor-pointer flex justify-between items-center text-gray-700">
              Categories
              <ChevronRight size={16} />
            </summary>
            <ul className="flex flex-col gap-3 p-4 text-sm text-gray-700">
              <li className="cursor-pointer hover:text-black">
                Woman's Fashion
              </li>
              <li className="cursor-pointer hover:text-black">Men's Fashion</li>
              <li className="cursor-pointer hover:text-black">Electronics</li>
              <li className="cursor-pointer hover:text-black">
                Home & Lifestyle
              </li>
              <li className="cursor-pointer hover:text-black">Medicine</li>
              <li className="cursor-pointer hover:text-black">
                Sports & Outdoor
              </li>
              <li className="cursor-pointer hover:text-black">Baby's & Toys</li>
              <li className="cursor-pointer hover:text-black">
                Groceries & Pets
              </li>
              <li className="cursor-pointer hover:text-black">
                Health & Beauty
              </li>
            </ul>
          </details>
        </div>

        {/* Desktop Sidebar */}
        <ul className="hidden md:flex md:flex-col gap-4 p-4 pt-8 text-sm text-gray-700">
          <li className="cursor-pointer hover:text-black flex items-center justify-between">
            <span>Woman's Fashion</span>
            <ChevronRight size={16} />
          </li>
          <li className="cursor-pointer hover:text-black flex items-center justify-between">
            <span>Men's Fashion</span>
            <ChevronRight size={16} />
          </li>
          <li className="cursor-pointer hover:text-black">Electronics</li>
          <li className="cursor-pointer hover:text-black">Home & Lifestyle</li>
          <li className="cursor-pointer hover:text-black">Medicine</li>
          <li className="cursor-pointer hover:text-black">Sports & Outdoor</li>
          <li className="cursor-pointer hover:text-black">Baby's & Toys</li>
          <li className="cursor-pointer hover:text-black">Groceries & Pets</li>
          <li className="cursor-pointer hover:text-black">Health & Beauty</li>
        </ul>
      </aside>

      {/* Hero Banner */}
      <div className="flex-1 bg-black text-white relative flex flex-col md:flex-row items-center justify-between mt-8 mx-5 px-6 md:px-10 py-6 overflow-hidden h-80">
        {/* Left Content */}
        <div className="z-10 text-center md:text-left mb-6 md:mb-0">
          <p className="text-sm flex items-center justify-center md:justify-start gap-2">
            <span className="text-white text-lg"></span>{" "}
            {slides[current].title}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mt-3 leading-snug">
            {slides[current].desc}
          </h1>
          <button className="mt-6 flex items-center gap-2 px-5 py-2 bg-white text-black rounded cursor-pointer mx-auto md:mx-0">
            Shop Now <ChevronRight size={16} />
          </button>
        </div>

        {/* Right Image */}
        <div className="w-80 h-80 flex items-center justify-center overflow-hidden">
          <img
            src={slides[current].img}
            alt={slides[current].title}
            className="w-full h-full object-contain transition-all duration-700"
          />
        </div>

        {/* Dots (Carousel Indicator) */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                current === index ? "bg-red-500" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
