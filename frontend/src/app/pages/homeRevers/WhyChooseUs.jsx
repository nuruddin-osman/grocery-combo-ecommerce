// components/home/WhyChooseUs.jsx
import {
  HiOutlineBadgeCheck,
  HiOutlineLightningBolt,
  HiOutlineAdjustments,
  HiOutlineTruck,
} from "react-icons/hi";

const FEATURES = [
  {
    title: "মানসম্মত পণ্য",
    desc: "সরাসরি যাচাই করা পণ্য, নিশ্চিত মান",
    icon: HiOutlineBadgeCheck,
  },
  {
    title: "সহজ অর্ডার",
    desc: "মাত্র কয়েক ক্লিকে অর্ডার সম্পন্ন",
    icon: HiOutlineLightningBolt,
  },
  {
    title: "নিজের মতো Combo",
    desc: "আপনার প্রয়োজন অনুযায়ী প্যাক তৈরি করুন",
    icon: HiOutlineAdjustments,
  },
  {
    title: "নির্ভরযোগ্য ডেলিভারি",
    desc: "সময়মতো পণ্য পৌঁছে যাবে আপনার দরজায়",
    icon: HiOutlineTruck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <h2 className="font-poppins text-2xl font-bold text-dark-blue sm:text-3xl">
            কেন আমাদের থেকে কিনবেন?
          </h2>
          <p className="mx-auto mt-2 max-w-md font-inter text-sm text-dark-blue/60">
            আমাদের বিশেষত্বগুলো জানুন
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-light-cream bg-white p-6 text-center transition hover:-translate-y-1 hover:border-orange hover:shadow-md"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cream text-orange transition group-hover:bg-orange group-hover:text-white">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-poppins text-base font-semibold text-dark-blue">
                {feature.title}
              </h3>
              <p className="mt-1.5 font-inter text-sm leading-relaxed text-dark-blue/60">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
