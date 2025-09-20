import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export function useSlider<T>(items: T[]) {
  const isMobile = useMediaQuery({ maxWidth: 639 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const perView = isMobile ? 1 : isTablet ? 2 : isDesktop ? 5 : 1;

  const [index, setIndex] = useState(0);

  // reset when screen is changing

  useEffect(() => {
    setIndex(0);
  }, [perView]);

  // Go to next slide
  const next = () => {
    setIndex((prev) => (prev < items.length - perView ? prev + 1 : prev));
  };

  // Go to previous slide
  const prev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return {
    index,
    perView,
    next,
    prev,
    canNext: index < items.length - perView,
    canPrev: index > 0,
    visibleItems: items.slice(index, index + perView),
  };
}
