"use client";

import { useEffect, useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar({ cartCount = 0 }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled
          ? "border-b border-dark-blue/10 shadow-sm"
          : "border-b border-transparent"
      }`}
    >
      <DesktopNav cartCount={cartCount} />
      <MobileNav cartCount={cartCount} />
    </header>
  );
}
