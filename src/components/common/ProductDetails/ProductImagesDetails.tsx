import React from "react";

interface ProductImagesProps {
  images: string[];
  mainImage: string | null;
  setMainImage: (img: string) => void;
}

const ProductImages: React.FC<ProductImagesProps> = ({
  images,
  mainImage,
  setMainImage,
}) => {
  return (
    <div className="grid h-full grid-rows-1 sm:grid-cols-[2fr_9fr] md:grid-cols-[2fr_6fr] xl:grid-cols-[2fr_9fr] gap-8  md:gap-8 ">
      {/* thumbnails */}
      <div className="  justify-center items-center grid grid-cols-5 sm:grid-cols-1 sm:grid-rows-5 gap-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setMainImage(img)}
            aria-label={`Select image ${idx + 1}`}
            className={`border-2 rounded-md flex w-full max-[1024px]:h-full max-[1350px]:h-30 min-[1350px]:h-35  items-center justify-center bg-[#F5F5F5] ${
              mainImage === img ? "border-gray-700" : "border-transparent"
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail of product - image ${idx + 1}`}
              loading="lazy"
              className="w-full h-full object-contain max-[325px]:p-0   p-2 sm:p-5"
            />
          </button>
        ))}
      </div>

      {/* main image */}
      <div className="rounded-md bg-[#F5F5F5] flex items-center justify-center">
        <img
          src={mainImage || "/placeholder.png"}
          alt="Main product image"
          loading="lazy"
          className="px-5 w-[80%] object-contain"
        />
      </div>
    </div>
  );
};

export default ProductImages;
