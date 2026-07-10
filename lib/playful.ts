export const CATEGORY_ACCENTS = [
  { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-200", ring: "group-hover:border-teal-300" },
  { bg: "bg-sky-50", text: "text-sky-600", border: "border-sky-200", ring: "group-hover:border-sky-300" },
  { bg: "bg-violet-50", text: "text-violet-600", border: "border-violet-200", ring: "group-hover:border-violet-300" },
  { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200", ring: "group-hover:border-amber-300" },
  { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-200", ring: "group-hover:border-rose-300" },
  { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200", ring: "group-hover:border-emerald-300" },
  { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200", ring: "group-hover:border-indigo-300" },
  { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", ring: "group-hover:border-orange-300" },
] as const;

export const TAG_COLORS = [
  "bg-slate-100 text-slate-600",
  "bg-teal-50 text-teal-700",
  "bg-sky-50 text-sky-700",
  "bg-violet-50 text-violet-700",
  "bg-amber-50 text-amber-700",
  "bg-rose-50 text-rose-700",
] as const;

export const CTA_TEXTS = ["Let's Go!", "Take Me There", "Send Me!", "Go Go Go!", "Open It!", "Check It Out", "Hop In!", "Off We Go!"] as const;

export const TOOL_EMOJIS = ["🚀", "✨", "🎯", "⚡", "🔥", "💫", "🎨", "🛠️", "📎", "🌟", "🎲", "💡", "🔧", "📌", "🧩"] as const;

export const HEADER_TAGLINES = [
  "Summon tools that actually help",
  "No more tab chaos",
  "Your gothic tool sanctuary",
  "Stop googling, start finding",
  "Curated grimoires, not clutter",
] as const;

export const SEARCH_PLACEHOLDERS = [
  "which grimoire do you seek...",
  "search gothic archives...",
  "find something useful...",
  "summon the right tool",
  "type to explore...",
] as const;

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function getCategoryAccent(index: number) {
  return CATEGORY_ACCENTS[index % CATEGORY_ACCENTS.length];
}

export function pickFromSeed<T>(seed: string, items: readonly T[]): T {
  return items[hashString(seed) % items.length];
}
