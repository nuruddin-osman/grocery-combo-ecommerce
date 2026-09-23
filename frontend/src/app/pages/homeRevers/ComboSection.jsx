// components/home/ComboSection.jsx
import Link from "next/link";
import ComboCard from "./ComboCard";

const COMBOS = [
  {
    id: 1,
    name: "Family Grocery Combo",
    productCount: 12,
    originalPrice: 3200,
    comboPrice: 2750,
    image: "/placeholder.svg",
    tag: "সেরা বিক্রি",
  },
  {
    id: 2,
    name: "Bachelor Combo",
    productCount: 8,
    originalPrice: 1800,
    comboPrice: 1550,
    image: "/placeholder.svg",
    tag: "জনপ্রিয়",
  },
  {
    id: 3,
    name: "Monthly Essentials Combo",
    productCount: 15,
    originalPrice: 4500,
    comboPrice: 3899,
    image: "/placeholder.svg",
    tag: "সাশ্রয়ী",
  },
  {
    id: 4,
    name: "Small Family Combo",
    productCount: 6,
    originalPrice: 1400,
    comboPrice: 1199,
    image: "/placeholder.svg",
    tag: null,
  },
];

export default function ComboSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between sm:mb-10">
          <div>
            <h2 className="font-poppins text-2xl font-bold text-dark-blue sm:text-3xl">
              জনপ্রিয় Combo
            </h2>
            <p className="mt-1 font-inter text-sm text-dark-blue/60">
              রেডিমেড প্যাক, সাশ্রয়ী দামে
            </p>
          </div>
          <Link
            href="/combos"
            className="font-inter text-sm font-semibold text-orange hover:underline"
          >
            সব দেখুন →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {COMBOS.map((combo) => (
            <ComboCard key={combo.id} combo={combo} />
          ))}
        </div>
      </div>
    </section>
  );
}
