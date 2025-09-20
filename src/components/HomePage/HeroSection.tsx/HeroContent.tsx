import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

type HeroContentProps = {
  slide: {
    id: number;
    title: string;
    desc: string;
    img: string;
  };
};

export default function HeroContent({ slide }: HeroContentProps) {
  const { t, i18n } = useTranslation();
  return (
    <div className="z-10 text-center md:text-left mb-6 md:mb-0">
      <p className="text-sm flex items-center justify-center md:justify-start gap-2">
        <span className="text-white text-lg"></span> {t(slide.title)}
      </p>
      <h1 className="text-3xl md:text-4xl font-bold mt-3 leading-snug">
        {t(slide.desc)}
      </h1>
      <button className="mt-6 flex items-center gap-2 px-5 py-2 bg-white text-black rounded cursor-pointer mx-auto md:mx-0">
        {t("shopNow")} <ChevronRight size={16} />
      </button>
    </div>
  );
}
