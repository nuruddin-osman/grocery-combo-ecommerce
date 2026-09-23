// components/home/ComboBuilderPreview.jsx
import Link from "next/link";
import { RiSparklingLine, RiAddLine, RiSubtractLine } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi";

const COMBO_ITEMS = [
  { name: "চাল", qty: "5 kg" },
  { name: "ডাল", qty: "2 kg" },
  { name: "তেল", qty: "2 L" },
  { name: "চিনি", qty: "1 kg" },
  { name: "লবণ", qty: "1 kg" },
];

export default function ComboBuilderPreview() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-light-cream bg-cream">
          <div className="grid gap-0 lg:grid-cols-2">
            {/* Text side */}
            <div className="p-6 sm:p-10 lg:p-12">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange/10 px-3 py-1.5 font-inter text-xs font-semibold uppercase tracking-wider text-orange">
                <RiSparklingLine className="h-4 w-4" />
                সবচেয়ে জনপ্রিয়
              </span>

              <h2 className="font-poppins text-2xl font-bold leading-tight text-dark-blue sm:text-3xl lg:text-4xl">
                নিজের মতো করে বানান
                <br />
                আপনার <span className="text-orange">Combo</span>
              </h2>

              <p className="mt-4 font-inter text-base leading-relaxed text-dark-blue/70">
                আপনার প্রয়োজন অনুযায়ী পণ্য বেছে নিন, পরিমাণ ঠিক করুন এবং নিজের
                পছন্দের Grocery Combo তৈরি করুন।
              </p>

              <ul className="mt-6 space-y-2.5">
                {[
                  "পণ্য ও পরিমাণ নিজে বেছে নিন",
                  "তাৎক্ষণিক দাম দেখুন",
                  "এক ক্লিকে Cart-এ যোগ করুন",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 font-inter text-sm text-dark-blue/80"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange/15 text-orange">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/combo-builder"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-orange px-6 py-3.5 font-poppins text-base font-semibold text-white shadow-sm transition hover:bg-orange/90 hover:shadow-md active:scale-[0.98]"
              >
                <RiSparklingLine className="h-5 w-5" />
                Combo তৈরি করুন
              </Link>
            </div>

            {/* Interactive mockup */}
            <div className="border-t border-light-cream bg-white p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <div className="space-y-3">
                {COMBO_ITEMS.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-xl border border-light-cream bg-cream/50 px-4 py-3 transition hover:border-orange/40"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm">
                        🥫
                      </span>
                      <span className="font-poppins text-sm font-semibold text-dark-blue">
                        {item.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-inter text-sm font-medium text-dark-blue/70">
                        {item.qty}
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          className="flex h-6 w-6 items-center justify-center rounded-md border border-light-cream text-dark-blue/60 transition hover:border-orange hover:text-orange"
                          aria-label={`Decrease ${item.name}`}
                        >
                          <RiSubtractLine className="h-3.5 w-3.5" />
                        </button>
                        <button
                          className="flex h-6 w-6 items-center justify-center rounded-md border border-light-cream text-dark-blue/60 transition hover:border-orange hover:text-orange"
                          aria-label={`Increase ${item.name}`}
                        >
                          <RiAddLine className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Estimated total */}
              <div className="mt-6 flex items-center justify-between rounded-2xl bg-dark-blue px-5 py-4">
                <div>
                  <p className="font-inter text-xs uppercase tracking-wider text-white/60">
                    Estimated Total
                  </p>
                  <p className="font-poppins text-2xl font-bold text-white">
                    ৳১,২৫০
                  </p>
                </div>
                <button className="flex items-center gap-2 rounded-xl bg-orange px-4 py-3 font-poppins text-sm font-semibold text-white transition hover:bg-orange/90 active:scale-95">
                  <HiOutlineShoppingCart className="h-4 w-4" />
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
