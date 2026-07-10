import Link from "next/link";
import type { Category } from "@/data/tools";

export default function CategoryCard({
  category,
  toolCount,
  index,
}: {
  category: Category;
  toolCount: number;
  index: number;
}) {
  const rotation = index % 2 === 0 ? "hover:rotate-[0.5deg]" : "hover:-rotate-[0.5deg]";

  // Subtle colored gothic glows and borders for each card index to maintain the playful variety!
  const gothicAccents = [
    { text: "text-emerald-400", border: "border-emerald-900/40", hoverBorder: "group-hover:border-emerald-500/60", hoverShadow: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]", bg: "bg-emerald-950/20" },
    { text: "text-teal-400", border: "border-teal-900/40", hoverBorder: "group-hover:border-teal-500/60", hoverShadow: "group-hover:shadow-[0_0_20px_rgba(20,184,166,0.15)]", bg: "bg-teal-950/20" },
    { text: "text-lime-400", border: "border-lime-900/40", hoverBorder: "group-hover:border-lime-500/60", hoverShadow: "group-hover:shadow-[0_0_20px_rgba(132,204,22,0.15)]", bg: "bg-lime-950/20" },
    { text: "text-amber-400", border: "border-amber-900/40", hoverBorder: "group-hover:border-amber-500/60", hoverShadow: "group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]", bg: "bg-amber-950/20" },
    { text: "text-orange-400", border: "border-orange-900/40", hoverBorder: "group-hover:border-orange-500/60", hoverShadow: "group-hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]", bg: "bg-orange-950/20" },
    { text: "text-cyan-400", border: "border-cyan-900/40", hoverBorder: "group-hover:border-cyan-500/60", hoverShadow: "group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]", bg: "bg-cyan-950/20" },
  ];
  
  const accent = gothicAccents[index % gothicAccents.length];

  return (
    <Link
      href={`/${category.slug}`}
      className={`group block rounded-2xl border ${accent.border} bg-gothic-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 sm:p-7 card-shadow ${accent.hoverBorder} ${accent.hoverShadow} ${rotation}`}
    >
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-xl border border-gothic-border/60 ${accent.bg} ${accent.text} text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
        aria-hidden="true"
      >
        {category.icon}
      </div>
      <h3 className="font-display mt-5 text-xl font-extrabold tracking-tight text-white">{category.name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{category.description}</p>
      <div className="mt-5 flex items-center justify-between">
        <span className={`text-sm font-bold ${accent.text}`}>{toolCount} summoned tools</span>
        <span
          className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-all group-hover:translate-x-0.5 group-hover:bg-gothic-emerald group-hover:text-white group-hover:shadow-[0_0_10px_#10b981]"
          aria-hidden="true"
        >
          →
        </span>
      </div>
    </Link>
  );
}
