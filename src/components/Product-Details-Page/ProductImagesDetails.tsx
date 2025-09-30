/**
 * ProductImages component displays a set of product images with selectable thumbnails.
 *
 * - Shows a grid of image thumbnails allowing users to select the main image.
 * - Automatically sets the main image to the first image if none is selected or if the selected image is not in the list.
 * - Uses accessible roles and aria attributes for better screen reader support.
 * - Renders the selected main image in a larger view.
 *
 * Props:
 * @param {string} title - The product title, used for alt text.
 * @param {string[]} images - Array of image URLs for the product.
 * @param {string|null} mainImage - The currently selected main image URL.
 * @param {(img: string) => void} setMainImage - Callback to set the main image.
 *
 * Usage:
 * <ProductImages
 *   title="Product Name"
 *   images={["img1.jpg", "img2.jpg"]}
 *   mainImage={mainImage}
 *   setMainImage={setMainImage}
 * />
 */
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";

interface ProductImagesProps {
  title: string;
  images: string[];
  mainImage: string | null;
  setMainImage: (img: string) => void;
}

const ProductImages: React.FC<ProductImagesProps> = ({
  title,
  images,
  mainImage,
  setMainImage,
}) => {
  useEffect(() => {
    if (images.length > 0 && (!mainImage || !images.includes(mainImage))) {
      setMainImage(images[0]);
    }
  }, [images, mainImage, setMainImage]);
  return (
    <div className="grid h-full grid-rows-1 sm:grid-cols-[2fr_9fr] md:grid-cols-[2fr_6fr] xl:grid-cols-[2fr_9fr] gap-8 md:gap-8">
      {/* thumbnails */}
      <div
        className="justify-center items-center grid grid-cols-5 sm:grid-cols-1 sm:grid-rows-5 gap-4"
        role="radiogroup"
        aria-label="Select product image"
      >
        {images.map((img, idx) => (
          <Button
            key={idx}
            type="button"
            role="radio"
            aria-checked={mainImage === img}
            aria-label={`Select product image ${idx + 1}`}
            tabIndex={0}
            onClick={() => setMainImage(img)}
            className={`cursor-pointer border rounded-md flex w-full max-[1024px]:h-full max-[1350px]:h-30 min-[1350px]:h-35 bg-[#F5F5F5] transition ${
              mainImage === img ? "border-main border-2 " : "border-transparent"
            }`}
          >
            <img
              src={img}
              alt={`${title} - product image ${idx + 1}`}
              loading="lazy"
              className="w-full h-full object-contain  max-sm:px-2"
            />
          </Button>
        ))}
      </div>

      {/* main image */}
      <div
        className="rounded-md bg-gray-200 flex items-center justify-center"
        aria-live="polite"
      >
        <img
          src={mainImage || "/placeholder.png"}
          alt={title}
          loading="lazy"
          className="max-h-[500px] object-contain p-5"
        />
      </div>
    </div>
  );
};

export default ProductImages;
