import Link from "next/link";
import { HiOutlineSparkles } from "react-icons/hi2";

const SAMPLE_ITEMS = [
  { name: "চাল", qty: "5 kg" },
  { name: "ডাল", qty: "2 kg" },
  { name: "তেল", qty: "2 L" },
  { name: "চিনি", qty: "1 kg" },
  { name: "লবণ", qty: "1 kg" },
];

export default function ComboBuilderPreview() {
  return (
    <section className="bg-dark-blue">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-orange" />
            <span className="font-inter text-sm font-medium text-white/60">
              সবচেয়ে জনপ্রিয় ফিচার
            </span>
          </div>
          <h2 className="font-poppins text-2xl font-semibold leading-snug text-white sm:text-3xl md:text-4xl">
            নিজের মতো করে বানান আপনার Combo
          </h2>
          <p className="font-inter mt-4 max-w-md text-base leading-relaxed text-white/70">
            আপনার প্রয়োজন অনুযায়ী পণ্য বেছে নিন, পরিমাণ ঠিক করুন এবং নিজের
            পছন্দের Grocery Combo তৈরি করুন।
          </p>
          <Link
            href="/combo-builder"
            className="font-poppins mt-8 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md sm:text-base"
          >
            <HiOutlineSparkles size={18} />
            Combo তৈরি করুন
          </Link>
        </div>

        {/* Combo builder mockup card */}
        <div className="rounded-3xl bg-white p-5 shadow-lg sm:p-7">
          <p className="font-poppins mb-4 text-sm font-semibold text-dark-blue/50">
            আপনার Combo
          </p>
          <ul className="font-inter divide-y divide-dark-blue/10">
            {SAMPLE_ITEMS.map((item) => (
              <li key={item.name} className="flex items-center justify-between py-3">
                <span className="text-dark-blue">{item.name}</span>
                <span className="rounded-full bg-light-cream px-3 py-1 text-sm font-medium text-dark-blue">
                  {item.qty}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center justify-between rounded-2xl bg-light-cream px-4 py-4">
            <span className="font-inter text-sm text-dark-blue/60">Estimated Total</span>
            <span className="font-poppins text-xl font-semibold text-dark-blue">৳1,250</span>
          </div>
        </div>
      </div>
    </section>
  );
}
