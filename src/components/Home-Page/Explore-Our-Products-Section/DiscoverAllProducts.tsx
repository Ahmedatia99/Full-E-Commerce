import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";
import "swiper/css";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import Product_Card from "@/components/common/Product_Card/Product_Card";
import type { Swiper as SwiperType } from "swiper";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { useExploreOurProductsSectionProducts } from "@/hooks/productsCustomHook/useExploreOurProductsSectionProducts";
const DiscoverAllProducts = () => {
  // Fetch products for "Explore Our Products" section
  const { products, loading, error } = useExploreOurProductsSectionProducts();

  // Common props used by all product cards
  const productCardProps = {
    AddToCartBtnFixed: false,
    hasFavouriteIcon: true,
    hasviewIcon: true,
    hasDeleteIcon: false,
    hasReview: true,
    hasColors: false,
    ratingAndPriceInRow: false,
  };

  // Reference to control Swiper navigation externally
  const swiperRef = useRef<SwiperType | null>(null);

  // Translation hook
  const { t } = useTranslation();

  return (
    <div>
      {/* Section Header should always appear regardless of data or status */}
      <div className="flex justify-between w-full mt-20 items-center">
        <SectionHeader
          label={t("Our Products")}
          title={t("Explore Our Products")}
          swiperRef={swiperRef}
          className="mb-10"
        />
      </div>

      {/* Conditional rendering for loading, error, or empty states */}
      {loading ? (
        // Loading state
        <p className="text-center text-gray-500">{t("Loading...")}</p>
      ) : error ? (
        // Error state
        <p className="text-center text-main">{t("Failed to load products")}</p>
      ) : products.length === 0 ? (
        // Empty data state
        <p className="text-center text-gray-400">
          {t("No products available")}
        </p>
      ) : (
        // Swiper grid to display product cards
        <Swiper
          key={i18n.dir()}
          dir={i18n.dir()}
          modules={[Grid, Navigation]}
          slidesPerView={1}
          grid={{ rows: 2, fill: "row" }}
          spaceBetween={16}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            640: { slidesPerView: 2, grid: { rows: 2 } },
            1024: { slidesPerView: 3, grid: { rows: 2 } },
            1280: { slidesPerView: 5, grid: { rows: 2 } },
          }}
        >
          {products.map((p) => (
            <SwiperSlide key={p.id}>
              <Product_Card products={[p]} componentProps={productCardProps} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Button to navigate to full products page */}
      <div className="flex justify-center">
        <Link to="/AllProducts">
          <Button className="h-15 hover transform hover:scale-105 mt-15 transition duration-300">
            {t("view all products")}
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default DiscoverAllProducts;
