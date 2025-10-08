import { useRef, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import BurgerNavMenu from "./BurgerNavMenu";
import Logo from "./Logo";
import NavActions from "./NavActions";
import NavMenu from "./NavMenu";
import Search_Input from "./Search_Input";
import Header from "../Header";

const NavBar: React.FC = () => {
  const { scrollY } = useScroll(); // Track scroll position
  const navRef = useRef<HTMLElement | null>(null);
  const headerWrapperRef = useRef<HTMLDivElement | null>(null);

  const lastScrollY = useRef(0); // Store last scroll position
  const scrollThreshold = 300; // Scroll distance before animations start
  const animationStarted = useRef(false); // Prevent animation before threshold

  useMotionValueEvent(scrollY, "change", (currentY: number) => {
    const prevY = lastScrollY.current;
    const diff = currentY - prevY;
    lastScrollY.current = currentY;

    // Handle Header visibility
    if (headerWrapperRef.current) {
      const headerEl = headerWrapperRef.current;

      if (currentY > scrollThreshold) {
        // Hide Header (slide up)
        headerEl.style.opacity = "0";
        headerEl.style.transform = "translateY(-100%)";
        headerEl.style.pointerEvents = "none";
        headerEl.style.position = "absolute";
      } else {
        // Show Header (slide down)
        headerEl.style.opacity = "1";
        headerEl.style.transform = "translateY(0)";
        headerEl.style.pointerEvents = "auto";
        headerEl.style.position = "relative";
      }
    }

    // Handle Navbar hide/show when scrolling
    if (navRef.current) {
      if (currentY > scrollThreshold) {
        animationStarted.current = true;
      } else {
        animationStarted.current = false;
        navRef.current.style.transform = "translateY(0)";
        return;
      }

      if (!animationStarted.current) return;
      if (Math.abs(diff) < 5) return; // Ignore small scroll movements

      if (diff > 0) {
        // Scrolling down → hide navbar
        navRef.current.style.transform = "translateY(-100%)";
      } else {
        // Scrolling up → show navbar
        navRef.current.style.transform = "translateY(0)";
      }
    }
  });

  useEffect(() => {
    // Add smooth transition for navbar
    if (navRef.current) {
      navRef.current.style.transition = "transform 0.4s ease-in-out";
    }

    // Add smooth transition for header
    if (headerWrapperRef.current) {
      headerWrapperRef.current.style.transition =
        "transform 0.5s ease, opacity 0.4s ease";
    }
  }, []);

  return (
    <motion.nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 border-b border-black bg-white bg-opacity-80 backdrop-blur-md"
    >
      {/* Header section slides up/down on scroll */}
      <div
        ref={headerWrapperRef}
        className="transition-all duration-500 ease-in-out"
      >
        <Header />
      </div>

      {/* Main navbar content */}
      <div className="container mx-auto">
        <Search_Input className="sm:hidden" />

        <div className="flex justify-between py-5 items-center px-3">
          <div className="flex gap-5 items-center">
            <BurgerNavMenu className="lg:hidden" />
            <Logo />
          </div>

          <NavMenu className="hidden lg:flex" />
          <NavActions />
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
