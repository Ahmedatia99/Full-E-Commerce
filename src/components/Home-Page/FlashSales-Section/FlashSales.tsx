import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Product_Card from "@/components/common/Product_Card/Product_Card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Swiper as SwiperType } from "swiper";
import type { productObject } from "@/types/product_Type";
import SectionHeader from "@/components/common/SectionHeader";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import Products from "../../../product.json";
const FlashSales = () => {
  const navigate = useNavigate();

  const toSalesPage = () => {
    navigate("/sales");
  };
  const productCardProps = {
    hasFavouriteIcon: true,
    hasviewIcon: true,
    hasReview: true,
  };
  const swiperRef = useRef<SwiperType | null>(null);
  const products = Products as productObject[];

  const previewProducts = products.filter((p) => p.isFlash).slice(0, 10);
  const { t } = useTranslation();

  return (
    <div>
      <SectionHeader
        label={t("Today's")}
        title={t("Flash Sales")}
        swiperRef={swiperRef}
        countdownTarget={new Date(new Date().getTime() + 24 * 60 * 60 * 1000)} // 24 hours from now
        className="mb-10  "
      />
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
        {previewProducts.map((p) => (
          <SwiperSlide key={p.id}>
            <Product_Card products={[p]} componentProps={productCardProps} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-12">
        <Button
          className="h-15 hover tranform capitalize hover:scale-105 transition duration-300"
          onClick={toSalesPage}
        >
          {t("seeMoreDeals")}
        </Button>
      </div>
    </div>
  );
};

export default FlashSales;
