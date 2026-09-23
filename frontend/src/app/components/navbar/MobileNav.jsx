"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { PiBasketFill } from "react-icons/pi";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import { NAV_LINKS } from "./navLinks";
import CartButton from "./CartButton";

const MOBILE_LINKS = [
  ...NAV_LINKS.slice(0, 4),
  { label: "Build Your Combo", href: "/combo-builder", isCta: true },
  ...NAV_LINKS.slice(4),
];

export default function MobileNav({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange text-white">
            <PiBasketFill size={16} />
          </span>
          <span className="font-poppins text-base font-semibold text-dark-blue">
            Sotter Bazar
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="পণ্য খুঁজুন"
            onClick={() => setSearchOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-dark-blue/70 hover:bg-light-cream hover:text-dark-blue"
          >
            <FiSearch size={18} />
          </button>
          <CartButton count={cartCount} />
          <button
            type="button"
            aria-label={menuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-dark-blue/70 hover:bg-light-cream hover:text-dark-blue"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Inline search row */}
      <AnimatePresence initial={false}>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t border-dark-blue/10 bg-cream px-4"
          >
            <div className="flex items-center gap-2 py-3">
              <FiSearch size={16} className="text-dark-blue/40" />
              <input
                type="text"
                autoFocus
                placeholder="পণ্য খুঁজুন..."
                className="font-inter w-full bg-transparent text-sm text-dark-blue placeholder:text-dark-blue/40 focus:outline-none"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Menu panel */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden border-t border-dark-blue/10 bg-white"
          >
            <ul className="font-inter flex flex-col px-2 py-2">
              {MOBILE_LINKS.map((link) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);

                if (link.isCta) {
                  return (
                    <li key={link.href} className="px-2 py-2">
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="font-poppins flex items-center justify-center gap-1.5 rounded-full bg-orange px-4 py-3 text-sm font-semibold text-white active:opacity-90"
                      >
                        <HiOutlineSparkles size={16} />
                        Build Your Combo
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center justify-between rounded-lg px-4 py-3 text-[15px] font-medium transition-colors ${
                        isActive
                          ? "bg-light-cream text-dark-blue"
                          : "text-dark-blue/70 active:bg-light-cream"
                      }`}
                    >
                      {link.label}
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-orange" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
