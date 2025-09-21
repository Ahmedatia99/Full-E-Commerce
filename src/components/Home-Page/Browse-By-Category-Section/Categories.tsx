import SectionHeader from "../../common/SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { LaptopMinimal, Camera, Headphones, Gamepad } from "lucide-react";
import { IoWatchOutline } from "react-icons/io5";
import { AiOutlineMobile } from "react-icons/ai";
import { Swiper as SwiperType } from "swiper";

function Categories() {
  const swiperRef = useRef<SwiperType | null>(null);
  const categories = [
    {
      id: 1,
      name: "phones",
      icon: <AiOutlineMobile className="category-icon" />,
      navigate: "/phone",
    },
    {
      id: 2,
      name: "phones",
      icon: <LaptopMinimal className="category-icon" />,
      navigate: "/phone",
    },
    {
      id: 3,
      name: "phones",
      icon: <IoWatchOutline className="category-icon" />,
      navigate: "/phone",
    },
    {
      id: 4,
      name: "phones",
      icon: <Camera className="category-icon" />,
      navigate: "/phone",
    },
    {
      id: 5,
      name: "phones",
      icon: <Headphones className="category-icon" />,
      navigate: "/phone",
    },
    {
      id: 6,
      name: "phones",
      icon: <Gamepad className="category-icon" />,
      navigate: "/phone",
    },
    {
      id: 7,
      name: "phones",
      icon: <Camera className="category-icon" />,
      navigate: "/phone",
    },
  ];
  return (
    <section className="px-2">
      <div className=" mt-10 flex  justify-between w-full mb-5 md:mb-10">
        <SectionHeader
          label="Categories"
          title="Browse By Category"
          swiperRef={swiperRef}
        />
      </div>
      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 6 },
        }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <div className="w-fit flex flex-col items-center justify-center border py-5 lg:py-10 px-10 lg:px-20 rounded-lg hover:text-white hover:bg-main cursor-pointer">
              <div className="rounded-md flex items-center justify-center">
                {category.icon}
              </div>
              <span className="font-semibold">{category.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
export default Categories;
