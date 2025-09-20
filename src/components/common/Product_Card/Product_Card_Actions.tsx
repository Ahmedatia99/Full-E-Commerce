import { memo, useState } from "react";
import { Heart, Heart as HeartFilled, Eye, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { ProductCardProps } from "../../../types/Components_type";
import type { productObject } from "@/types/product_Type";

const ProductActions = ({
  componentProps,
  product,
}: {
  componentProps?: ProductCardProps;
  product: productObject;
}) => {
  const [liked, setLiked] = useState(false); // Track if the product is marked as favourite
  const [mainImage, setMainImage] = useState(product.mainImgSRC); // Track the main image displayed

  return (
    <div className="icons absolute right-2 top-2 flex flex-col gap-3">
      {/* Favourite button */}
      {componentProps?.hasFavouriteIcon && (
        <button
          aria-label={liked ? "Remove from favourites" : "Add to favourites"}
          onClick={() => setLiked(!liked)}
          className="bg-white rounded-full w-7 h-7 flex items-center justify-center"
        >
          {liked ? (
            <HeartFilled className="fill-red-500 cursor-pointer" />
          ) : (
            <Heart className="text-gray-700 cursor-pointer" />
          )}
        </button>
      )}

      {/* View product details in dialog */}
      {componentProps?.hasviewIcon && (
        <Dialog>
          <DialogTrigger asChild>
            <button
              aria-label="View product details"
              className="bg-white rounded-full w-7 h-7 flex items-center justify-center "
            >
              <Eye className="cursor-pointer" />
            </button>
          </DialogTrigger>

          <DialogContent className="max-w-4xl">
            <DialogHeader className="">
              <DialogTitle>{product.title}</DialogTitle>
            </DialogHeader>

            <div className="grid grid-cols-3 gap-6">
              {/* Thumbnails section */}
              <div className="flex flex-col gap-4">
                {/* Default main image thumbnail */}
                <img
                  src={product.mainImgSRC}
                  alt="main thumb"
                  width={100}
                  height={100}
                  className="rounded cursor-pointer"
                  onClick={() => setMainImage(product.mainImgSRC)}
                />
                {/* Additional color-based images */}
                {product.colors
                  ?.flatMap((c) => c.images)
                  .map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`thumb-${i}`}
                      width={100}
                      height={100}
                      className="rounded cursor-pointer"
                      onClick={() => setMainImage(img)}
                    />
                  ))}
              </div>

              {/* Main large preview image */}
              <div className="col-span-2 flex items-center justify-center">
                <img
                  src={mainImage}
                  alt="main view"
                  width={400}
                  height={400}
                  className="rounded"
                />
              </div>
            </div>

            {/* Product details: price  */}
            <div className="mt-4 space-y-2">
              <p className="text-lg font-semibold text-red-600">
                {product.discountPrice
                  ? `${product.discountPrice}$  (was ${product.price}$)`
                  : `${product.price}$`}
              </p>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Delete button */}
      {componentProps?.hasDeleteIcon && (
        <button
          aria-label="Delete product"
          className="bg-white rounded-full w-7 h-7 flex items-center justify-center"
        >
          <Trash2 />
        </button>
      )}
    </div>
  );
};

export default memo(ProductActions);
