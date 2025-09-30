import { getCloudinaryUrl } from "@/utils/ProductStats";
import { memo } from "react";

type ProductImageProps = {
  src: string;
  alt: string;
  itemProp?: string;
};

const ProductImage = ({ src, alt, itemProp }: ProductImageProps) => (
  <div className="px-10 py-7 flex justify-center mt-4 sm:aspect-[4/3]">
    <img
      src={getCloudinaryUrl(src, { w: 190, h: 138 })}
      alt={alt}
      itemProp={itemProp}
      fetchPriority="high"
      width={190}
      height={138}
      loading="eager"
      decoding="async"
      className="transition-transform duration-300 hover:scale-105 object-contain"
    />
  </div>
);

export default memo(ProductImage);
