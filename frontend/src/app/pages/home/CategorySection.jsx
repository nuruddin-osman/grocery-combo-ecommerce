import {
  GiRiceCooker,
  GiPeas,
  GiOilDrum,
  GiChiliPepper,
  GiSugarCane,
  GiSaltShaker,
  GiWheat,
  GiShoppingBag,
} from "react-icons/gi";
import CategoryCard from "./CategoryCard";

const CATEGORIES = [
  { name: "চাল", icon: GiRiceCooker, href: "/categories/rice" },
  { name: "ডাল", icon: GiPeas, href: "/categories/lentils" },
  { name: "তেল", icon: GiOilDrum, href: "/categories/oil" },
  { name: "মসলা", icon: GiChiliPepper, href: "/categories/spices" },
  { name: "চিনি", icon: GiSugarCane, href: "/categories/sugar" },
  { name: "লবণ", icon: GiSaltShaker, href: "/categories/salt" },
  { name: "আটা ও ময়দা", icon: GiWheat, href: "/categories/flour" },
  { name: "অন্যান্য", icon: GiShoppingBag, href: "/categories/others" },
];

export default function CategorySection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mb-8 flex items-center gap-2 md:mb-10">
          <span className="h-2 w-2 rounded-full bg-orange" />
          <h2 className="font-poppins text-2xl font-semibold text-dark-blue sm:text-3xl">
            জনপ্রিয় ক্যাটাগরি
          </h2>
        </div>

        <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-4 sm:gap-4 sm:overflow-visible sm:px-0 lg:grid-cols-8">
          {CATEGORIES.map((cat) => (
            <div key={cat.href} className="w-28 sm:w-auto">
              <CategoryCard {...cat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
