// components/home/ProductCard.jsx
"use client";

import { useState } from "react";
import { HiOutlineStar, HiOutlineShoppingCart } from "react-icons/hi";
import { RiAddLine, RiCheckLine } from "react-icons/ri";

export default function ProductCard({ product }) {
  const [added, setAdded] = useState(false);
  const discount = product.price - product.discountPrice;
  const discountPercent = Math.round((discount / product.price) * 100);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-light-cream bg-white transition hover:-translate-y-1 hover:shadow-md">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-cream">
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-4xl sm:text-5xl">🛒</span>
        </div>
        {discountPercent > 0 && (
          <span className="absolute left-2 top-2 rounded-lg bg-orange px-2 py-1 font-inter text-[10px] font-bold text-white sm:text-xs">
            -{discountPercent}%
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <h3 className="font-poppins text-sm font-semibold leading-snug text-dark-blue transition group-hover:text-orange sm:text-base">
          {product.name}
        </h3>
        <p className="mt-0.5 font-inter text-xs text-dark-blue/50">
          {product.unit}
        </p>

        {/* Rating */}
        <div className="mt-1.5 flex items-center gap-1">
          <div className="flex text-orange">
            {Array.from({ length: 5 }).map((_, i) => (
              <HiOutlineStar
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < product.rating ? "fill-orange" : "fill-transparent"
                }`}
              />
            ))}
          </div>
          <span className="font-inter text-[10px] text-dark-blue/50 sm:text-xs">
            ({product.rating}.0)
          </span>
        </div>

        {/* Price */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-poppins text-base font-bold text-dark-blue sm:text-lg">
            ৳{product.discountPrice}
          </span>
          {discount > 0 && (
            <span className="font-inter text-xs text-dark-blue/40 line-through">
              ৳{product.price}
            </span>
          )}
        </div>

        {/* Add to cart */}
        <button
          onClick={handleAdd}
          className={`mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 font-poppins text-xs font-semibold transition active:scale-[0.97] sm:text-sm ${
            added
              ? "bg-orange text-white"
              : "bg-dark-blue text-white hover:bg-dark-blue/90"
          }`}
        >
          {added ? (
            <>
              <RiCheckLine className="h-4 w-4" />
              যোগ হয়েছে
            </>
          ) : (
            <>
              <HiOutlineShoppingCart className="h-4 w-4" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
