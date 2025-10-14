type HeroImageProps = {
  slide: {
    id: number;
    title: string;
    mainImgSRC: string;
  };
};

export default function HeroImage({ slide }: HeroImageProps) {
  return (
    <div className="w-full h-full  flex items-center justify-center overflow-hidden">
      <img
        src={slide.mainImgSRC}
        alt={slide.title}
        className="w-full h-full object-contain transition-all duration-700"
      />
    </div>
  );
}
