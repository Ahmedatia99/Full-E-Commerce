import Product_Card from "@/components/common/Product_Card/Product_Card";
import type { productObject } from "@/types/product_Type";
import SectionHeader from "./../common/SectionHeader/SectionHeader";
// import CountdownTimer from "./../common/CountdownTimer/CountdownTimer";
import { useSlider } from "../hooks/navigateSliderArrow.ts";

function FlashSales() {
  const productCardProps = {
    AddToCartBtnFixed: true,
    hasFavouriteIcon: true,
    hasviewIcon: true,
    hasDeleteIcon: false,
    hasReview: true,
    hasColors: true,
    ratingAndPriceInRow: false,
  };

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
  ];

  const { index, next, prev, canNext, canPrev, visibleItems } =
    useSlider(products);
  return (
    <>
      <div className="">
        <div className=" flex   w-full mb-6">
          <SectionHeader
            label="Today's"
            title="Flash Sales"
            onPrevious={prev}
            onNext={next}
            canNext={!canNext}
            canPrev={!canPrev}
          ></SectionHeader>
        </div>
        <div className="w-full ">
          <Product_Card
            products={visibleItems}
            componentProps={productCardProps}
            index={index}
          />
        </div>
      </div>
    </>
  );
}

export default FlashSales;
