import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mockProducts } from "./mockProduct";


import ProductImages from "./ProductImagesDetails";
import ProductInfo from "./ProductInfoDetails";
import ProductColors from "./ProductColorsDetails";
import ProductSizes from "./ProductSizesDetails";
import ProductQuantity from "./ProductQuantityDetails";
import ProductActions from "./ProductActionsDetails";
import ProductDeliveryInfo from "./ProductDeliveryInfoDetails";
import LikeButtonDetails from "./LikeButtonDetails";

function HeroProductDetails() {
  interface OrderData {
    id: string;
    title: string;
    price: number;
    selectedColor?: string;
    selectedSize?: string;
    quantity: number;
    liked: boolean;
  }
  const { id } = useParams<{ id: string }>();
  const product = mockProducts.find((p) => p.id.toString() === id);

  // states
  const [liked, setLiked] = useState(product?.liked ?? false);
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0]?.value ?? ""
  );
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product?.sizes && product.sizes.length > 0 ? product.sizes[0] : undefined
  );

  const [quantity, setQuantity] = useState(product?.quantity ?? 1);
  const [mainImage, setMainImage] = useState<string | null>(null);

  useEffect(() => {
    if (product?.images?.length) {
      setMainImage(product.images[0]);
    }
  }, [product]);

  // if product not exiset
  if (!product) {
    return (
      <h2 className="text-6xl font-bold text-center mt-[40%]">
        Product not found
      </h2>
    );
  }
  //Send Data
  const handleBuyNow = () => {
    const orderData: OrderData = {
      id: product.id,
      title: product.title,
      price: product.price,
      selectedColor,
      quantity,
      liked,
    };

    if (selectedSize) {
      orderData.selectedSize = selectedSize;
    }

    console.log("🛒 Order Data:", orderData);

    // هنا ممكن تبعت orderData لـ API أو Redux أو localStorage
  };
  return (
    <div className="grid xl:grid-cols-[4fr_2fr] lg:grid-cols-[4fr_2fr] gap-10 xl:gap-20 mt-0">
      {/* images*/}
      <ProductImages
        images={product.images}
        mainImage={mainImage}
        setMainImage={setMainImage}
      />

      {/* info*/}
      <div className="flex flex-col max-[1350px]:gap-2 gap-5 w-full">
        <ProductInfo product={product} />

        {/* colors handel colors req*/}
        <ProductColors
          colors={product.colors}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        {/* Sizes */}

        <ProductSizes
          sizes={product.sizes}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
        <div className=" w-full gap-4  grid max-[350px]:grid-cols-[1fr] grid-cols-[4fr_4fr_1fr] ">
          {/* Quantity */}

          <ProductQuantity
            stock={product.stock}
            quantity={quantity}
            setQuantity={setQuantity}
          />

          {/* Buy Now */}
          <ProductActions stock={product.stock} onBuyNow={handleBuyNow} />

          {/* Liked */}
          <LikeButtonDetails liked={liked} setLiked={setLiked} />
        </div>
        {/* Delivery */}

        <ProductDeliveryInfo
          delivery={product.delivery}
          returnDelivery={product.returnDelivery}
        />
      </div>
    </div>
  );
}

export default HeroProductDetails;
