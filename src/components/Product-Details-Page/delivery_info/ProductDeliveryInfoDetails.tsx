import React from "react";
import DeliverySection from "./DeliverySection";
import ReturnPolicySection from "./ReturnPolicySection";

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
  // Structured Data for SEO
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
        applicableCountry: "EG",
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
      <div className="border-2 mt-8 border-black rounded-md w-full grid">
        <DeliverySection
          delivery={delivery}
          deliveryPostalCodes={deliveryPostalCodes}
          selectedPostalCode={selectedPostalCode}
          setSelectedPostalCode={setSelectedPostalCode}
        />
        <ReturnPolicySection returnDelivery={returnDelivery} />
      </div>

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </>
  );
};

export default ProductDeliveryInfo;
