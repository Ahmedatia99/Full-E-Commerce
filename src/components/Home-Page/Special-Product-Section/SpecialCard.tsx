import CountdownTimer from "../CountdownTimer/CountdownTimer";
import { Button } from "@/components/ui/button";
import specialImg from "@/assets/images/boombox.png";
import { useNavigate } from "react-router-dom";

function SpecialCard() {
  const navigate = useNavigate();
  const navigateSpecialProduct = () => {
    navigate("/product-details");
  };
  return (
    <section className="my-10 bg-black overflow-hidden">
      <div className="w-full flex flex-col-reverse md:flex-row justify-around items-center py-14 px-4 md:px-20 gap-5 md:gap-10">
        {/* texts */}
        <div className="flex flex-col justify-center items-start  gap-4 md:gap-8 ">
          <span className="text-[#00FF66] text-sm md:text-base">
            categories
          </span>
          <h2 className="font-semibold text-2xl md:text-3xl lg:text-6xl text-white max-w-full md:max-w-sm">
            Enhance Your Music Experience
          </h2>
          <CountdownTimer targetDate={new Date("2024-12-31T23:59:59")} />
          <Button
            size="sm"
            variant="small"
            className="bg-[#00FF66] mt-5"
            onClick={navigateSpecialProduct}
          >
            Buy Now
          </Button>
        </div>

        {/* image */}
        <div className="w-full md:w-auto flex justify-center">
          <img
            src={specialImg}
            alt="Special Product"
            loading="lazy"
            className="w-64 sm:w-80 md:w-full drop-shadow-[0_15px_40px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_20px_40px_rgba(255,255,255,0.7)] transition-shadow duration-300 rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default SpecialCard;
