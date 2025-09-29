import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";
import "swiper/css";

import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import Product_Card from "@/components/common/Product_Card/Product_Card";
import type { Swiper as SwiperType } from "swiper";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import type { productObject } from "@/types/product_Type";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import Products from "../../../product.json";

const DiscoverAllProducts = () => {
  const navigate = useNavigate();
  const toAllProductPage = () => {
    navigate("/product");
  };
  const productCardProps = {
    AddToCartBtnFixed: false,
    hasFavouriteIcon: true,
    hasviewIcon: true,
    hasDeleteIcon: false,
    hasReview: true,
    hasColors: false,
    ratingAndPriceInRow: false,
  };
  const swiperRef = useRef<SwiperType | null>(null);
  const products = Products as productObject[];
  const previewProducts = [...products]
    .sort(() => Math.random() - 0.5)
    .slice(0, 15);
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex justify-between w-full mt-20 items-center">
        <SectionHeader
          label={t("Our Products")}
          title={t("Explore Our Products")}
          swiperRef={swiperRef}
          className="mb-10"
        />
      </div>
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
        {previewProducts.map((p) => (
          <SwiperSlide key={p.id}>
            <Product_Card products={[p]} componentProps={productCardProps} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center">
        <Button
          className="h-15 hover tranform hover:scale-105 mt-15 transition duration-300"
          onClick={toAllProductPage}
        >
          {t("view all products")}
        </Button>
      </div>
    </div>
  );
};

export default DiscoverAllProducts;
