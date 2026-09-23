// components/home/HowItWorks.jsx
import {
  HiOutlineShoppingBag,
  HiOutlineShoppingCart,
  HiOutlineLocationMarker,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { RiArrowDownLine } from "react-icons/ri";

const STEPS = [
  {
    num: "01",
    title: "পণ্য বেছে নিন",
    desc: "পছন্দের পণ্য বা কম্বো সিলেক্ট করুন",
    icon: HiOutlineShoppingBag,
  },
  {
    num: "02",
    title: "Cart-এ যোগ করুন",
    desc: "পণ্য ও পরিমাণ ঠিক করে Cart-এ নিন",
    icon: HiOutlineShoppingCart,
  },
  {
    num: "03",
    title: "ঠিকানা দিন",
    desc: "ডেলিভারির সঠিক ঠিকানা দিন",
    icon: HiOutlineLocationMarker,
  },
  {
    num: "04",
    title: "অর্ডার সম্পন্ন করুন",
    desc: "ক্যাশ অন ডেলিভারিতে অর্ডার নিশ্চিত করুন",
    icon: HiOutlineCheckCircle,
  },
];

const CUSTOM_FLOW = [
  "পণ্য বেছে নিন",
  "পরিমাণ ঠিক করুন",
  "Combo তৈরি করুন",
  "অর্ডার করুন",
];

export default function HowItWorks() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <h2 className="font-poppins text-2xl font-bold text-dark-blue sm:text-3xl">
            কীভাবে অর্ডার করবেন?
          </h2>
          <p className="mx-auto mt-2 max-w-md font-inter text-sm text-dark-blue/60">
            মাত্র ৪টি সহজ ধাপে অর্ডার সম্পন্ন করুন
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="group relative rounded-2xl border border-light-cream bg-white p-6 transition hover:-translate-y-1 hover:border-orange hover:shadow-md"
            >
              <span className="font-poppins text-3xl font-bold text-orange/20 transition group-hover:text-orange/40">
                {step.num}
              </span>
              <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-orange transition group-hover:bg-orange group-hover:text-white">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-poppins text-base font-semibold text-dark-blue">
                {step.title}
              </h3>
              <p className="mt-1 font-inter text-sm leading-relaxed text-dark-blue/60">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Custom combo flow */}
        <div className="mt-12 rounded-2xl border border-light-cream bg-white p-6 sm:mt-16 sm:p-8">
          <h3 className="mb-6 text-center font-poppins text-lg font-semibold text-dark-blue">
            Custom Combo তৈরি করার ধাপ
          </h3>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-0">
            {CUSTOM_FLOW.map((step, i) => (
              <div key={step} className="flex items-center gap-3 sm:gap-0">
                <span className="flex items-center gap-2 rounded-xl bg-cream px-4 py-2.5 font-inter text-sm font-medium text-dark-blue">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange font-poppins text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                  {step}
                </span>
                {i < CUSTOM_FLOW.length - 1 && (
                  <RiArrowDownLine className="h-4 w-4 text-orange sm:mx-2 sm:rotate-[-90deg]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
