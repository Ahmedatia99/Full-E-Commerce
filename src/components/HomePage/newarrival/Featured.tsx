import SectionHeader from "@/components/common/SectionHeader";
import CategoryCard from "./CategoryCard";
import woman from "@/assets/images/fashion.png";
import ps5 from "@/assets/images/ps5.png";
import speakers from "@/assets/images/speakers.png";
import perfume from "@/assets/images/perfume.png";
function Featured() {
  return (
    <section className="my-20">
      <SectionHeader
        label="featured"
        title="Featured Products"
        className="mb-20"
      />

      <div className="flex max-sm:flex-col md:flex-row justify-center gap-2 md:gap-5 lg:gap-10 ">
        {/* Left big card */}
        <CategoryCard
          title="PlayStation 5"
          description="Black and White version of the PS5 coming out on sale."
          image={ps5}
          className=""
        />

        {/* Right side grid */}
        <div className="flex flex-col">
          <CategoryCard
            title="Women’s Collections"
            description="Featured woman collections that give you another vibe."
            image={woman}
          />

          <div className="flex mt-4 gap-4 items-center justify-center">
            <CategoryCard
              title="Speakers"
              description="Amazon wireless speakers"
              image={speakers}
              className="h-full"
            />
            <CategoryCard
              title="Perfume"
              description="GUCCI INTENSE OUD EDP"
              image={perfume}
              className="h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
