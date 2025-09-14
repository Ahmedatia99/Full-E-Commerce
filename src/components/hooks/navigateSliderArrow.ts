import { useState } from "react";

export function useSlider<T>(items: T[], perView: number = 1) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) =>
      prev < items.length - perView ? prev + 1 : prev
    );
  };

  const prev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return {
    index,
    next,
    prev,
    canNext: index < items.length - perView,
    canPrev: index > 0,
    visibleItems: items.slice(index, index + perView),
  };
} 
