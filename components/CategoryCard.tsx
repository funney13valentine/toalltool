import Link from "next/link";
import type { Category } from "@/data/tools";
import { getCategoryAccent } from "@/lib/playful";

export default function CategoryCard({
  category,
  toolCount,
  index,
}: {
  category: Category;
  toolCount: number;
  index: number;
}) {
  const accent = getCategoryAccent(index);
  const rotation = index % 2 === 0 ? "hover:rotate-[0.5deg]" : "hover:-rotate-[0.5deg]";

  return (
    <Link
      href={`/${category.slug}`}
      className={`group block rounded-2xl border border-slate-200/80 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 sm:p-7 card-shadow card-shadow-hover ${accent.ring} ${rotation}`}
    >
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-xl border ${accent.border} ${accent.bg} text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
        aria-hidden="true"
      >
        {category.icon}
      </div>
      <h3 className="font-display mt-5 text-xl font-extrabold tracking-tight text-slate-800">{category.name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{category.description}</p>
      <div className="mt-5 flex items-center justify-between">
        <span className={`text-sm font-bold ${accent.text}`}>{toolCount} hand-picked tools</span>
        <span
          className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all group-hover:translate-x-0.5 group-hover:bg-teal-500 group-hover:text-white"
          aria-hidden="true"
        >
          →
        </span>
      </div>
    </Link>
  );
}
