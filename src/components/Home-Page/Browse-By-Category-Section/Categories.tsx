import SectionHeader from "../../common/SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { LaptopMinimal, Camera, Headphones, Gamepad } from "lucide-react";
import { IoWatchOutline } from "react-icons/io5";
import { AiOutlineMobile } from "react-icons/ai";
import { Swiper as SwiperType } from "swiper";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

function Categories() {
  const { t } = useTranslation();

  const swiperRef = useRef<SwiperType | null>(null);
  const categories = [
    {
      id: 1,
      name: t("Phones"),
      icon: <AiOutlineMobile className="category-icon" />,
      navigate: "/phone",
    },
    {
      id: 2,
      name: t("Laptops"),
      icon: <LaptopMinimal className="category-icon" />,
      navigate: "/laptop",
    },
    {
      id: 3,
      name: t("Watches"),
      icon: <IoWatchOutline className="category-icon" />,
      navigate: "/watch",
    },
    {
      id: 4,
      name: t("Cameras"),
      icon: <Camera className="category-icon" />,
      navigate: "/camera",
    },
    {
      id: 5,
      name: t("Headphones"),
      icon: <Headphones className="category-icon" />,
      navigate: "/headphones",
    },
    {
      id: 6,
      name: t("Gaming"),
      icon: <Gamepad className="category-icon" />,
      navigate: "/gaming",
    },
    {
      id: 7,
      name: t("Accessories"),
      icon: <Camera className="category-icon" />,
      navigate: "/accessories",
    },
  ];

  return (
    <section className="px-2">
      <div className="mt-10 flex justify-between w-full mb-5 md:mb-10">
        <SectionHeader
          label={t("Categories")}
          title={t("Browse By Category")}
          swiperRef={swiperRef}
        />
      </div>

      <Swiper
        key={i18n.dir()}
        dir={i18n.dir()}

        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={16}
        slidesPerView={2} // 👈 الأساس للموبايل
        breakpoints={{
          480: { slidesPerView: 3, spaceBetween: 16 }, // موبايل كبير
          640: { slidesPerView: 4, spaceBetween: 20 }, // تابلت صغير
          1024: { slidesPerView: 5, spaceBetween: 24 }, // لابتوب
          1280: { slidesPerView: 6, spaceBetween: 28 }, // ديسكتوب كبير
        }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <div className="flex flex-col items-center justify-center border py-6 sm:py-8 md:py-10 px-6 sm:px-8 md:px-12 lg:px-16 rounded-lg hover:text-white hover:bg-main cursor-pointer transition">
              <div className="rounded-md flex items-center justify-center text-3xl sm:text-4xl md:text-5xl mb-2">
                {category.icon}
              </div>
              <span className="font-medium text-sm sm:text-base md:text-lg">
                {category.name}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Categories;
