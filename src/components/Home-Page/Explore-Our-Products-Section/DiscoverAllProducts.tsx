import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import Product_Card from "@/components/common/Product_Card/Product_Card";
import type { Swiper as SwiperType } from "swiper";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import type { productObject } from "@/types/product_Type";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

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
  const products: productObject[] = [
    {
      id: 1,
      isNew: false,
      title: "Gucci duffle bag",
      price: 10,
      discountPrice: 2.7,
      description: "eeeeeeee",
      ratingCount: 50,
      avgRate: 5,
      colors: [{ color: "red", quantity: 20, images: [], sizes: [] }],
      mainImgSRC:
        "https://res.cloudinary.com/dscw58bgh/image/upload/v1757765330/g92-2-500x500_1_2_se0nmg.png",
    },

    {
      id: 2,
      isNew: false,
      title: "Gucci duffle bag",
      price: 11,
      discountPrice: 1,
      description: "eeeeeeee",

      ratingCount: 25,
      avgRate: 4,
      colors: [{ color: "red", quantity: 20, images: [], sizes: [] }],
      mainImgSRC:
        "https://res.cloudinary.com/dscw58bgh/image/upload/v1757765330/g92-2-500x500_1_2_se0nmg.png",
    },

    {
      id: 3,
      isNew: false,
      title: "Gucci duffle bag",
      price: 15,
      description: "eeeeeeee",

      discountPrice: 0,
      ratingCount: 3,
      avgRate: 4,
      colors: [{ color: "red", quantity: 20, images: [], sizes: [] }],
      mainImgSRC:
        "https://res.cloudinary.com/dscw58bgh/image/upload/v1757765330/g92-2-500x500_1_2_se0nmg.png",
    },
    {
      id: 4,
      isNew: true,
      title: "Gucci duffle bagGucci duffle bag",
      price: 11,
      description: "eeeeeeee",

      discountPrice: 1,
      ratingCount: 20,
      avgRate: 2,
      colors: [{ color: "red", quantity: 20, images: [], sizes: [] }],
      mainImgSRC:
        "https://res.cloudinary.com/dscw58bgh/image/upload/v1757765330/g92-2-500x500_1_2_se0nmg.png",
    },

    {
      id: 5,
      isNew: true,
      title: "Gucci duffle bag",
      price: 11,
      description: "eeeeeeee",

      discountPrice: 1,
      ratingCount: 10,
      avgRate: 1,
      colors: [{ color: "red", quantity: 20, images: [], sizes: [] }],
      mainImgSRC:
        "https://res.cloudinary.com/dscw58bgh/image/upload/v1757765330/g92-2-500x500_1_2_se0nmg.png",
    },

    {
      id: 6,
      isNew: true,
      title: "Gucci duffle bag",
      price: 11,
      description: "eeeeeeee",

      discountPrice: 1,
      ratingCount: 50,
      avgRate: 3,
      colors: [{ color: "red", quantity: 20, images: [], sizes: [] }],
      mainImgSRC:
        "https://res.cloudinary.com/dscw58bgh/image/upload/v1757765330/g92-2-500x500_1_2_se0nmg.png",
    },
    {
      id: 7,
      isNew: true,
      title: "Gucci duffle bag",
      price: 11,
      description: "eeeeeeee",

      discountPrice: 1,
      ratingCount: 50,
      avgRate: 3,
      colors: [{ color: "red", quantity: 20, images: [], sizes: [] }],
      mainImgSRC:
        "https://res.cloudinary.com/dscw58bgh/image/upload/v1757765330/g92-2-500x500_1_2_se0nmg.png",
    },
    {
      id: 8,
      isNew: true,
      title: "Gucci duffle bag",
      price: 11,
      description: "eeeeeeee",

      discountPrice: 1,
      ratingCount: 50,
      avgRate: 3,
      colors: [{ color: "red", quantity: 20, images: [], sizes: [] }],
      mainImgSRC:
        "https://res.cloudinary.com/dscw58bgh/image/upload/v1757765330/g92-2-500x500_1_2_se0nmg.png",
    },
    {
      id: 9,
      isNew: true,
      title: "Gucci duffle bag",
      price: 11,
      description: "eeeeeeee",

      discountPrice: 1,
      ratingCount: 50,
      avgRate: 3,
      colors: [{ color: "red", quantity: 20, images: [], sizes: [] }],
      mainImgSRC:
        "https://res.cloudinary.com/dscw58bgh/image/upload/v1757765330/g92-2-500x500_1_2_se0nmg.png",
    },
    {
      id: 10,
      isNew: true,
      title: "Gucci duffle bag",
      price: 11,
      description: "eeeeeeee",

      discountPrice: 1,
      ratingCount: 50,
      avgRate: 3,
      colors: [{ color: "red", quantity: 20, images: [], sizes: [] }],
      mainImgSRC:
        "https://res.cloudinary.com/dscw58bgh/image/upload/v1757765330/g92-2-500x500_1_2_se0nmg.png",
    },
  ];
  const previewProducts = products.slice(0, 24);
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
