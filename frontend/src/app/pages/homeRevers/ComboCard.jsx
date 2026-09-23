// components/home/ComboCard.jsx
import Link from "next/link";
import { HiOutlineShoppingCart, HiOutlineCube } from "react-icons/hi";

export default function ComboCard({ combo }) {
  const savings = combo.originalPrice - combo.comboPrice;
  const savingsPercent = Math.round((savings / combo.originalPrice) * 100);

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-light-cream bg-white transition hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-5xl">📦</span>
        </div>
        {combo.tag && (
          <span className="absolute left-3 top-3 rounded-lg bg-orange px-2.5 py-1 font-inter text-[10px] font-bold uppercase tracking-wide text-white">
            {combo.tag}
          </span>
        )}
        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-lg bg-white/90 px-2 py-1 font-inter text-[10px] font-semibold text-dark-blue backdrop-blur-sm">
          <HiOutlineCube className="h-3 w-3" />
          {combo.productCount} items
        </span>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-poppins text-base font-semibold text-dark-blue transition group-hover:text-orange">
          {combo.name}
        </h3>

        {/* Pricing */}
        <div className="mt-3 flex items-end gap-2">
          <span className="font-poppins text-xl font-bold text-dark-blue">
            ৳{combo.comboPrice}
          </span>
          <span className="font-inter text-sm text-dark-blue/40 line-through">
            ৳{combo.originalPrice}
          </span>
        </div>

        {/* Savings badge */}
        <span className="mt-2 inline-flex w-fit items-center rounded-lg bg-orange/10 px-2.5 py-1 font-inter text-xs font-semibold text-orange">
          সাশ্রয় ৳{savings} ({savingsPercent}%)
        </span>

        {/* CTA */}
        <Link
          href={`/combos/${combo.id}`}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-dark-blue px-4 py-3 font-poppins text-sm font-semibold text-white transition hover:bg-dark-blue/90 active:scale-[0.97]"
        >
          <HiOutlineShoppingCart className="h-4 w-4" />
          View Combo
        </Link>
      </div>
    </div>
  );
}
