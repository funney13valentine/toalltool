"use client";

import { useMemo, useState } from "react";
import CategoryCard from "@/components/CategoryCard";
import type { Category } from "@/data/tools";
import { SEARCH_PLACEHOLDERS, pickFromSeed } from "@/lib/playful";

const FLOATING_EMOJIS = ["🎨", "⚡", "🚀", "✨", "🎯", "🔧", "💡", "📎"];

export default function HomeContent({ categories, toolCounts }: { categories: Category[]; toolCounts: Record<string, number> }) {
  const [query, setQuery] = useState("");
  const placeholder = useMemo(() => pickFromSeed("search-placeholder", SEARCH_PLACEHOLDERS), []);
  const visibleCategories = categories.filter((category) =>
    `${category.name} ${category.description}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <main>
      <section className="relative overflow-hidden border-b border-slate-200/60 px-5 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900" aria-hidden="true" />
        <div
          className="animate-blob absolute -left-20 top-10 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="animate-blob absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-orange-400/15 blur-3xl"
          style={{ animationDelay: "-4s" }}
          aria-hidden="true"
        />
        <div
          className="animate-blob absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl"
          style={{ animationDelay: "-8s" }}
          aria-hidden="true"
        />

        {FLOATING_EMOJIS.map((emoji, index) => (
          <span
            key={emoji}
            className="pointer-events-none absolute select-none text-xl opacity-20 sm:text-3xl"
            style={{
              top: `${12 + (index * 19) % 65}%`,
              left: `${8 + (index * 21) % 82}%`,
              animation: `float ${4 + (index % 2)}s ease-in-out ${index * 0.5}s infinite`,
            }}
            aria-hidden="true"
          >
            {emoji}
          </span>
        ))}

        <div className="relative mx-auto max-w-[860px] text-center">
          <p className="font-display mb-5 inline-block animate-wobble rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold text-teal-200 backdrop-blur-sm sm:text-base">
            🎉 your curated tools directory
          </p>
          <h1 className="font-display text-balance text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Find All Your Favorite
            <span className="block text-teal-300">Online Tools in One Place</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base font-medium leading-7 text-slate-300 sm:text-lg">
            Stop googling. Start ToAllToolin&apos; ✨
            <span className="mt-1 block text-sm text-slate-400">No more 47 tabs open. We got you.</span>
          </p>
          <div className="mx-auto mt-9 max-w-xl text-left">
            <label htmlFor="tool-search" className="sr-only">
              Search categories
            </label>
            <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/95 p-2 shadow-xl shadow-black/20 backdrop-blur-sm transition-transform focus-within:scale-[1.02]">
              <span className="ml-3 text-xl" aria-hidden="true">
                🔍
              </span>
              <input
                id="tool-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={placeholder}
                className="min-w-0 flex-1 bg-transparent py-3 text-base font-semibold text-slate-800 outline-none placeholder:font-medium placeholder:text-slate-400"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="mr-2 rounded-full bg-slate-100 px-3 py-1.5 text-sm font-bold text-slate-600 transition hover:scale-110 hover:bg-slate-200"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-16 sm:px-6 sm:py-20">
        <div className="mb-10 flex flex-col gap-2 sm:mb-12">
          <p className="text-sm font-bold uppercase tracking-wider text-teal-600">Browse by category</p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
            What are we <span className="text-teal-600">toolin&apos;</span> today?
          </h2>
        </div>

        {visibleCategories.length ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleCategories.map((category, index) => (
              <CategoryCard
                key={category.id}
                category={category}
                toolCount={toolCounts[category.id] ?? 0}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white/70 p-12 text-center card-shadow">
            <p className="text-3xl" aria-hidden="true">
              😅
            </p>
            <p className="font-display mt-4 text-xl font-bold text-slate-800">
              No categories match &ldquo;{query}&rdquo;
            </p>
            <p className="mt-2 font-medium text-slate-500">Try a different search term.</p>
          </div>
        )}
      </section>
    </main>
  );
}
