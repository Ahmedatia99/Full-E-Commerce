import Product_Card from "@/components/common/Product_Card/Product_Card";
import SectionHeader from "@/components/common/SectionHeader";
import { useSlider } from "@/hooks/navigateSliderArrow";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { mockProducts } from "@/components/Product-Details-Page/mockProduct";
import HeroProductDetails from "@/components/Product-Details-Page/HeroProductDetails";

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
