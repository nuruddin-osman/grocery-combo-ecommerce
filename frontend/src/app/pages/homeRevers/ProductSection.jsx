// components/home/ProductSection.jsx
import Link from "next/link";
import ProductCard from "./ProductCard";

const PRODUCTS = [
  {
    id: 1,
    name: "Miniket Rice",
    unit: "5 kg",
    price: 450,
    discountPrice: 420,
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Masoor Dal",
    unit: "1 kg",
    price: 140,
    discountPrice: 125,
    rating: 4,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Soybean Oil",
    unit: "2 L",
    price: 320,
    discountPrice: 295,
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Sugar",
    unit: "1 kg",
    price: 130,
    discountPrice: 118,
    rating: 4,
    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Turmeric Powder",
    unit: "500 g",
    price: 180,
    discountPrice: 160,
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Flour (Atta)",
    unit: "2 kg",
    price: 110,
    discountPrice: 98,
    rating: 4,
    image: "/placeholder.svg",
  },
  {
    id: 7,
    name: "Salt",
    unit: "1 kg",
    price: 40,
    discountPrice: 35,
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    id: 8,
    name: "Chola Boot",
    unit: "1 kg",
    price: 120,
    discountPrice: 105,
    rating: 4,
    image: "/placeholder.svg",
  },
];

export default function ProductSection() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between sm:mb-10">
          <div>
            <h2 className="font-poppins text-2xl font-bold text-dark-blue sm:text-3xl">
              জনপ্রিয় পণ্য
            </h2>
            <p className="mt-1 font-inter text-sm text-dark-blue/60">
              সবচেয়ে বেশি বিক্রিত পণ্যসমূহ
            </p>
          </div>
          <Link
            href="/products"
            className="font-inter text-sm font-semibold text-orange hover:underline"
          >
            সব দেখুন →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
