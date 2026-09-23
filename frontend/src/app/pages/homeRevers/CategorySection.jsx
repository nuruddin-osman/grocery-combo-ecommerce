// components/home/CategorySection.jsx
import Link from "next/link";
import {
  GiRiceCooker,
  GiChiliPepper,
  GiOilDrum,
  GiSugarCane,
  GiSaltShaker,
  GiWheat,
  GiBasket,
} from "react-icons/gi";

const CATEGORIES = [
  { name: "চাল", icon: GiRiceCooker, slug: "rice" },
  { name: "ডাল", icon: GiBasket, slug: "lentils" },
  { name: "তেল", icon: GiOilDrum, slug: "oil" },
  { name: "মসলা", icon: GiChiliPepper, slug: "spices" },
  { name: "চিনি", icon: GiSugarCane, slug: "sugar" },
  { name: "লবণ", icon: GiSaltShaker, slug: "salt" },
  { name: "আটা ও ময়দা", icon: GiWheat, slug: "flour" },
  { name: "অন্যান্য", icon: GiChiliPepper, slug: "others" },
];

function CategoryCard({ name, icon: Icon, slug }) {
  return (
    <Link
      href={`/categories/${slug}`}
      className="group flex flex-col items-center gap-3 rounded-2xl border border-light-cream bg-white p-4 transition hover:-translate-y-1 hover:border-orange hover:shadow-md sm:p-5"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-orange transition group-hover:bg-orange group-hover:text-white sm:h-14 sm:w-14">
        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
      </span>
      <span className="font-poppins text-sm font-semibold text-dark-blue transition group-hover:text-orange">
        {name}
      </span>
    </Link>
  );
}

export default function CategorySection() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between sm:mb-10">
          <div>
            <h2 className="font-poppins text-2xl font-bold text-dark-blue sm:text-3xl">
              জনপ্রিয় ক্যাটাগরি
            </h2>
            <p className="mt-1 font-inter text-sm text-dark-blue/60">
              আপনার দৈনন্দিন প্রয়োজনের সবকিছু
            </p>
          </div>
          <Link
            href="/categories"
            className="hidden font-inter text-sm font-semibold text-orange hover:underline sm:block"
          >
            সব দেখুন →
          </Link>
        </div>

        {/* Mobile: horizontal scroll | Desktop: grid */}
        <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-4 sm:gap-4 sm:overflow-visible sm:px-0 lg:grid-cols-8">
          {CATEGORIES.map((cat) => (
            <div key={cat.slug} className="w-28 shrink-0 sm:w-auto">
              <CategoryCard {...cat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
