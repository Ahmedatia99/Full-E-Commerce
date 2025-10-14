"use client";

import { useEffect, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Header from "../Header";

function HeaderWrapper() {
  const { scrollY } = useScroll();
  const headerRef = useRef<HTMLDivElement | null>(null);
  const scrollThreshold = 300;

  useMotionValueEvent(scrollY, "change", (currentY: number) => {
    const headerEl = headerRef.current;
    if (!headerEl) return;

    if (currentY > scrollThreshold) {
      // Hide the header smoothly when scrolled beyond threshold
      headerEl.style.opacity = "0";
      headerEl.style.transform = "translateY(-100%)";
      headerEl.style.pointerEvents = "none";
      headerEl.style.position = "absolute";
      headerEl.style.top = "0";
      headerEl.style.left = "0";
      headerEl.style.width = "100%";
    } else {
      // Show the header again when above threshold
      headerEl.style.opacity = "1";
      headerEl.style.transform = "translateY(0)";
      headerEl.style.pointerEvents = "auto";
      headerEl.style.position = "relative";
      headerEl.style.top = "";
      headerEl.style.left = "";
      headerEl.style.width = "";
    }
  });

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.transition =
        "transform 0.5s ease, opacity 0.4s ease";
    }
  }, []);

  return (
    <header
      ref={headerRef}
      role="banner"
      aria-label="Website header"
      className="transition-all duration-500 ease-in-out w-full"
    >
      {/* Main Header Content */}
      <Header />
    </header>
  );
}

export default HeaderWrapper;
