"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiBasketFill } from "react-icons/pi";
import { HiOutlineSparkles } from "react-icons/hi2";
import { NAV_LINKS } from "./navLinks";
import SearchBar from "./SearchBar";
import CartButton from "./CartButton";

export default function DesktopNav({ cartCount = 0 }) {
  const pathname = usePathname();

  return (
    <div className="mx-auto hidden max-w-7xl items-center justify-between px-6 py-3 lg:flex">
      {/* Logo */}
      <Link href="/" className="flex shrink-0 items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange text-white">
          <PiBasketFill size={19} />
        </span>
        <span className="font-poppins text-lg font-semibold tracking-tight text-dark-blue">
          Sotter Bazar
        </span>
      </Link>

      {/* Center nav */}
      <ul className="font-inter flex items-center gap-1">
        {NAV_LINKS.map((link) => {
          const isActive =
            link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative flex flex-col items-center px-3 py-2 text-[15px] font-medium text-dark-blue/70 transition-colors hover:text-dark-blue"
              >
                {link.label}
                <span
                  className={`mt-1 h-1 w-1 rounded-full bg-orange transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Right actions */}
      <div className="flex shrink-0 items-center gap-1">
        <SearchBar />
        <CartButton count={cartCount} />
        <Link
          href="/combo-builder"
          className="font-poppins ml-2 flex items-center gap-1.5 rounded-full bg-orange px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
        >
          <HiOutlineSparkles size={16} />
          Build Your Combo
        </Link>
      </div>
    </div>
  );
}
