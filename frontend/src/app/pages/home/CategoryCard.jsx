import Link from "next/link";

export default function CategoryCard({ name, icon: Icon, href }) {
  return (
    <Link
      href={href}
      className="group flex shrink-0 flex-col items-center gap-3 rounded-2xl border border-dark-blue/10 bg-white px-4 py-5 transition-all hover:-translate-y-1 hover:border-orange/30 hover:shadow-md"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-light-cream text-dark-blue transition-colors group-hover:bg-orange group-hover:text-white">
        <Icon size={24} />
      </span>
      <span className="font-poppins text-sm font-medium text-dark-blue">{name}</span>
    </Link>
  );
}
