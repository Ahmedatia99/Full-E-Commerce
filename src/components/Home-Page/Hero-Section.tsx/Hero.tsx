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
  const { products, loading, error } = useHookProducts();

  return (
    <section className="flex flex-col md:flex-row">
      <SidebarCategories />

      <div
        className="w-full cursor-grab bg-black text-white relative flex md:flex-row 
        items-center justify-between flex-col-reverse md:mt-8 ltr:md:ml-4 rtl:md:mr-4
        px-6 md:px-10 py-12  md:h-125 overflow-hidden"
      >
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
                <div className="flex flex-col md:flex-row-reverse items-center justify-between h-full">
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
