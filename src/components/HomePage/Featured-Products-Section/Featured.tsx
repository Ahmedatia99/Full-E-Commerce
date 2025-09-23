import SectionHeader from "@/components/common/SectionHeader";
import CategoryCard from "./CategoryCard";
import woman from "@/assets/images/fashion.png";
import ps5 from "@/assets/images/ps5.png";
import speakers from "@/assets/images/speakers.png";
import perfume from "@/assets/images/perfume.png";
import { useTranslation } from "react-i18next";
function Featured() {
  const { t } = useTranslation();
  return (
    <section className="my-20">
      <SectionHeader
        label={t("featured")}
        title={t("Featured Products")}
        className="mb-20"
      />

      <div className="grid grid-cols-1  md:grid-cols-2 gap-5 md:gap-8 ">
        {/* Left big card */}
        <CategoryCard
          title="PlayStation 5"
          description="Black and White version of the PS5 coming out on sale."
          image={ps5}
          className=""
        />

        {/* Right side grid */}
        <div className="grid grid-rows-2 gap-5 md:gap-8">
          <CategoryCard
            title="Women’s Collections"
            description="Featured woman collections that give you another vibe."
            image={woman}
          />

          <div className="grid grid-cols-2 max-[400px]:grid-cols-1 gap-5 md:gap-8">
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
