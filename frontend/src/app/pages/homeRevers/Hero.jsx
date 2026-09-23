// components/home/Hero.jsx
import Link from "next/link";
import { RiSparklingLine, RiArrowRightLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-cream px-4 py-1.5 font-inter text-xs font-semibold uppercase tracking-wider text-orange">
              <RiSparklingLine className="h-4 w-4" />
              নিজের মতো করে বাজার
            </span>

            <h1 className="font-poppins text-3xl font-bold leading-tight tracking-tight text-dark-blue sm:text-4xl lg:text-5xl">
              আপনার প্রয়োজনের বাজার,
              <br />
              <span className="text-orange">এখন আরও সহজ</span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl font-inter text-base leading-relaxed text-dark-blue/70 sm:text-lg lg:mx-0">
              নিত্যপ্রয়োজনীয় পণ্য কিনুন সহজে। পছন্দের কম্বো নিন অথবা নিজের মতো
              করে তৈরি করুন আপনার বাজারের প্যাক।
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
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
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-light-cream bg-white px-6 py-3.5 font-poppins text-base font-semibold text-dark-blue transition hover:border-orange hover:text-orange active:scale-[0.98] sm:w-auto"
              >
                <HiOutlineShoppingBag className="h-5 w-5" />
                পণ্য দেখুন
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-white bg-light-cream"
                    />
                  ))}
                </div>
                <span className="font-inter text-sm text-dark-blue/70">
                  ৫০০+ সন্তুষ্ট ক্রেতা
                </span>
              </div>
              <div className="h-6 w-px bg-light-cream" />
              <span className="font-inter text-sm font-semibold text-orange">
                ক্যাশ অন ডেলিভারি
              </span>
            </div>
          </div>

          {/* Visual area */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-lg">
              {/* Replace this whole inner block with <Image /> later */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange/10 to-light-cream/40" />
              <div className="absolute inset-4 overflow-hidden rounded-2xl border border-light-cream bg-white shadow-lg">
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cream to-light-cream/50">
                  <div className="text-center">
                    <span className="text-6xl">🛒</span>
                    <p className="mt-2 font-inter text-sm text-dark-blue/50">
                      Hero Image
                    </p>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 -left-3 rounded-2xl border border-light-cream bg-white px-4 py-3 shadow-lg sm:-bottom-4 sm:-left-4">
                <p className="font-inter text-[10px] uppercase tracking-wider text-dark-blue/50">
                  Combo Starting From
                </p>
                <p className="font-poppins text-xl font-bold text-orange">
                  ৳৮৯৯
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
