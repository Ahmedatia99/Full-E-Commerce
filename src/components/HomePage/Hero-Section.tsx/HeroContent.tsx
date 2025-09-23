import { useTranslation } from "react-i18next";
import { GoArrowRight } from "react-icons/go";

type HeroContentProps = {
  slide: {
    id: number;
    title: string;
    desc: string;
    img: string;
  };
};

export default function HeroContent({ slide }: HeroContentProps) {
  const { t } = useTranslation();
  return (
    <div className="z-10 text-center md:text-left mb-6 md:mb-0">
      <p className="text-xl flex items-center justify-center md:justify-start gap-6">
        <span className="text-white text-6xl"></span> {t(slide.title)}
      </p>
      <h1 className="text-3xl sm:text-4xl xl:text-6xl font-bold mt-3 leading-snug">
        {t(slide.desc)}
      </h1>
      <button
        className=" cursor-pointer group mt-5 md:mb-0 mb-5 flex items-center gap-2  py-2 mx-auto md:mx-0 
             border-b-2 border-white text-white font-medium 
             transition-all duration-300 ease-in-out
             hover:text-[#DB4444] hover:border-yellow-300"
      >
        {t("shopNow")}
        <GoArrowRight className="text-2xl transform transition-transform duration-300 group-hover:translate-x-2" />
      </button>
    </div>
  );
}
