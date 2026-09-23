import { FiStar } from "react-icons/fi";
import { HiOutlineCheckBadge } from "react-icons/hi2";

export default function ReviewCard({ name, rating, review, productName }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-dark-blue/10 bg-white p-6">
      <div className="flex items-center gap-1 text-orange">
        {Array.from({ length: 5 }).map((_, i) => (
          <FiStar
            key={i}
            size={14}
            className={i < rating ? "fill-orange" : "fill-transparent text-dark-blue/20"}
          />
        ))}
      </div>

      <p className="font-inter mt-4 flex-1 text-sm leading-relaxed text-dark-blue/80">
        “{review}”
      </p>

      <div className="mt-5 border-t border-dark-blue/10 pt-4">
        <p className="font-poppins text-sm font-semibold text-dark-blue">{name}</p>
        <div className="mt-1 flex items-center gap-2">
          <span className="font-inter text-xs text-dark-blue/50">{productName}</span>
          <span className="flex items-center gap-1 text-xs font-medium text-orange">
            <HiOutlineCheckBadge size={13} />
            Verified Purchase
          </span>
        </div>
      </div>
    </div>
  );
}
