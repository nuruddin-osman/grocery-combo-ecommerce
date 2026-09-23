import Link from "next/link";
import { HiOutlineSparkles, HiOutlineShoppingBag } from "react-icons/hi2";

export default function FinalCTA() {
  return (
    <section className="bg-dark-blue">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 md:py-24 lg:px-8">
        <h2 className="font-poppins text-2xl font-semibold leading-snug text-white sm:text-3xl md:text-4xl">
          আজকের বাজারটা নিজের মতো করে সাজান
        </h2>
        <p className="font-inter mx-auto mt-4 max-w-md text-base leading-relaxed text-white/70">
          প্রয়োজনীয় পণ্য বেছে নিয়ে তৈরি করুন আপনার নিজের Grocery Combo।
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/combo-builder"
            className="font-poppins flex items-center gap-2 rounded-full bg-orange px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md sm:text-base"
          >
            <HiOutlineSparkles size={18} />
            নিজের Combo তৈরি করুন
          </Link>
          <Link
            href="/products"
            className="font-poppins flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:text-base"
          >
            <HiOutlineShoppingBag size={18} />
            পণ্য দেখুন
          </Link>
        </div>
      </div>
    </section>
  );
}
