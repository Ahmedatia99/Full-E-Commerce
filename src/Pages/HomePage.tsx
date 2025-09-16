import FlashSales from "@/components/HomePage/FlashSales";
import Hero from "@/components/HomePage/HeroSection.tsx/Hero";
import Categories from '../components/HomePage/categories/Categories';

function HomePage() {
  return (
    <>
      <div className="flex flex-col gap-15 container mx-auto">
        <Hero />
        <FlashSales />
        <Categories />
      </div>
    </>
  );
}

export default HomePage;
