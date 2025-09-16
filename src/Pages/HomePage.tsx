import FlashSales from "@/components/HomePage/FlashSales";
import Hero from "@/components/HomePage/HeroSection.tsx/Hero";

function HomePage() {
  return (
    <>
      <div className="container mx-auto ">
        <div className="flex flex-col gap-15">
          <Hero />
          <div className="mx-4">
            <FlashSales />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
