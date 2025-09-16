import AddToCartButton from "./Prodct_Card_Add_To_Cart_Btn";

type ProductImageProps = {
  src: string;
  alt: string;
  itemProp?: string;
};

const ProductImage = ({ src, alt, itemProp }: ProductImageProps) => (
  <>
    <div className=" px-10 py-7 flex justify-center mt-4 ">
      <img
        src={`${src}?f_auto&fit=clip&w=190&h=138&q=auto:good`}
        srcSet={`
        ${src}?fm=webp&fit=clip&w=380&h=276&q=auto:good 2x,
        ${src}?fm=webp&fit=clip&w=570&h=414&q=auto:good 3x
      `}
        alt={alt}
        fetchPriority="high"
        itemProp={itemProp}
        width={190}
        height={138}
        loading="eager"
        decoding="async"
        style={{ maxWidth: "100%", height: "auto" }}
        className="transition-transform duration-300 hover:scale-105"
      />
    </div>
  </>
);

export default ProductImage;
