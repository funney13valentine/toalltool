"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import CategoryCard from "@/components/CategoryCard";
import type { Category } from "@/data/tools";
import { SEARCH_PLACEHOLDERS, pickFromSeed } from "@/lib/playful";

const FLOATING_EMOJIS = ["🕸️", "🦇", "🍷", "🖤", "⚔️", "🕯️", "🥀", "🔮"];

export default function HomeContent({ categories, toolCounts }: { categories: Category[]; toolCounts: Record<string, number> }) {
  const [query, setQuery] = useState("");
  const placeholder = useMemo(() => pickFromSeed("search-placeholder", SEARCH_PLACEHOLDERS), []);
  const visibleCategories = categories.filter((category) =>
    `${category.name} ${category.description}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <main>
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center overflow-hidden border-b border-gothic-border/60 px-5 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gothic-dark via-[#120707] to-[#1f090d]" aria-hidden="true" />
        <div
          className="animate-blob absolute -left-20 top-10 h-64 w-64 rounded-full bg-gothic-crimson/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="animate-blob absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-gothic-rose/5 blur-3xl"
          style={{ animationDelay: "-4s" }}
          aria-hidden="true"
        />
        <div
          className="animate-blob absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-950/10 blur-3xl"
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

        <div className="relative mx-auto flex flex-col items-center justify-center max-w-[1000px] text-center w-full">
          {/* Logo Slot */}
          <div
            id="hero-logo-slot"
            className="relative mb-6 h-40 w-40 sm:h-52 sm:w-52 md:h-64 md:w-64 lg:h-72 lg:w-72 filter drop-shadow-[0_0_20px_rgba(220,38,38,0.2)]"
          >
            <Image
              src="/logo.png"
              alt="ToAllTool Logo"
              fill
              className="object-contain animate-float"
              priority
            />
          </div>
          
          {/* Brand Text Slot */}
          <div
            className="w-full flex justify-center items-center h-[70px] sm:h-[110px] md:h-[160px] lg:h-[220px] mb-8"
          >
            <span
              id="hero-text-slot"
              className="font-display font-extrabold tracking-tight text-white leading-none text-center select-none text-[60px] sm:text-[100px] md:text-[150px] lg:text-[200px]"
            >
              ToAll<span className="text-gothic-crimson drop-shadow-[0_0_15px_#dc2626]">Tool</span>
            </span>
          </div>

          {/* Rest of Hero Details */}
          <div className="mt-4 w-full animate-slide-up max-w-[700px] px-4">
            <p className="font-display mb-4 inline-block rounded-full border border-gothic-border/60 bg-gothic-card/70 px-4 py-1.5 text-xs font-bold text-gothic-accent backdrop-blur-sm sm:text-sm tracking-wider uppercase shadow-[0_0_15px_rgba(220,38,38,0.1)]">
              🔮 your curated tools sanctuary
            </p>
            <p className="mx-auto text-pretty text-base font-semibold leading-7 text-slate-300 sm:text-lg">
              Stop googling. Start ToAllToolin&apos; 🖤
              <span className="mt-1 block text-xs text-slate-400">All the web's magic, summoned into one library.</span>
            </p>

            {/* Gothic Search Bar */}
            <div className="mx-auto mt-8 max-w-xl text-left">
              <label htmlFor="tool-search" className="sr-only">
                Search categories
              </label>
              <div className="group flex items-center gap-3 rounded-2xl border border-gothic-border/60 bg-gothic-card/85 p-2 shadow-2xl shadow-black/85 backdrop-blur-md transition-all duration-300 focus-within:scale-[1.02] focus-within:border-gothic-crimson/80 focus-within:shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                <span className="ml-3 text-xl filter drop-shadow-[0_0_5px_rgba(220,38,38,0.5)]" aria-hidden="true">
                  🔍
                </span>
                <input
                  id="tool-search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={placeholder}
                  className="min-w-0 flex-1 bg-transparent py-3 text-base font-semibold text-white outline-none placeholder:font-medium placeholder:text-slate-500"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="mr-2 rounded-full bg-slate-800 px-3 py-1.5 text-sm font-bold text-slate-300 transition hover:scale-110 hover:bg-gothic-crimson hover:text-white"
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-16 sm:px-6 sm:py-20">
        <div className="mb-10 flex flex-col gap-2 sm:mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-gothic-crimson drop-shadow-[0_0_5px_rgba(220,38,38,0.3)]">Browse the archives</p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            What tools shall we <span className="text-gothic-crimson filter drop-shadow-[0_0_8px_rgba(220,38,38,0.4)]">summon</span> today?
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
          <div className="rounded-2xl border border-dashed border-gothic-border/60 bg-gothic-card/50 p-12 text-center card-shadow">
            <p className="text-3xl" aria-hidden="true">
              💀
            </p>
            <p className="font-display mt-4 text-xl font-bold text-white">
              No grimoires match &ldquo;{query}&rdquo;
            </p>
            <p className="mt-2 font-medium text-slate-400">Try a different incantation.</p>
          </div>
        )}
      </section>
    </main>
  );
}
