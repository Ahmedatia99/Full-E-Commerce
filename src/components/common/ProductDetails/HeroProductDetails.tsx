import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { mockProducts } from "./mockProduct";
import ProductImages from "./ProductImagesDetails";
import ProductInfo from "./ProductInfoDetails";
import ProductColors from "./ProductColorsDetails";
import ProductSizes from "./ProductSizesDetails";
import ProductQuantity from "./ProductQuantityDetails";
import ProductActions from "./ProductActionsDetails";
import ProductDeliveryInfo from "./ProductDeliveryInfoDetails";
import LikeButtonDetails from "./LikeButtonDetails";
import { useProductColor } from "./hooks/useProductColor";
import { useProductSize } from "./hooks/useProductSize";
import { useProductImages } from "./hooks/useProductImages";

function HeroProductDetails() {
  const { id: idFromParams } = useParams<{ id?: string }>();
  const location = useLocation();
  // جلب id من query string إذا لم يوجد في ال path
  function getId() {
    if (idFromParams) return idFromParams;
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get("id") || undefined;
  }
  const id = getId();

  const product = mockProducts.find((p) => p.id.toString() === id);

  // states
  const [liked, setLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  // State for selected postal code (يجب أن يكون هنا وليس بعد شرط)
  const [selectedPostalCode, setSelectedPostalCode] = useState("");
  // هوكس للألوان
  const { selectedColor, setSelectedColor, colorObj } =
    useProductColor(product);
  // هوكس للمقاسات
  const { selectedSize, setSelectedSize } = useProductSize(colorObj);
  // هوكس للصور
  const { images, mainImage, setMainImage } = useProductImages(
    product,
    colorObj
  );

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
    // جلب بيانات اللون المختار
    const orderData = {
      id: product.id,
      title: product.title,
      price: product.price,
      selectedColor,
      selectedSize,
      quantity,
      liked,
      images: colorObj?.images?.filter((img) => img && img.trim() !== "") ?? [],
      mainImgSRC: product.mainImgSRC,
      postalCode: selectedPostalCode,
    };
    console.log("🛒 Order Data:", orderData);
    // هنا ممكن تبعت orderData لـ API أو Redux أو localStorage
  };
  const sizes = colorObj?.sizes || [];
  const stock = colorObj?.quantity || 0;

  return (
    <div className="grid xl:grid-cols-[4fr_2fr] lg:grid-cols-[4fr_2fr] gap-10 xl:gap-20 mt-0">
      {/* images*/}
      <ProductImages
        images={images}
        mainImage={mainImage}
        setMainImage={setMainImage}
        title={product.title}
      />

      {/* info*/}
      <div className="flex flex-col max-[1350px]:gap-2 gap-5 w-full">
        <ProductInfo
          product={{
            title: product.title,
            rating: product.avgRate,
            stock: stock,
            price: product.price,
            description: product.description || "",
            discountPrice: product.discountPrice,
            reviews: product.ratingCount,
          }}
        />

        {/* colors handel colors req*/}
        <ProductColors
          colors={product.colors.map((c) => ({ value: c.color }))}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        {/* Sizes */}
        <ProductSizes
          sizes={sizes}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
        <div className=" w-full gap-4  grid max-[350px]:grid-cols-[1fr] grid-cols-[4fr_4fr_1fr] ">
          {/* Quantity */}
          <ProductQuantity
            stock={stock}
            quantity={quantity}
            setQuantity={setQuantity}
          />
          {/* Buy Now */}
          <ProductActions stock={stock} onBuyNow={handleBuyNow} />
          {/* Liked */}
          <LikeButtonDetails liked={liked} setLiked={setLiked} />
        </div>
        {/* Delivery */}
        <ProductDeliveryInfo
          delivery={true}
          returnDelivery={product.returnDelivery || 0}
          deliveryPostalCodes={product.DeliveryPostalCode}
          selectedPostalCode={selectedPostalCode}
          setSelectedPostalCode={setSelectedPostalCode}
        />
      </div>
    </div>
  );
}

export default HeroProductDetails;
