import { useContext, useState, useCallback, useMemo, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import ProductImages from "./ProductImagesDetails";
import ProductInfo from "./ProductInfoDetails";
import ProductColors from "./ProductColorsDetails";
import ProductSizes from "./ProductSizesDetails";
import ProductQuantity from "./ProductQuantityDetails";
import ProductActions from "./ProductActionsDetails";
import ProductDeliveryInfo from "./delivery_info/ProductDeliveryInfoDetails";
import LikeButtonDetails from "./LikeButtonDetails";
import { useProductColor } from "../../hooks/useProductColor";
import { useProductSize } from "../../hooks/useProductSize";
import { useProductImages } from "../../hooks/useProductImages";
import { toCartProduct } from "@/utils/ProductDTO";
import { CartContext } from "@/hooks/CartContext";
import { useProductByID } from "@/hooks/productsCustomHook/useProductById";

export default function HeroProductDetails() {
  const { id: idFromParams } = useParams<{ id?: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);

  //   Get Product ID
  const getProductID = useCallback(() => {
    if (idFromParams) return idFromParams;
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get("id") || undefined;
  }, [idFromParams, location.search]);

  const id = getProductID();
  //   Fetch product using custom hook
  const { product, loading, error } = useProductByID(id);
  //   States
  const [quantity, setQuantity] = useState(1);
  const [selectedPostalCode, setSelectedPostalCode] = useState("");

  //   Handle missing product or error
  useEffect(() => {
    if (!loading && (!product || error)) {
      navigate("/error");
    }
  }, [product, error, loading, navigate]);

  //   Hooks must always run after product is defined
  const { selectedColor, setSelectedColor, colorObj } =
    useProductColor(product);
  const { selectedSize, setSelectedSize } = useProductSize(colorObj);
  const { images, mainImage, setMainImage } = useProductImages(
    product,
    colorObj
  );

  //   Derived data
  const sizes = colorObj?.sizes ?? [];
  const stock = colorObj?.quantity ?? 0;
  const colorOptions = useMemo(
    () => (product ? product.colors.map((c) => ({ value: c.color })) : []),
    [product]
  );
  //   Handle Buy Now
  const handleBuyNow = useCallback(() => {
    if (!product) return;
    const productCart = toCartProduct(product, selectedColor, quantity);
    cartContext?.addToCart(productCart);
  }, [product, selectedColor, quantity, cartContext]);

  if (loading) {
    return (
      <p className="text-center py-10 text-gray-600">Loading product...</p>
    );
  }

  if (!product) return null;

  return (
    <section className="grid xl:grid-cols-[4fr_2fr] lg:grid-cols-[4fr_2fr] gap-10 xl:gap-20 mb-10">
      {/* Product Images */}
      <ProductImages
        images={images}
        mainImage={mainImage}
        setMainImage={setMainImage}
        title={product.title}
      />

      {/* Product Details */}
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

        {/* Color Selection */}
        <ProductColors
          colors={colorOptions}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />

        {/* Size Selection */}
        <ProductSizes
          sizes={sizes}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />

        {/* Quantity + Actions + Like Button */}
        <div className="w-full gap-4 max-sm:gap-2 flex justify-center items-center">
          <ProductQuantity
            stock={stock}
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <ProductActions stock={stock} onBuyNow={handleBuyNow} />
          <LikeButtonDetails productId={product.id} />
        </div>

        {/* Delivery Information */}
        <ProductDeliveryInfo
          delivery={true}
          returnDelivery={product.returnDelivery || 0}
          deliveryPostalCodes={product.DeliveryPostalCode}
          selectedPostalCode={selectedPostalCode}
          setSelectedPostalCode={setSelectedPostalCode}
        />
      </div>
    </section>
  );
}
