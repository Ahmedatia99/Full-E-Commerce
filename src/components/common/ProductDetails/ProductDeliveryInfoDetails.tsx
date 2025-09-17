import React, { useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiReload } from "react-icons/tfi";

interface ProductDeliveryInfoProps {
  delivery: boolean;
  returnDelivery: number;
  deliveryPostalCodes?: number[];
  selectedPostalCode?: string;
  setSelectedPostalCode?: (val: string) => void;
}

const ProductDeliveryInfo: React.FC<ProductDeliveryInfoProps> = ({
  delivery,
  returnDelivery,
  deliveryPostalCodes,
  selectedPostalCode,
  setSelectedPostalCode,
}) => {
  const [showInput, setShowInput] = useState(false);
  // استخدم state من الأب إذا متاح
  const [internalPostal, setInternalPostal] = useState("");
  const postal =
    selectedPostalCode !== undefined ? selectedPostalCode : internalPostal;
  const setPostal = setSelectedPostalCode || setInternalPostal;
  const [result, setResult] = useState<string | null>(null);

  const checkDelivery = (val: string) => {
    if (!val.match(/^\d+$/)) {
      setResult("Please enter a valid number");
      return;
    }
    const num = parseInt(val, 10);
    if (deliveryPostalCodes && deliveryPostalCodes.includes(num)) {
      setResult("🎉 Free Delivery Available!");
    } else {
      setResult("No Free Delivery for this area");
    }
  };

  // ✅ Structured Data (SEO)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    offers: {
      "@type": "Offer",
      availability: delivery
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "EG", // تقدر تغيّر البلد حسب مشروعك
        returnPolicyCategory:
          returnDelivery > 0
            ? "https://schema.org/MerchantReturnFiniteReturnWindow"
            : "https://schema.org/MerchantReturnNotPermitted",
        merchantReturnDays: returnDelivery > 0 ? returnDelivery : undefined,
      },
    },
  };

  return (
    <>
      <div className="border-2 mt-8 border-[#00000080] rounded-md w-full grid">
        {/* Delivery */}
        <div className="flex flex-col sm:flex-row items-center px-5 max-[1350px]:py-5 py-10 gap-5">
          <TbTruckDelivery className="text-5xl" />
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold">Delivery</h3>
            {delivery ? (
              <>
                <button
                  type="button"
                  className=" cursor-pointer text-black underline font-semibold text-left"
                  onClick={() => setShowInput((v) => !v)}
                >
                  Enter your postal code for Delivery Availability
                </button>
                {showInput && (
                  <div className="mt-2 flex flex-col gap-2">
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      className="border rounded px-2 py-1 w-40"
                      placeholder="Enter postal code"
                      value={postal}
                      onChange={(e) => {
                        setPostal(e.target.value.replace(/[^0-9]/g, ""));
                        setResult(null);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && postal) {
                          checkDelivery(postal);
                        }
                      }}
                    />
                    <button
                      className="bg-[#DB4444] text-white rounded px-3 py-1 text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() => checkDelivery(postal)}
                      disabled={!postal}
                    >
                      Check
                    </button>
                    {result && (
                      <span
                        aria-live="polite"
                        className={
                          result.includes("Free")
                            ? "text-green-600"
                            : "text-red-500"
                        }
                      >
                        {result}
                      </span>
                    )}
                  </div>
                )}
              </>
            ) : (
              <span className="text-red-500 font-semibold">Not Available</span>
            )}
          </div>
        </div>

        {/* Return Delivery */}
        <div className="border-t-2 flex-col sm:flex-row border-t-[#00000080] flex items-center px-5 max-[1350px]:py-5 py-10 gap-5">
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

      {/* ✅ Inject Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </>
  );
};

export default ProductDeliveryInfo;
