import Link from "next/link";

export default function ComboCard({
  name,
  image,
  itemCount,
  originalPrice,
  comboPrice,
  href,
}) {
  const savings = originalPrice - comboPrice;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-dark-blue/10 bg-white transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="aspect-[4/3] overflow-hidden bg-light-cream">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-poppins text-base font-semibold text-dark-blue">{name}</h3>
        <p className="font-inter mt-1 text-xs text-dark-blue/50">{itemCount}টি পণ্য</p>

        <div className="mt-3 flex items-baseline gap-2">
          <span className="font-poppins text-lg font-semibold text-dark-blue">
            ৳{comboPrice}
          </span>
          <span className="font-inter text-sm text-dark-blue/40 line-through">
            ৳{originalPrice}
          </span>
          <span className="font-inter rounded-full bg-light-cream px-2 py-0.5 text-xs font-medium text-dark-blue">
            ৳{savings} সাশ্রয়
          </span>
        </div>

        <Link
          href={href}
          className="font-poppins mt-4 flex items-center justify-center rounded-full border border-dark-blue/15 py-2.5 text-sm font-semibold text-dark-blue transition-colors hover:bg-orange hover:border-orange hover:text-white"
        >
          View Combo
        </Link>
      </div>
    </div>
  );
}
