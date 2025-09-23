import Hero from "@/components/HomePage/Hero-Section.tsx/Hero";
import Categories from "@/components/HomePage/Browse-By-Category-Section/Categories";
import BestProducts from "@/components/HomePage/Best-Selling-Products-Section/BestProducts";
import SpecialCard from "@/components/HomePage/Special-Product-Section/SpecialCard";
import DiscoverAllProducts from "@/components/HomePage/Explore-Our-Products-Section/DiscoverAllProducts";
import Featured from "@/components/HomePage/Featured-Products-Section/Featured";
import FlashSales from "@/components/HomePage/FlashSales-Section/FlashSales";

function HomePage() {
  return (
    <>
      <div className="container mx-auto ">
        <div className="flex flex-col gap-15">
          <Hero />
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
