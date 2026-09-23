// components/home/FinalCTA.jsx
import Link from "next/link";
import { RiSparklingLine, RiArrowRightLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function FinalCTA() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl bg-dark-blue px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-16">
          {/* Decorative subtle shapes */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange/10" />
          <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-orange/5" />

          <div className="relative">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-inter text-xs font-semibold uppercase tracking-wider text-orange">
              <RiSparklingLine className="h-4 w-4" />
              শুরু করুন আজই
            </span>

            <h2 className="font-poppins text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              আজকের বাজারটা নিজের মতো করে সাজান
            </h2>

            <p className="mx-auto mt-4 max-w-xl font-inter text-base leading-relaxed text-white/70">
              প্রয়োজনীয় পণ্য বেছে নিয়ে তৈরি করুন আপনার নিজের Grocery Combo।
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/combo-builder"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange px-6 py-3.5 font-poppins text-base font-semibold text-white shadow-sm transition hover:bg-orange/90 hover:shadow-md active:scale-[0.98] sm:w-auto"
              >
                <RiSparklingLine className="h-5 w-5" />
                নিজের Combo তৈরি করুন
                <RiArrowRightLine className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/products"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/20 bg-transparent px-6 py-3.5 font-poppins text-base font-semibold text-white transition hover:border-orange hover:text-orange active:scale-[0.98] sm:w-auto"
              >
                <HiOutlineShoppingBag className="h-5 w-5" />
                পণ্য দেখুন
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
