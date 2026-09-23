import Link from "next/link";
import { HiOutlineSparkles, HiOutlineShoppingBag } from "react-icons/hi2";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <div>
          <h1 className="font-poppins text-3xl font-semibold leading-tight text-dark-blue sm:text-4xl md:text-5xl">
            আপনার প্রয়োজনের বাজার,
            <br />
            এখন আরও সহজ
          </h1>
          <p className="font-inter mt-5 max-w-md text-base leading-relaxed text-dark-blue/70 md:text-lg">
            নিত্যপ্রয়োজনীয় পণ্য কিনুন সহজে। পছন্দের কম্বো নিন অথবা নিজের
            মতো করে তৈরি করুন আপনার বাজারের প্যাক।
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/combo-builder"
              className="font-poppins flex items-center gap-2 rounded-full bg-orange px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 sm:text-base"
            >
              <HiOutlineSparkles size={18} />
              নিজের Combo তৈরি করুন
            </Link>
            <Link
              href="/products"
              className="font-poppins flex items-center gap-2 rounded-full border border-dark-blue/15 bg-white px-6 py-3.5 text-sm font-semibold text-dark-blue transition-colors hover:bg-light-cream sm:text-base"
            >
              <HiOutlineShoppingBag size={18} />
              পণ্য দেখুন
            </Link>
          </div>
        </div>

        {/* Replaceable visual area */}
        <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl bg-light-cream lg:aspect-square">
          <img
            src="/images/hero-groceries.jpg"
            alt="তাজা মুদি পণ্যের ঝুড়ি"
            className="h-full w-full object-cover"
          />
          <div className="font-poppins absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white/90 px-4 py-3 shadow-sm backdrop-blur sm:bottom-6 sm:left-6 sm:right-auto">
            <div>
              <p className="text-xs text-dark-blue/60">Estimated Total</p>
              <p className="text-lg font-semibold text-dark-blue">৳1,250</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
