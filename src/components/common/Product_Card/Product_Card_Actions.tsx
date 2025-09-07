import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import type { ProductCardProps } from "../../../types/Components_type";
const ProductActions = ({
  componentProps,
}: {
  componentProps?: ProductCardProps;
}) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="icons absolute right-2 top-2 flex flex-col gap-3">
      {componentProps?.hasFavouriteIcon && (
        <div className="favourite-icon bg-white rounded-full w-7 h-7 flex items-center justify-center">
          {liked ? (
            <FaHeart
              className="cursor-pointer text-red-500"
              onClick={() => setLiked(false)}
            />
          ) : (
            <FaRegHeart
              className="cursor-pointer"
              onClick={() => setLiked(true)}
            />
          )}
        </div>
      )}

      {componentProps?.hasviewIcon && (
        <div className="favourite-icon bg-white rounded-full w-7 h-7 flex items-center justify-center">
          <LuEye className="cursor-pointer " />
        </div>
      )}

      {componentProps?.hasDeleteIcon && (
        <div className="favourite-icon bg-white rounded-full w-7 h-7 flex items-center justify-center">
          <RiDeleteBin6Line className="cursor-pointer " />
        </div>
      )}
    </div>
  );
};

export default ProductActions;
