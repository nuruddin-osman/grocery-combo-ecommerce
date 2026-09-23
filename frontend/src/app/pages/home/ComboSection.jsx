import ComboCard from "./ComboCard";

const COMBOS = [
  {
    name: "Family Grocery Combo",
    image: "/images/combos/family-combo.jpg",
    itemCount: 8,
    originalPrice: 2400,
    comboPrice: 2150,
    href: "/combos/family-grocery",
  },
  {
    name: "Bachelor Combo",
    image: "/images/combos/bachelor-combo.jpg",
    itemCount: 5,
    originalPrice: 1100,
    comboPrice: 980,
    href: "/combos/bachelor",
  },
  {
    name: "Monthly Essentials Combo",
    image: "/images/combos/monthly-combo.jpg",
    itemCount: 10,
    originalPrice: 3200,
    comboPrice: 2850,
    href: "/combos/monthly-essentials",
  },
  {
    name: "Small Family Combo",
    image: "/images/combos/small-family-combo.jpg",
    itemCount: 6,
    originalPrice: 1650,
    comboPrice: 1480,
    href: "/combos/small-family",
  },
];

export default function ComboSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mb-8 flex items-center gap-2 md:mb-10">
          <span className="h-2 w-2 rounded-full bg-orange" />
          <h2 className="font-poppins text-2xl font-semibold text-dark-blue sm:text-3xl">
            জনপ্রিয় Combo
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {COMBOS.map((combo) => (
            <ComboCard key={combo.href} {...combo} />
          ))}
        </div>
      </div>
    </section>
  );
}
