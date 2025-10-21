type HeroImageProps = {
  slide: {
    id: number;
    title: string;
    mainImgSRC: string;
  };
};

export default function HeroImage({ slide }: HeroImageProps) {
  return (
    <div className="md:w-full max-h-fit flex items-center justify-center overflow-hidden">
      <img
        src={slide.mainImgSRC}
        alt={slide.title}
        className="object-contain w-md h-md transition-all duration-700"
      />
    </div>
  );
}
