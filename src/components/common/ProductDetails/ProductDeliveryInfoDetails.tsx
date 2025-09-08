import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiReload } from "react-icons/tfi";

interface ProductDeliveryInfoProps {
  delivery: boolean;
  returnDelivery: number;
}

const ProductDeliveryInfo: React.FC<ProductDeliveryInfoProps> = ({
  delivery,
  returnDelivery,
}) => {
  return (
    <div className="border-2 mt-8 border-[#00000080] rounded-md w-full grid">
      {/* Delivery */}
      <div className="flex items-center px-5 max-[1350px]:py-5 py-10 gap-5">
        <TbTruckDelivery className="text-5xl" />
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold">Delivery</h3>
          {delivery ? (
            <a href="#" className="text-black underline font-semibold">
              Enter your postal code for Delivery Availability
            </a>
          ) : (
            <span className="text-red-500 font-semibold">Not Available</span>
          )}
        </div>
      </div>

      {/* Return Delivery */}
      <div className="border-t-2 border-t-[#00000080] flex items-center  px-5 max-[1350px]:py-5 py-10 gap-5">
        <TfiReload className="text-5xl" />
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold">Return Delivery</h3>
          {returnDelivery > 0 ? (
            <span className="font-semibold">
              {returnDelivery} Days Return Policy{" "}
              <a href="#" className="text-black underline font-semibold">
                Details
              </a>
            </span>
          ) : (
            <span className="text-red-500 font-semibold">Not Available</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDeliveryInfo;
