// components/home/ReviewCard.jsx
import { HiOutlineStar, HiBadgeCheck } from "react-icons/hi";

export default function ReviewCard({ review }) {
  return (
    <div className="flex flex-col rounded-2xl border border-light-cream bg-cream p-5 transition hover:-translate-y-1 hover:shadow-md">
      {/* Stars */}
      <div className="flex gap-0.5 text-orange">
        {Array.from({ length: 5 }).map((_, i) => (
          <HiOutlineStar
            key={i}
            className={`h-4 w-4 ${
              i < review.rating ? "fill-orange" : "fill-transparent"
            }`}
          />
        ))}
      </div>

      {/* Review text */}
      <p className="mt-3 flex-1 font-inter text-sm leading-relaxed text-dark-blue/80">
        “{review.review}”
      </p>

      {/* Product */}
      <p className="mt-3 font-inter text-xs text-dark-blue/50">
        {review.product}
      </p>

      {/* Author */}
      <div className="mt-4 flex items-center gap-2 border-t border-light-cream pt-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange/15 font-poppins text-xs font-bold text-orange">
          {review.name.charAt(0)}
        </span>
        <div>
          <p className="font-poppins text-sm font-semibold text-dark-blue">
            {review.name}
          </p>
          <p className="flex items-center gap-1 font-inter text-[10px] text-orange">
            <HiBadgeCheck className="h-3 w-3" />
            Verified Purchase
          </p>
        </div>
      </div>
    </div>
  );
}
