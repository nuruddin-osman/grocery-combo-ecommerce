"use client";

import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

export default function CartButton({ count = 0, className = "" }) {
  return (
    <Link
      href="/cart"
      aria-label={`কার্ট, ${count} টি পণ্য`}
      className={`group relative flex h-9 w-9 items-center justify-center rounded-full text-dark-blue/70 transition-colors hover:bg-light-cream hover:text-dark-blue ${className}`}
    >
      <FiShoppingCart size={19} />
      {count > 0 && (
        <span className="font-inter absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-orange px-1 text-[10px] font-semibold leading-none text-white">
          {count > 9 ? "9+" : count}
        </span>
      )}
    </Link>
  );
}
