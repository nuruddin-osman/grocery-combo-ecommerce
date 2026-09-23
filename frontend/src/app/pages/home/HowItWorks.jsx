import {
  HiOutlineShoppingBag,
  HiOutlineShoppingCart,
  HiOutlineMapPin,
  HiOutlineCheckCircle,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineSparkles,
} from "react-icons/hi2";

const STEPS = [
  { number: "01", label: "পণ্য বেছে নিন", icon: HiOutlineShoppingBag },
  { number: "02", label: "Cart-এ যোগ করুন", icon: HiOutlineShoppingCart },
  { number: "03", label: "ঠিকানা দিন", icon: HiOutlineMapPin },
  { number: "04", label: "অর্ডার সম্পন্ন করুন", icon: HiOutlineCheckCircle },
];

const COMBO_FLOW = [
  { label: "পণ্য বেছে নিন", icon: HiOutlineShoppingBag },
  { label: "পরিমাণ ঠিক করুন", icon: HiOutlineAdjustmentsHorizontal },
  { label: "Combo তৈরি করুন", icon: HiOutlineSparkles },
  { label: "অর্ডার করুন", icon: HiOutlineCheckCircle },
];

export default function HowItWorks() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mb-10 flex items-center gap-2 md:mb-14">
          <span className="h-2 w-2 rounded-full bg-orange" />
          <h2 className="font-poppins text-2xl font-semibold text-dark-blue sm:text-3xl">
            কীভাবে অর্ডার করবেন?
          </h2>
        </div>

        {/* Standard order steps */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
          {STEPS.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-dark-blue shadow-sm">
                <step.icon size={24} />
                <span className="font-poppins absolute -top-2 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-orange text-[11px] font-semibold text-white">
                  {step.number}
                </span>
              </div>
              <p className="font-inter mt-4 text-sm font-medium text-dark-blue sm:text-base">
                {step.label}
              </p>
            </div>
          ))}
        </div>

        {/* Custom combo flow */}
        <div className="mt-14 rounded-3xl bg-white p-6 sm:p-8 md:mt-20">
          <p className="font-poppins mb-6 text-sm font-semibold text-dark-blue/50">
            Custom Combo তৈরির ধাপ
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-3">
            {COMBO_FLOW.map((step, i) => (
              <div key={step.label} className="flex items-center gap-3 sm:flex-col sm:gap-2 sm:text-center">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-light-cream text-dark-blue">
                  <step.icon size={19} />
                </span>
                <span className="font-inter text-sm font-medium text-dark-blue">
                  {step.label}
                </span>
                {i < COMBO_FLOW.length - 1 && (
                  <span
                    className="font-inter hidden text-dark-blue/25 sm:block"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
