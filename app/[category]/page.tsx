import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import { categories, getCategoryBySlug, getSubcategories, getToolsByCategory } from "@/data/tools";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category Not Found" };
  const count = getToolsByCategory(category.id).length;
  return {
    title: `${category.name} (${count} Tools)`,
    description: `Explore ${count} trusted ${category.name.toLowerCase()} organized by purpose. Compare features, ratings, and visit the right tool.`,
    openGraph: {
      title: `${category.name} | ToAllTool`,
      description: `Explore ${count} trusted tools in the ${category.name} category.`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();
  const categoryTools = getToolsByCategory(category.id);
  const subcategories = getSubcategories(category.id);
  const categoryIndex = categories.findIndex((item) => item.id === category.id);

  // Subtle colored gothic glows and borders for each card index to maintain the playful variety!
  const gothicAccents = [
    { text: "text-red-400", border: "border-red-900/40", hoverBorder: "group-hover:border-red-500/60", hoverShadow: "group-hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]", bg: "bg-red-950/20" },
    { text: "text-rose-400", border: "border-rose-900/40", hoverBorder: "group-hover:border-rose-500/60", hoverShadow: "group-hover:shadow-[0_0_20px_rgba(244,63,94,0.15)]", bg: "bg-rose-950/20" },
    { text: "text-orange-400", border: "border-orange-900/40", hoverBorder: "group-hover:border-orange-500/60", hoverShadow: "group-hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]", bg: "bg-orange-950/20" },
    { text: "text-amber-400", border: "border-amber-900/40", hoverBorder: "group-hover:border-amber-500/60", hoverShadow: "group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]", bg: "bg-amber-950/20" },
    { text: "text-pink-400", border: "border-pink-900/40", hoverBorder: "group-hover:border-pink-500/60", hoverShadow: "group-hover:shadow-[0_0_20px_rgba(236,72,153,0.15)]", bg: "bg-pink-950/20" },
    { text: "text-emerald-400", border: "border-emerald-900/40", hoverBorder: "group-hover:border-emerald-500/60", hoverShadow: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]", bg: "bg-emerald-950/20" },
  ];
  
  const accent = gothicAccents[categoryIndex % gothicAccents.length];

  return (
    <main>
      <section className="relative overflow-hidden border-b border-gothic-border/60 bg-gothic-card/40 px-5 py-10 backdrop-blur-sm sm:px-6 sm:py-14">
        <div className="absolute -right-8 -top-8 text-7xl opacity-[0.08] animate-wobble" aria-hidden="true">
          {category.icon}
        </div>
        <div className="relative mx-auto max-w-[1200px]">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="font-medium transition hover:text-gothic-crimson">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-slate-200">{category.name}</span>
          </nav>
          <div className="flex items-start gap-4">
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border ${accent.border} ${accent.bg} ${accent.text} text-3xl`}
              aria-hidden="true"
            >
              {category.icon}
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-gothic-crimson">Tool directory</p>
              <h1 className="font-display mt-1 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                {category.name}
              </h1>
              <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                {category.description} Explore {categoryTools.length} carefully selected tools across{' '}
                {subcategories.length} subcategories.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-6 sm:py-16">
        {subcategories.map((subcategory, index) => {
          const subcategoryTools = categoryTools.filter((tool) => tool.subcategory === subcategory);
          return (
            <section key={subcategory} className={index ? "mt-16" : ""} aria-labelledby={`subcategory-${index}`}>
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-gothic-crimson">{subcategoryTools.length} tools</p>
                  <h2 id={`subcategory-${index}`} className="font-display mt-1 text-2xl font-extrabold tracking-tight text-white">
                    {subcategory}
                  </h2>
                </div>
                <span className="hidden text-sm font-medium text-slate-500 sm:block">Compare and choose with confidence</span>
              </div>
              <div className="grid gap-5 lg:grid-cols-2">
                {subcategoryTools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
