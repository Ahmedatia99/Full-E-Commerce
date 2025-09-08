import Product_Card from "@/components/common/Product_Card/Product_Card";
import type { productObject, products } from "@/types/product_Type";

const productCardProps = {
  AddToCartBtnFixed: true,
  hasFavouriteIcon: false,
  hasviewIcon: true,
  hasDeleteIcon: false,
  hasReview: true,
  hasColors: false,
  ratingAndPriceInRow: false,
};

const products: productObject[] = [
  {
    id: 1,
    isNew: false,
    title: "Gucci duffle bag",
    price: 10,
    discountPrice: 2.7,
    ratingCount: 50,
    avgRate: 5,
    colors: [{ color: "red", quantity: 20, images: [], sizes: [] }],
    mainImgSRC: "/images/products/bag.png",
  },

  {
    id: 2,
    isNew: false,
    title: "Gucci duffle bag",
    price: 11,
    discountPrice: 1,
    ratingCount: 25,
    avgRate: 4,
    colors: [{ color: "red", quantity: 20, images: [], sizes: [] }],
    mainImgSRC: "/images/products/bag.png",
  },

  {
    id: 3,
    isNew: false,
    title: "Gucci duffle bag",
    price: 15,
    discountPrice: 0,
    ratingCount: 3,
    avgRate: 4,
    colors: [{ color: "red", quantity: 20, images: [], sizes: [] }],
    mainImgSRC: "/images/products/bag.png",
  },
  {
    id: 4,
    isNew: true,
    title: "Gucci duffle bagGucci duffle bag",
    price: 11,
    discountPrice: 1,
    ratingCount: 20,
    avgRate: 2,
    colors: [{ color: "red", quantity: 20, images: [], sizes: [] }],
    mainImgSRC: "/images/products/bag.png",
  },

  {
    id: 5,
    isNew: true,
    title: "Gucci duffle bag",
    price: 11,
    discountPrice: 1,
    ratingCount: 10,
    avgRate: 1,
    colors: [{ color: "red", quantity: 20, images: [], sizes: [] }],
    mainImgSRC: "/images/products/bag.png",
  },

  {
    id: 6,
    isNew: true,
    title: "Gucci duffle bag",
    price: 11,
    discountPrice: 1,
    ratingCount: 50,
    avgRate: 3,
    colors: [{ color: "red", quantity: 20, images: [], sizes: [] }],
    mainImgSRC: "/images/products/bag.png",
  },
];
function Main_Layout() {
  return (
    <>
      <div className="flex items-center justify-center mt-10 bg-[#F5F5F5] p-10 flex-wrap">
        <Product_Card products={products} componentProps={productCardProps} />
      </div>
    </>
  );
}

export default Main_Layout;
