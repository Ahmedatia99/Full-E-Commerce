import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import SectionHeader from "../../common/SectionHeader/SectionHeader";
import Product_Card from "@/components/common/Product_Card/Product_Card";
import type { Swiper as SwiperType } from "swiper";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { useBestSellingSectionProducts } from "@/hooks/productsCustomHook/useBestSellingSectionProducts";

const BestProducts = () => {
  // Fetch best selling products using custom hook
  const { products, loading, error } = useBestSellingSectionProducts();

  // Navigation hook to redirect to best-selling page
  const navigate = useNavigate();
  const toSalesPage = () => {
    navigate("/best");
  };

  // Common props to pass into each product card
  const productCardProps = {
    AddToCartBtnFixed: false,
    hasFavouriteIcon: true,
    hasviewIcon: true,
    hasDeleteIcon: false,
    hasReview: true,
    hasColors: false,
    ratingAndPriceInRow: false,
  };

  // Reference for controlling Swiper navigation externally
  const swiperRef = useRef<SwiperType | null>(null);

  // i18n translation hook
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center ">
      {/* Section Header is always displayed regardless of data or loading state */}
      <div className="flex items-end justify-end w-full mt-20">
        <SectionHeader
          label={t("This Month")}
          title={t("Best Selling Products")}
          swiperRef={swiperRef}
          className="mb-10 gap-10"
        />
      </div>

      {/* Content validation and rendering */}
      <div>
        {loading ? (
          // Loading state
          <p className="text-center text-gray-500">{t("Loading...")}</p>
        ) : error ? (
          // Error state
          <p className="text-center text-red-500">
            {t("Failed to load products")}
          </p>
        ) : products.length === 0 ? (
          // Empty data state
          <p className="text-center text-gray-400">
            {t("No products available")}
          </p>
        ) : (
          // Swiper carousel of products
          <Swiper
            key={i18n.dir()}
            dir={i18n.dir()}
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {products.map((p) => (
              <SwiperSlide key={p.id}>
                <Product_Card
                  products={[p]}
                  componentProps={productCardProps}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* Button to navigate to best-selling page */}
      <div className="flex justify-center mt-12">
        <Button
          className="h-15 hover transform hover:scale-105 transition duration-300"
          onClick={toSalesPage}
        >
          {t("View Best Selling")}
        </Button>
      </div>
    </div>
  );
};

export default BestProducts;
