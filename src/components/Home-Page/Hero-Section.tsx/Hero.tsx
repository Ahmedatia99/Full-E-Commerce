import { useState, useEffect } from "react";
import SidebarCategories from "./SidebarCategories";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import CarouselDots from "./CarouselDots";

// Slides data
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

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col md:flex-row ">
      <SidebarCategories />
      <div className=" w-full bg-black text-white relative flex flex-col md:flex-row items-center justify-between flex-col-reverse md-flex-col  md:mt-8 md:ml-4 px-6 md:px-10 py-6  h-[85vh] md:h-[500px] overflow-hidden">
        <HeroContent slide={slides[current]} />
        <HeroImage slide={slides[current]} />
        <CarouselDots
          slides={slides}
          current={current}
          setCurrent={setCurrent}
        />
      </div>
    </section>
  );
}
