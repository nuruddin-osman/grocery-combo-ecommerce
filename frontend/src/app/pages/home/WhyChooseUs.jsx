import {
  HiOutlineShieldCheck,
  HiOutlineBolt,
  HiOutlineSparkles,
  HiOutlineTruck,
} from "react-icons/hi2";

const FEATURES = [
  { title: "মানসম্মত পণ্য", icon: HiOutlineShieldCheck },
  { title: "সহজ অর্ডার", icon: HiOutlineBolt },
  { title: "নিজের মতো Combo", icon: HiOutlineSparkles },
  { title: "নির্ভরযোগ্য ডেলিভারি", icon: HiOutlineTruck },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mb-10 flex items-center gap-2 md:mb-14">
          <span className="h-2 w-2 rounded-full bg-orange" />
          <h2 className="font-poppins text-2xl font-semibold text-dark-blue sm:text-3xl">
            কেন আমাদের থেকে কিনবেন?
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center gap-3 rounded-2xl border border-dark-blue/10 px-4 py-7 text-center transition-colors hover:border-orange/30"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-light-cream text-dark-blue">
                <feature.icon size={24} />
              </span>
              <p className="font-poppins text-sm font-medium text-dark-blue sm:text-base">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
