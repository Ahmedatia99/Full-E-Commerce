type HeroImageProps = {
  slide: {
    id: number;
    title: string;
    desc: string;
    img: string;
  };
};

export default function HeroImage({ slide }: HeroImageProps) {
  return (
    <div className="w-full h-full  flex items-center justify-center overflow-hidden">
      <img
        src={slide.img}
        alt={slide.title}
        className="w-full h-full object-contain transition-all duration-700"
      />
    </div>
  );
}
