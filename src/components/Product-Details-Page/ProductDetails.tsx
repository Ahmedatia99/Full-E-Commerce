import Breadcrumbs from "./../common/Breadcrumbs";
import HeroProductDetails from "./HeroProductDetails";
import FlashSales from "./../Home-Page/FlashSales-Section/FlashSales";

const ProductDetails = () => {
  return (
    <div className="px-3 md:px-5">
      <Breadcrumbs />
      <HeroProductDetails />
      <FlashSales />
    </div>
  );
};

export default ProductDetails;
