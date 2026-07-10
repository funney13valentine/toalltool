"use client";

import { useState } from "react";
import CategoryCard from "@/components/CategoryCard";
import type { Category } from "@/data/tools";

export default function HomeContent({ categories, toolCounts }: { categories: Category[]; toolCounts: Record<string, number> }) {
  const [query, setQuery] = useState("");
  const visibleCategories = categories.filter((category) => `${category.name} ${category.description}`.toLowerCase().includes(query.toLowerCase()));
  return <main>
    <section className="relative overflow-hidden bg-slate-950 px-5 pb-20 pt-16 text-white sm:px-6 sm:pb-24 sm:pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(20,184,166,0.23),transparent_32%),radial-gradient(circle_at_20%_85%,rgba(14,165,233,0.14),transparent_28%)]" />
      <div className="relative mx-auto max-w-[860px] text-center">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-teal-300">Your curated tools directory</p>
        <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Find All Your Favorite Online Tools in One Place</h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-slate-300 sm:text-lg">Save time. No more browsing multiple websites. All tools organized by category.</p>
        <div className="mx-auto mt-9 max-w-xl text-left"><label htmlFor="tool-search" className="sr-only">Search categories</label><div className="flex items-center gap-3 rounded-2xl bg-white p-2 shadow-2xl shadow-black/30"><span className="ml-3 text-slate-400" aria-hidden="true">⌕</span><input id="tool-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search tool categories..." className="min-w-0 flex-1 bg-transparent py-3 text-slate-800 outline-none placeholder:text-slate-400" /></div></div>
      </div>
    </section>
    <section className="mx-auto max-w-[1200px] px-5 py-16 sm:px-6 sm:py-20">
      {/* Google AdSense */}
      <div className="mb-8 flex flex-col gap-2 sm:mb-10"><p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-600">Browse by category</p><h2 className="text-3xl font-extrabold tracking-tight text-slate-900">The tools you need, clearly organized.</h2></div>
      {visibleCategories.length ? <div className="grid gap-5 md:grid-cols-3">{visibleCategories.map((category) => <CategoryCard key={category.id} category={category} toolCount={toolCounts[category.id] ?? 0} />)}</div> : <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center text-slate-600">No categories match “{query}”.</div>}
    </section>
  </main>;
}
