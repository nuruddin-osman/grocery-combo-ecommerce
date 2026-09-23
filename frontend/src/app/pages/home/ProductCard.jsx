import { FiStar } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi2";

export default function ProductCard({
  name,
  unit,
  image,
  price,
  discountPrice,
  rating,
}) {
  const hasDiscount = discountPrice && discountPrice < price;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-dark-blue/10 bg-white transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="aspect-square overflow-hidden bg-light-cream">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-poppins text-sm font-semibold text-dark-blue sm:text-base">
          {name}
        </h3>
        <p className="font-inter mt-0.5 text-xs text-dark-blue/50">{unit}</p>

        <div className="mt-2 flex items-center gap-1 text-orange">
          {Array.from({ length: 5 }).map((_, i) => (
            <FiStar
              key={i}
              size={13}
              className={i < rating ? "fill-orange" : "fill-transparent text-dark-blue/20"}
            />
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-poppins text-base font-semibold text-dark-blue">
              ৳{hasDiscount ? discountPrice : price}
            </span>
            {hasDiscount && (
              <span className="font-inter text-xs text-dark-blue/40 line-through">
                ৳{price}
              </span>
            )}
          </div>
        </div>

        <button
          type="button"
          className="font-poppins mt-4 flex items-center justify-center gap-2 rounded-full bg-light-cream py-2.5 text-sm font-semibold text-dark-blue transition-colors hover:bg-orange hover:text-white"
        >
          <HiOutlineShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
