import React from "react";

function OurFeatures() {
  return (
    <div className="flex max-w-[750px] max-sm:flex-col gap-20 self-center">
      {/* Feature 1 */}
      <div className="flex flex-col w-[300px] items-center justify-center text-center">
        <img
          alt="delivery icon"
          loading="lazy"
          width={81}
          height={80}
          className="mb-4"
          src="/public\assets\headPhone.webp"
        />
        <p className="font-semibold text-[20px] mb-2">FREE AND FAST DELIVERY</p>
        <p className="text-[14px]">Free delivery for all orders over $140</p>
      </div>

      {/* Feature 2 */}
      <div className="flex flex-col w-[300px] items-center justify-center text-center">
        <img
          alt="customer service icon"
          loading="lazy"
          width={81}
          height={80}
          className="mb-4"
          src="public\assets\gurantee.webp"
        />
        <p className="font-semibold text-[20px] mb-2">24/7 CUSTOMER SERVICE</p>
        <p className="text-[14px]">Friendly 24/7 customer support</p>
      </div>

      {/* Feature 3 */}
      <div className="flex flex-col w-[300px] items-center justify-center text-center">
        <img
          alt="money back icon"
          loading="lazy"
          width={81}
          height={80}
          className="mb-4"
          src="public\assets\delivery.webp"
        />
        <p className="font-semibold text-[20px] mb-2">MONEY BACK GUARANTEE</p>
        <p className="text-[14px]">We return money within 30 days</p>
      </div>
    </div>
  );
}

export default OurFeatures;
