import CountdownTimer from "../CountdownTimer/CountdownTimer";
import { Button } from "@/components/ui/button";
import specialImg from "@/assets/images/boombox.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function SpecialCard() {
  const navigate = useNavigate();
  const navigateSpecialProduct = () => {
    navigate("/product-details");
  };
  const { t } = useTranslation();

  return (
    <section
      className="my-10 bg-black overflow-hidden"
      aria-labelledby="special-offer-title"
    >
      <div className="w-full flex flex-col-reverse md:flex-row justify-around items-center py-14 px-4 md:px-20 gap-5 md:gap-10">
        {/* Texts */}
        <div className="flex flex-col justify-center items-start gap-4 md:gap-8 max-w-lg">
          <span
            className="text-[#00FF66] text-xl font-semibold    tracking-wide"
            aria-label="Product category"
          >
            {t("Categories")}
          </span>

          <h2
            id="special-offer-title"
            className="font-semibold text-2xl md:text-3xl lg:text-5xl text-white leading-tight"
          >
            Enhance Your Music Experience
          </h2>

          {/* Accessible countdown timer */}
          <CountdownTimer
            targetDate={new Date(Date.now() + 1000 * 60 * 60 * 24)}
            className="mt-4"
          />

          {/* CTA Button */}
          <Button
            size="sm"
            variant="small"
            aria-label="Buy special product now"
            className="bg-[#00FF66] mt-5 hover:scale-110 hover:text-black transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#00FF66] focus:ring-offset-2 focus:ring-offset-black"
            onClick={navigateSpecialProduct}
          >
            {t("Buy Now")}
          </Button>
        </div>

        {/* Product Image */}
        <div className="w-full md:w-auto flex justify-center">
          <img
            src={specialImg}
            alt="Limited-time special music boombox product"
            loading="lazy"
            decoding="async"
            width={320}
            height={320}
            className="w-64 sm:w-80 md:w-[28rem] rounded-xl object-contain
             transition-all duration-500 ease-in-out
             drop-shadow-[0_15px_40px_rgba(255,255,255,0.4)]
             hover:drop-shadow-[0_25px_60px_rgba(0,255,102,0.6)]
             hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default SpecialCard;
