import SectionHeader from "../../common/SectionHeader/SectionHeader";
import { Button } from "@/components/ui/button";

function Categories() {
  //   const { index, next, prev, canNext, canPrev, visibleItems } =
  // useSlider(products);
  return (
    <section className="px-2">
      <div className=" mt-10 flex  justify-between w-full mb-5 md:mb-10">
        <SectionHeader
          label="Categories"
          title="Browse By Category"
          //   onPrevious={prev}
          //   onNext={next}
          //   canNext={!canNext}
          //   canPrev={!canPrev}
        />
      </div>
      
      <div className="w-full flex justify-center mt-5 md:mt-10">
        <Button> View All Products</Button>
      </div>
    </section>
  );
}
export default Categories;
