type CarouselDotsProps = {
  slides: {
    id: number;
    title: string;
    desc: string;
    img: string;
  }[];
  current: number;
  setCurrent: (index: number) => void;
};

export default function CarouselDots({
  slides,
  current,
  setCurrent,
}: CarouselDotsProps) {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
      {slides.map((_, index) => (
        <span
          key={index}
          onClick={() => setCurrent(index)}
          className={`w-3 h-3 rounded-full cursor-pointer ${
            current === index ? "bg-red-500" : "bg-gray-400"
          }`}
        ></span>
      ))}
    </div>
  );
}
