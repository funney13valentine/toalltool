import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import { categories, getCategoryBySlug, getSubcategories, getToolsByCategory } from "@/data/tools";
import { getCategoryAccent } from "@/lib/playful";

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
  const accent = getCategoryAccent(categoryIndex);

  return (
    <main>
      <section className="relative overflow-hidden border-b border-slate-200/60 bg-white/60 px-5 py-10 backdrop-blur-sm sm:px-6 sm:py-14">
        <div className="absolute -right-8 -top-8 text-7xl opacity-[0.04] animate-wobble" aria-hidden="true">
          {category.icon}
        </div>
        <div className="relative mx-auto max-w-[1200px]">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="font-medium transition hover:text-teal-600">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-slate-700">{category.name}</span>
          </nav>
          <div className="flex items-start gap-4">
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border ${accent.border} ${accent.bg} text-3xl`}
              aria-hidden="true"
            >
              {category.icon}
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-teal-600">Tool directory</p>
              <h1 className="font-display mt-1 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
                {category.name}
              </h1>
              <p className="mt-3 max-w-2xl leading-7 text-slate-500">
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
                  <p className="text-sm font-bold text-teal-600">{subcategoryTools.length} tools</p>
                  <h2 id={`subcategory-${index}`} className="font-display mt-1 text-2xl font-extrabold tracking-tight text-slate-800">
                    {subcategory}
                  </h2>
                </div>
                <span className="hidden text-sm font-medium text-slate-400 sm:block">Compare and choose with confidence</span>
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
