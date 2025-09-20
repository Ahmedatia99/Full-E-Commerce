import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SectionHeader from "../common/SectionHeader/SectionHeader";
import Product_Card from "@/components/common/Product_Card/Product_Card";
import type SwiperType from "swiper/types/swiper-class";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";



const FlashSales = () => {
  const navigate = useNavigate();
  const toSalesPage = () => {
    navigate("/sales");

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
      description: "eeeeeeee",
      price: 10,
      discountPrice: 2.7,
      ratingCount: 50,
      avgRate: 5,
      colors: [
        { color: "red", quantity: 20, images: [], sizes: [] },
        { color: "black", quantity: 20, images: [], sizes: [] },
      ],
      mainImgSRC:
        "https://res.cloudinary.com/dscw58bgh/image/upload/v1757765330/g92-2-500x500_1_2_se0nmg.png",
    },

    {
      id: 2,
      isNew: false,
      title: "Gucci duffle bag",
      price: 11,
      description: "eeeeeeee",

      discountPrice: 1,
      ratingCount: 25,
      avgRate: 4,
      colors: [
        { color: "red", quantity: 20, images: [], sizes: [] },
        { color: "black", quantity: 20, images: [], sizes: [] },
      ],
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
      discountPrice: 1,
      ratingCount: 20,
      description: "eeeeeeee",

      avgRate: 2,
      colors: [{ color: "red", quantity: 20, images: [], sizes: [] }],
      mainImgSRC:
        "https://res.cloudinary.com/dscw58bgh/image/upload/v1757765330/g92-2-500x500_1_2_se0nmg.png",
    },

    {
      id: 5,
      isNew: true,
      title: "Gucci duffle bag",
      description: "eeeeeeee",

      price: 11,
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
      description: "eeeeeeee",

      price: 11,
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
      discountPrice: 1,
      ratingCount: 50,
      avgRate: 3,
      colors: [{ color: "red", quantity: 20, images: [], sizes: [] }],
      mainImgSRC:
        "https://res.cloudinary.com/dscw58bgh/image/upload/v1757765330/g92-2-500x500_1_2_se0nmg.png",
    },
  ];
  const previewProducts = products.slice(0, 15);
  return (
    <div>
      <SectionHeader
        label="Today's"
        title="Flash Sales"
        swiperRef={swiperRef}
        className="mb-10"
      />
      <Swiper
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
      <div className="flex justify-center mt-8">
        <Button onClick={toSalesPage}>view all products</Button>
      </div>
    </div>
  );
};

export default FlashSales;
