import FlashSales from "@/components/HomePage/FlashSales";
import Hero from "@/components/HomePage/HeroSection.tsx/Hero";

function HomePage() {
  return (
    <>
      <div className="flex flex-col gap-15 container mx-auto">
        <Hero />
        <FlashSales />
      </div>
    </>
  );
}

export default HomePage;
