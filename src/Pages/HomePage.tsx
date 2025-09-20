import FlashSales from "@/components/HomePage/FlashSales";
import Hero from "@/components/HomePage/HeroSection.tsx/Hero";
import Categories from "@/components/HomePage/categories/Categories";
import BestProducts from "@/components/HomePage/bestselling/BestProducts";
import SpecialCard from "@/components/HomePage/special-product/SpecialCard";
import DiscoverAllProducts from "@/components/HomePage/allproduct/DiscoverAllProducts";
import Featured from "@/components/HomePage/newarrival/Featured";

function HomePage() {
  return (
    <>
      <div className="container mx-auto ">
        <div className="flex flex-col gap-15">
          <Hero />
          <div className="mx-4">
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
