import Breadcrumbs from "@/components/common/Breadcrumbs";
import OurFeatures from "@/components/common/OurFeatures";
import { useTranslation } from "react-i18next";
import { FaStore, FaShippingFast, FaHeadset, FaAward } from "react-icons/fa";

function About() {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-5 py-10">
      <Breadcrumbs />
      <section className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center gap-10">
        <div className="flex flex-col items-center mb-8">
          <img
            src="/public/assets/SignImage.png"
            alt="Store Logo"
            className="w-32 h-32 rounded-full shadow-md mb-4"
          />
          <h1 className="text-4xl font-bold text-[#DB4444] mb-2">
            {t("aboutTitle")}
          </h1>
          <p className="text-gray-700 text-lg text-center max-w-2xl mb-4">
            {t("aboutDesc")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mb-10">
          <div className="flex flex-col items-center bg-[#F5F5F5] rounded-lg p-6 shadow">
            <FaStore className="text-[#DB4444] text-4xl mb-2" />
            <h2 className="font-semibold text-xl mb-1">{t("aboutStore")}</h2>
            <p className="text-gray-600 text-center">{t("aboutStoreDesc")}</p>
          </div>
          <div className="flex flex-col items-center bg-[#F5F5F5] rounded-lg p-6 shadow">
            <FaShippingFast className="text-[#DB4444] text-4xl mb-2" />
            <h2 className="font-semibold text-xl mb-1">{t("aboutShipping")}</h2>
            <p className="text-gray-600 text-center">
              {t("aboutShippingDesc")}
            </p>
          </div>
          <div className="flex flex-col items-center bg-[#F5F5F5] rounded-lg p-6 shadow">
            <FaHeadset className="text-[#DB4444] text-4xl mb-2" />
            <h2 className="font-semibold text-xl mb-1">{t("aboutSupport")}</h2>
            <p className="text-gray-600 text-center">{t("aboutSupportDesc")}</p>
          </div>
          <div className="flex flex-col items-center bg-[#F5F5F5] rounded-lg p-6 shadow">
            <FaAward className="text-[#DB4444] text-4xl mb-2" />
            <h2 className="font-semibold text-xl mb-1">{t("aboutQuality")}</h2>
            <p className="text-gray-600 text-center">{t("aboutQualityDesc")}</p>
          </div>
        </div>
        <OurFeatures />
      </section>
    </div>
  );
}

export default About;
