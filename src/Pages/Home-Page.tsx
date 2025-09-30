import Hero from "@/components/Home-Page/Hero-Section.tsx/Hero";
import Categories from "@/components/Home-Page/Browse-By-Category-Section/Categories";
import BestProducts from "@/components/Home-Page/Best-Selling-Products-Section/BestProducts";
import SpecialCard from "@/components/Home-Page/Special-Product-Section/SpecialCard";
import DiscoverAllProducts from "@/components/Home-Page/Explore-Our-Products-Section/DiscoverAllProducts";
import Featured from "@/components/Home-Page/Featured-Products-Section/Featured";
import FlashSales from "@/components/Home-Page/FlashSales-Section/FlashSales";

function HomePage() {
  return (
    <>
      <div className="md:container flex flex-col gap-15 mx-auto ">
        <Hero  />
        <div className="flex container mx-auto flex-col gap-15">
          <div className="mx-3">
            <FlashSales />
            <Categories />
            <BestProducts />
            <SpecialCard />
            <DiscoverAllProducts />
            <Featured />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
