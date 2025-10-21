import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import i18n from "@/i18n";
import SidebarCategories from "./SidebarCategories";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import { useHookProducts } from "@/hooks/productsCustomHook/useHookProducts";
import type { hookProductObject } from "@/types/product_Type";

export default function Hero() {
  const categories = [
    {
      key: "womansFashion",
      name: "Womans Fashion",
      url: "AllProducts/womenfashion",
    },
    { key: "mensFashion", name: "Mens Fashion", url: "AllProducts/menfashion" },
    {
      key: "electronics",
      name: "Electronics",
      url: "AllProducts/electronics",
    },
       { key: "home", name: "Home", url: "AllProducts/home" },
    { key: "pets", name: "Pets", url: "AllProducts/pets" },
    {
      key: "Health Beauty",
      name: "Health Beauty",
      url: "AllProducts/healthbeauty",
    },
    { key: "Baby Toys", name: "Baby Toys", url: "AllProducts/babytoys" },
    { key: "Sports", name: "Sports", url: "AllProducts/sports" },
    { key: "Perfumes", name: "Perfumes", url: "AllProducts/perfumes" },
 
    { key: "computer", name: "Computer", url: "AllProducts/computer" },
  ];
  const { products, loading, error } = useHookProducts();

  return (
    <section className="flex flex-col md:flex-row">
      <SidebarCategories categories={categories} />

      <div
        className="w-full cursor-grab bg-black text-white flex md:flex-row 
        items-center justify-between flex-col-reverse md:mt-8 ltr:md:ml-4 rtl:md:mr-4
        px-6 md:px-10 pt-12 pb-2  md:h-125 overflow-hidden bg-[url('@/assets/images/icon-dotted-map-2.png')] bg-cover bg-center md:rounded-lg sm:rounded-none relative"
      >
        <div className="absolute top-1/2 left-1/2 max-sm:right-0 translate-x-1/2 -translate-y-1/2">
          <img
            src="/public/assets/circle-lines.png"
            alt="Dotted Map"
            className="w-xl"
          />
        </div>
        {loading ? (
          <p className="text-gray-400 text-lg animate-pulse m-auto">
            Loading products...
          </p>
        ) : error ? (
          <p className="text-red-500 text-lg m-auto">Error: {error}</p>
        ) : products.length === 0 ? (
          <p className="text-gray-400 text-lg m-auto">No products found</p>
        ) : (
          <Swiper
            key={i18n.dir()}
            dir={i18n.dir()}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            className="w-full h-full cursor-pointer"
            style={
              {
                "--swiper-pagination-bullet-size": "16px",
                "--swiper-pagination-bullet-horizontal-gap": "8px",
                "--swiper-pagination-bullet-inactive-color": "#d1d5db",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-color": "#DB4444",
              } as React.CSSProperties
            }
          >
            {products.map((slide: hookProductObject) => (
              <SwiperSlide key={slide.id}>
                <div className="flex flex-col gap-20 md:flex-row-reverse items-center justify-center md:justify-between h-full">
                  <HeroImage slide={slide} />
                  <HeroContent slide={slide} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
