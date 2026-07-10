import Link from "next/link";
import type { Category } from "@/data/tools";

export default function CategoryCard({ category, toolCount }: { category: Category; toolCount: number }) {
  return (
    <Link href={`/${category.slug}`} className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/5 sm:p-7">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-2xl font-bold text-teal-600 transition group-hover:bg-teal-500 group-hover:text-white" aria-hidden="true">{category.icon}</div>
      <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900">{category.name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
      <div className="mt-5 flex items-center justify-between text-sm font-bold text-teal-600"><span>{toolCount} hand-picked tools</span><span className="transition group-hover:translate-x-1" aria-hidden="true">→</span></div>
    </Link>
  );
}
