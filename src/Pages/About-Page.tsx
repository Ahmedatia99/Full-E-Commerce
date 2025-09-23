import Breadcrumbs from "@/components/common/Breadcrumbs";
import OurFeatures from "@/components/common/OurFeatures";
import { useTranslation } from "react-i18next";
import { FaStore, FaShippingFast, FaHeadset, FaAward } from "react-icons/fa";

const aboutCards = [
  {
    id: 1,
    icon: FaStore,
    titleKey: "aboutStore",
    descKey: "aboutStoreDesc",
  },
  {
    id: 2,
    icon: FaShippingFast,
    titleKey: "aboutShipping",
    descKey: "aboutShippingDesc",
  },
  {
    id: 3,
    icon: FaHeadset,
    titleKey: "aboutSupport",
    descKey: "aboutSupportDesc",
  },
  {
    id: 4,
    icon: FaAward,
    titleKey: "aboutQuality",
    descKey: "aboutQualityDesc",
  },
];

function About() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-5 py-10">
      <Breadcrumbs />

      <section
        className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center gap-10"
        aria-labelledby="about-title"
      >
        {/* صورة وعنوان ووصف */}
        <div className="flex flex-col items-center mb-8 text-center">
          <img
            src="https://res.cloudinary.com/dtf9brzuu/image/upload/v1758581616/eCommerce_Platform_xwskgu.png"
            alt={t("aboutTitle")}
            className="w-40 h-40 object-cover rounded-full shadow-xl mb-10"
            loading="lazy"
          />
          <h1 id="about-title" className="text-4xl font-bold text-black mb-10">
            {t("aboutTitle")}
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mb-4">
            {t("aboutDesc")}
          </p>
        </div>

        {/* الكروت */}
        <section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mb-10"
          aria-label={t("aboutHighlights")}
        >
          {aboutCards.map(({ id, icon: Icon, titleKey, descKey }) => (
            <article
              key={id}
              className="flex flex-col hover:scale-105 transition duration-300 items-center bg-[#F5F5F5] rounded-lg p-6 shadow text-center"
              role="region"
              aria-labelledby={`about-card-${id}`}
            >
              <Icon
                className="text-[#DB4444] text-4xl mb-2"
                aria-hidden="true"
              />
              <h2
                id={`about-card-${id}`}
                className="font-semibold text-xl mb-1"
              >
                {t(titleKey)}
              </h2>
              <p className="text-gray-600">{t(descKey)}</p>
            </article>
          ))}
        </section>

        <OurFeatures />
      </section>
    </div>
  );
}

export default About;
