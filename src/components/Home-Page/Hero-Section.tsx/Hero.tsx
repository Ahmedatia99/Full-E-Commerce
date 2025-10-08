import SidebarCategories from "./SidebarCategories";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import i18n from "@/i18n";

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
  return (
    <section className="flex flex-col md:flex-row  ">
      <SidebarCategories />
      <div
        className="w-full cursor-grab bg-black text-white 
      relative flex md:flex-row items-center justify-between flex-col-reverse  md:mt-8 ltr:md:ml-4 rtl:md:mr-4 px-6 md:px-10 py-6 h-[85vh] md:h-[500px] overflow-hidden"
      >
        <Swiper
          key={i18n.dir()}
          dir={i18n.dir()}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-full cursor-pointer"
          style={
            {
              "--swiper-pagination-bullet-size": "16px",
              "--swiper-pagination-bullet-horizontal-gap": "8px",

              "--swiper-pagination-bullet-inactive-color": "#d1d5db", // gray-300
              "--swiper-pagination-bullet-inactive-opacity": "1",

              "--swiper-pagination-color": "#DB4444",
            } as React.CSSProperties
          }
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col md:flex-row-reverse items-center justify-between h-full">
                <HeroImage slide={slide} />
                <HeroContent slide={slide} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
