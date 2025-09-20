import Product_Card from "@/components/common/Product_Card/Product_Card";
import HeroProductDetails from "@/components/common/ProductDetails/HeroProductDetails";
import SectionHeader from "@/components/common/SectionHeader";
import { mockProducts } from "../components/common/ProductDetails/mockProduct";
import { useSlider } from "@/components/hooks/navigateSliderArrow";
import Breadcrumbs from "@/components/common/Breadcrumbs";

function ProductsDetails() {
  const dataDetails = mockProducts;
  const { index, next, prev, canNext, canPrev, visibleItems } =
    useSlider(dataDetails);
  return (
    <div className="container   mx-auto flex flex-col gap-10 ">
      <Breadcrumbs />
      <HeroProductDetails />
      <SectionHeader
        label="Today's"
        title="Flash Sales"
        onPrevious={prev}
        onNext={next}
        canNext={!canNext}
        canPrev={!canPrev}
      ></SectionHeader>
      <Product_Card className="  " products={visibleItems} index={index} />
    </div>
  );
}

export default ProductsDetails;
