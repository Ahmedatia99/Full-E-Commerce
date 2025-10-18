// useNavBarLogic.ts
// Handles navbar show/hide on scroll with debounce

import { useRef, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export function useNavBarLogic(scrollThreshold = 300, debounceDelay = 100) {
  const { scrollY } = useScroll();
  const navRef = useRef<HTMLElement | null>(null);
  const lastScrollY = useRef(0);
  const animationStarted = useRef(false);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  useMotionValueEvent(scrollY, "change", (currentY: number) => {
    const diff = currentY - lastScrollY.current;
    lastScrollY.current = currentY;

    if (!navRef.current) return;

    // Start animation after threshold
    if (currentY > scrollThreshold) animationStarted.current = true;
    else {
      animationStarted.current = false;
      navRef.current.style.transform = "translateY(0)";
      return;
    }

    if (!animationStarted.current || Math.abs(diff) < 5) return;

    // Debounce scroll reaction
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      navRef.current!.style.transform =
        diff > 0 ? "translateY(-100%)" : "translateY(0)";
    }, debounceDelay);
  });

  // Add smooth transition
  useEffect(() => {
    if (navRef.current)
      navRef.current.style.transition = "transform 0.4s ease-in-out";
  }, []);

  return { navRef };
}
