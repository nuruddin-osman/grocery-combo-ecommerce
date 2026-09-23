import ProductCard from "./ProductCard";

const PRODUCTS = [
  {
    name: "Miniket Rice",
    unit: "5 kg",
    image: "/images/products/miniket-rice.jpg",
    price: 420,
    discountPrice: null,
    rating: 5,
  },
  {
    name: "Masoor Dal",
    unit: "1 kg",
    image: "/images/products/masoor-dal.jpg",
    price: 140,
    discountPrice: 125,
    rating: 4,
  },
  {
    name: "Soyabean Oil",
    unit: "2 L",
    image: "/images/products/soyabean-oil.jpg",
    price: 380,
    discountPrice: null,
    rating: 5,
  },
  {
    name: "Sugar",
    unit: "1 kg",
    image: "/images/products/sugar.jpg",
    price: 130,
    discountPrice: 118,
    rating: 4,
  },
  {
    name: "Aata (Flour)",
    unit: "2 kg",
    image: "/images/products/aata.jpg",
    price: 150,
    discountPrice: null,
    rating: 4,
  },
];

export default function ProductSection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mb-8 flex items-center gap-2 md:mb-10">
          <span className="h-2 w-2 rounded-full bg-orange" />
          <h2 className="font-poppins text-2xl font-semibold text-dark-blue sm:text-3xl">
            জনপ্রিয় পণ্য
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-5">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
